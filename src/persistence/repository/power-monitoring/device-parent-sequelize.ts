import { injectable } from "inversify";
import { DeviceParentRepository } from "@/domain/service/power-monitoring/device-parent";
import { IDeviceParent, DeviceParent } from "@/domain/models/power-monitoring/device-parents";
import { BaseQueryOption, TStandardPaginationOption } from "@/domain/service/types";
import { DeviceParent as DeviceParentPersistence } from "@/infrastructure/database/models";
import { Pagination } from "@/domain/models/pagination";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { Op, Order } from "sequelize";
import { validateOrderByColumn } from "@/libs/formatters";
import { VALID_ORDERBY_COLUMN } from "@/const";

@injectable()
export class DeviceParentSequelizeRepository implements DeviceParentRepository {
  async create(props: IDeviceParent, option: Partial<BaseQueryOption>): Promise<DeviceParent> {
    const data = await DeviceParentPersistence.create(props, { transaction: option.t });
    return DeviceParent.create(data.toJSON());
  }

  async delete(id: string,option: Partial<BaseQueryOption>): Promise<boolean> {
    const data = await DeviceParentPersistence.findByPk(id, { transaction: option.t });

    if (!data) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: "Device parent not found!",
      });
    } try {
      await data.destroy({ force: true, transaction: option.t });
    } catch (err) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Resources already used in transaction",
      });
    }
    return true;
  }

  async findAll(option: Partial<BaseQueryOption>): Promise<DeviceParent[]> {
    const data = await DeviceParentPersistence.findAll({
      transaction: option.t,
    });
    return data.map((el) => DeviceParent.create(el.toJSON()));
  }

  async findAllWithPagination({ q, orderBy, sortBy }: TStandardPaginationOption, pagination: Pagination, queryOption: Partial<BaseQueryOption>): Promise<[DeviceParent[], Pagination]> {
    orderBy && validateOrderByColumn(orderBy, VALID_ORDERBY_COLUMN.DEVICE_PARENT);
    const order: Order = [];
    switch (orderBy) {
    case "name":
      order.push(["name", sortBy!]);
      break;
    default:
      if (orderBy) order.push([orderBy, sortBy!]);
      break;
    }

    const { rows: data, count } = await DeviceParentPersistence.findAndCountAll({
      where: {
        ...(q && {
          [Op.or] : [
            {
              name: {
                [Op.iLike]: `%${q}%`,
              },
            },
          ]
        })
      },
      offset: pagination.offset,
      limit: pagination.limit,
      transaction: queryOption.t,
      order
    });
    pagination.generateMeta(count, data.length);
    return [data.map((el) => DeviceParent.create(el.toJSON())), pagination];
  }

  async findById(id: string, option: Partial<BaseQueryOption>): Promise<DeviceParent> {
    const data = await DeviceParentPersistence.findByPk(id, {
      transaction: option.t
    });
    if (!data) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: "Device parent not found!"
      });
    }
    return DeviceParent.create(data.toJSON());
  }

  async update(
    id: string,
    props: IDeviceParent,
    option: Partial<BaseQueryOption>
  ): Promise<DeviceParent> {
    const data = await DeviceParentPersistence.findByPk(id, { transaction: option.t });
    if (!data) {
      throw new AppError({
        statusCode: HttpCode.NOT_FOUND,
        description: "Device not found!"
      });
    }
    await data.update(props, { transaction: option.t });
    return DeviceParent.create(data.toJSON());
  }
}
