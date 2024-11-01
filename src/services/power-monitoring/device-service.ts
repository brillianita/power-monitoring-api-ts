import { DeviceRepository } from "@/domain/service/power-monitoring/device";
import { inject, injectable } from "inversify";
import ManagedTransactionService from "../managed-transaction-service";
import { TYPES } from "@/types";
import { TStandardPaginationOption } from "@/domain/service/types";
import { Device, IDevice } from "@/domain/models/power-monitoring/device";
import { CacheHandler } from "@/libs/cache-handler";
import { container } from "@/container";
import { Transaction } from "sequelize";
import { Pagination } from "@/domain/models/pagination";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";

@injectable()
export class DeviceService {
  private cacheInstance = container.get<CacheHandler>(CacheHandler);
  constructor(
    @inject(TYPES.DeviceRepository) private _deviceRepository: DeviceRepository,
    @inject(TYPES.ManagedTransactionService)
    private _serviceTransaction: ManagedTransactionService
  ) { }

  public async store(_device: IDevice, t?: Transaction): Promise<IDevice> {
    console.log("req.body service", {..._device});
    
    const deviceData = Device.create({
      ..._device
    });


    const device = await this._deviceRepository.create(
      deviceData.unmarshal(),
      t ? { t } : {}
    );
    return {
      ...device.unmarshal(),
    };
  }

  public async findAll(param: TStandardPaginationOption): Promise<[IDevice[], Pagination?]> {
    return await this.cacheInstance.findOrCreate({
      payload: JSON.stringify(param),
      eventName: this.findAll.name,
      moduleName: this.constructor.name,
      fetchData: async () => {
        let pagination: Pagination | undefined = undefined;
        if (param.limit && param.page) {
          pagination = Pagination.create({
            page: param.page,
            limit: param.limit,
          });
          const [data, paginationResult] = await this._deviceRepository.findAllWithPagination(param, pagination, {});
          return [
            data.map((el) => ({ ...el.unmarshal(), password: undefined })), paginationResult
          ];
        }
        const devices = await this._deviceRepository.findAll({});
        return [
          devices.map((device) => ({ ...device.unmarshal() })),
        ];
      }
    });
  }

  public async update(
    id: string,
    _device: IDevice,
    t?: Transaction
  ): Promise<IDevice> {
    const oldDeviceData = await this._deviceRepository.findById(id, t ? { t } : {});
    if (!oldDeviceData) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: "Device parent id doesn't exist"
      });
    }
    const deviceProps = Device.create({
      ..._device,
      id
    });
    const device = await this._deviceRepository.update(
      id,
      deviceProps.unmarshal(),
      t ? { t } : {}
    );

    return {
      ...device.unmarshal()
    };
  }

  public async destroy(id: string): Promise<boolean> {
    return await this._serviceTransaction.runOnSingleTransaction(
      async(t: Transaction) => {
        const deviceData = await this._deviceRepository.findById(id, t? { t }: {});

        if(!deviceData) {
          throw new AppError({
            statusCode: HttpCode.NOT_FOUND,
            description: "Device parent id not found"
          });
        }
        await this._deviceRepository.delete(id, t? {t}: {});
        return true;
      },
      "Failed to destroy device parent"
    );
  }

  public async findById(id: string, t?: Transaction): Promise<IDevice> {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let option: {} | {t: Transaction} = {};
    if(t) {
      option = {t};
    }
    const device = await this._deviceRepository.findById(id, option);
    return {
      ...device.unmarshal(),
    };
  }
}