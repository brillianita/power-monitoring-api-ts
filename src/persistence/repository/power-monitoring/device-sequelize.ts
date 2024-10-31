// import { injectable } from "inversify";
// import { DeviceRepository } from "@/domain/service/power-monitoring/device";
// import { IDevice, Device } from "@/domain/models/power-monitoring/device";
// import { BaseQueryOption, TStandardPaginationOption } from "@/domain/service/types";
// import { Device as DevicePersistence } from "@/infrastructure/database/models";
// import { Pagination } from "@/domain/models/pagination";
// import { AppError, HttpCode } from "@/libs/exceptions/app-error";
// import { Op, Order } from "sequelize";
// import { validateOrderByColumn } from "@/libs/formatters";
// import { VALID_ORDERBY_COLUMN } from "@/const";

// @injectable()
// export class DeviceSequelizeRepository implements DeviceRepository {
//   async create(props: IDevice, option: Partial<BaseQueryOption>): Promise<Device> {
//     const data = await DevicePersistence.create(props, { transaction: option.t });
//     return Device.create(data.toJSON());
//   }

//   async delete(id: string, option: Partial<BaseQueryOption>): Promise<boolean> {
//     const data = await DevicePersistence.findByPk(id, { transaction: option.t });

//     if (!data) {
//       throw new AppError({
//         statusCode: HttpCode.NOT_FOUND,
//         description: "Device not found!",
//       });
//     } try {
//       await data.destroy({ force: true, transaction: option.t });
//     } catch (err) {
//       throw new AppError({
//         statusCode: HttpCode.VALIDATION_ERROR,
//         description: "Resources already used in transaction",
//       });
//     }
//     return true;
//   }

//   async findAll(option: Partial<BaseQueryOption>): Promise<Device[]> {
//     const data = await DevicePersistence.findAll({
//       transaction: option.t,
//     });
//     return data.map((el) => Device.create(el.toJSON()));
//   }

//   async findAllWithPagination({ q, orderBy, sortBy }: TStandardPaginationOption, pagination: Pagination, queryOption: Partial<BaseQueryOption>): Promise<[Device[], Pagination]> {
//     orderBy && validateOrderByColumn(orderBy, VALID_ORDERBY_COLUMN.DEVICE);
//     const order: Order = [];
//     switch (orderBy) {
//     case "name":
//       order.push([{ model: DevicePersistence, as: "device" }, "name", sortBy!]);
//       break;
//     case "macAddress":
//       order.push([{ model: DevicePersistence, as: "device" }, "macAddress"]);
//       break;
//     default:
//       if (orderBy) order.push([orderBy, sortBy!]);
//       break;
//     }

//     const { rows: data, count } = await DevicePersistence.findAndCountAll({
//       where: {
//         ...(q && {
//           [Op.or]: [
//             {
//               name: {
//                 [Op.iLike]: `%${q}%`,
//               },
//             },
//           ]
//         })
//       },
//       offset: pagination.offset,
//       limit: pagination.limit,
//       transaction: queryOption.t,
//       order
//     });
//     pagination.generateMeta(count, data.length);
//     return [data.map((el) => Device.create(el.toJSON())), pagination];
//   }

//   async findById(id: string, option: Partial<BaseQueryOption>): Promise<Device> {
//     const data = await DevicePersistence.findByPk(id, {
//       transaction: option.t
//     });
//     if (!data) {
//       throw new AppError({
//         statusCode: HttpCode.NOT_FOUND,
//         description: "Device not found!"
//       });
//     }
//     return Device.create(data.toJSON());
//   }

//   async update(id: string, props: IDevice, option: Partial<BaseQueryOption>): Promise<Device> {
//     const data = await DevicePersistence.findByPk(id, { transaction: option.t });
//     if (!data) {
//       throw new AppError({
//         statusCode: HttpCode.NOT_FOUND,
//         description: "User not found!"
//       });
//     }
//     await data.update(props, { transaction: option.t });
//     return Device.create(data.toJSON());
//   }
// }
