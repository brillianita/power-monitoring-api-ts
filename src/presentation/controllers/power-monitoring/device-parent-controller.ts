// import { queryOptionValidation } from "@/presentation/validation/query-option-validation";
import { DeviceParentService } from "@/services/power-monitoring/device-parent-service";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import {Request, Response} from "express";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { StandardResponse } from "@/libs/standard-response";
import { deviceParentCreateScheme } from "@/presentation/validation/power-monitoring/device-parent-validation";

@injectable()
export default class DeviceParentController {
  constructor(@inject(TYPES.DeviceParentService) private _deviceParentService: DeviceParentService) {}

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
}