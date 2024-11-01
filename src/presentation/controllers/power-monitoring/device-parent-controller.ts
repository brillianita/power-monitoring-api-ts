import { queryOptionValidation } from "@/presentation/validation/query-option-validation";
import { DeviceParentService } from "@/services/power-monitoring/device-parent-service";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { StandardResponse } from "@/libs/standard-response";
import { deviceParentCreateScheme, deviceParentUpdate } from "@/presentation/validation/power-monitoring/device-parent-validation";

@injectable()
export default class DeviceParentController {
  constructor(@inject(TYPES.DeviceParentService) private _deviceParentService: DeviceParentService) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const validatedReq = deviceParentCreateScheme.safeParse({
      ...req.body,
    });
    if (!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }
    const created = await this._deviceParentService.store({
      ...validatedReq.data,
    });
    return StandardResponse.create(res)
      .setResponse({
        message: "Success creating deviceParent",
        data: created,
        status: HttpCode.RESOURCE_CREATED,
      })
      .send();
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const validatedPagination = queryOptionValidation.safeParse(req.query);
    if(!validatedPagination.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedPagination.error.flatten().fieldErrors,
      });
    }
    const [deviceParents, pagination] = await this._deviceParentService.findAll( validatedPagination.data );
    return StandardResponse.create(res)
      .setResponse({
        message: "Device Parents fetched",
        data: deviceParents,
        status: HttpCode.OK,
      })
      .withPagination(pagination)
      .send();
  }
  public async update(req: Request, res: Response): Promise<Response> {

    console.log("reqbody", req.body);
    const validatedReq = deviceParentUpdate.safeParse({
      ...req.params,
      ...req.body
    });
    if(!validatedReq.success) {
      throw new AppError({
        statusCode: HttpCode.VALIDATION_ERROR,
        description: "Request validation error",
        data: validatedReq.error.flatten().fieldErrors,
      });
    }

    const updated = await this._deviceParentService.update(validatedReq.data.id, {
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
}