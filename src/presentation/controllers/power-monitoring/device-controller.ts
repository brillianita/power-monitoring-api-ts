import { queryOptionValidation } from "@/presentation/validation/query-option-validation";
import { DeviceService } from "@/services/power-monitoring/device-service";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { StandardResponse } from "@/libs/standard-response";
import { deviceCreateScheme, deviceUpdateScheme } from "@/presentation/validation/power-monitoring/device-validation";
import { soleUuidValidation } from "@/presentation/validation/web-admin/sole-uuid-validation";

@injectable()
export default class DeviceController {
  constructor(@inject(TYPES.DeviceService) private _deviceService: DeviceService) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const validatedReq = deviceCreateScheme.safeParse({
      ...req.body,
    });

    console.log("req.body validated", { ...validatedReq });
    if (!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }
    const created = await this._deviceService.store({
      ...validatedReq.data,
    });
    return StandardResponse.create(res)
      .setResponse({
        message: "Success creating device",
        data: created,
        status: HttpCode.RESOURCE_CREATED,
      })
      .send();
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const validatedPagination = queryOptionValidation.safeParse(req.query);
    if (!validatedPagination.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedPagination.error.flatten().fieldErrors,
      });
    }
    const [devices, pagination] = await this._deviceService.findAll(validatedPagination.data);
    return StandardResponse.create(res)
      .setResponse({
        message: "Device Parents fetched",
        data: devices,
        status: HttpCode.OK,
      })
      .withPagination(pagination)
      .send();
  }
  public async update(req: Request, res: Response): Promise<Response> {

    console.log("reqbody", req.body);
    const validatedReq = deviceUpdateScheme.safeParse({
      ...req.params,
      ...req.body
    });
    if (!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }
    const updated = await this._deviceService.update(validatedReq.data.id, {
      ...validatedReq.data
    });
    return StandardResponse.create(res)
      .setResponse({
        message: "Success updating device parent",
        data: updated,
        status: HttpCode.OK
      })
      .send();
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const validatedReq = soleUuidValidation.safeParse(req.params);
    if (!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }

    await this._deviceService.destroy(validatedReq.data.id);
    return StandardResponse.create(res)
      .setResponse({
        message: "Device parent has beeen deleted",
        status: HttpCode.OK,
      })
      .send();
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const validatedReq = soleUuidValidation.safeParse(req.params);
    if (!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }
    const device = await this._deviceService.findById(validatedReq.data.id);
    return StandardResponse.create(res)
      .setResponse({
        message: "Device detail fetched",
        data: device,
        status: HttpCode.OK,
      }).send();
  }
}