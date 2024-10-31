import { DeviceParentRepository } from "@/domain/service/power-monitoring/device-parent";
import { inject, injectable } from "inversify";
// import ManagedTransactionService from "../managed-transaction-service";
import { TYPES } from "@/types";
// import { TStandardPaginationOption } from "@/domain/service/types";
import { DeviceParent, IDeviceParent } from "@/domain/models/power-monitoring/device-parents";
// import { Pagination } from "@/domain/models/pagination";
// import { CacheHandler } from "@/libs/cache-handler";
// import { container } from "@/container";
import { Transaction } from "sequelize";

@injectable()
export class DeviceParentService {
  // private cacheInstance = container.get<CacheHandler>(CacheHandler);
  constructor(
    @inject(TYPES.DeviceParentRepository) private _deviceParentRepository: DeviceParentRepository,
    // @inject(TYPES.ManagedTransactionService)
    // private _serviceTransaction: ManagedTransactionService
  ) { }
  // public async findAll(param: TStandardPaginationOption): Promise<[IDeviceParent[], Pagination?]> {
  //   return await this.cacheInstance.findOrCreate({
  //     payload: JSON.stringify(param),
  //     eventName: this.findAll.name,
  //     moduleName: this.constructor.name,
  //     fetchData: async () => {
  //       let pagination: Pagination | undefined = undefined;
  //       if (param.limit && param.page) {
  //         pagination = Pagination.create({
  //           page: param.page,
  //           limit: param.limit,
  //         });
  //         const [data, paginationResult] = await this._deviceParentRepository.findAllWithPagination(param, pagination, {});
  //         return [
  //           data.map((el) => ({ ...el.unmarshal(), password: undefined })),
  //         ];
  //       }
  //       const deviceParents = await this._deviceParentRepository.findAll({});
  //       return [
  //         deviceParents.map((deviceParent) => ({ ...deviceParent.unmarshal() })),
  //       ];
  //     }
  //   });
  // }

  public async store(_deviceParent: IDeviceParent, t?: Transaction): Promise<IDeviceParent> {
    const deviceParentData = DeviceParent.create({
      ..._deviceParent
    });

    const deviceParent = await this._deviceParentRepository.create(
      deviceParentData.unmarshal(),
      t ? { t } : {}
    );
    return {
      ...deviceParent.unmarshal(),
    };
  }
}