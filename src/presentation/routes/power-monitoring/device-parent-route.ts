import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import DeviceParentController from "@/presentation/controllers/power-monitoring/device-parent-controller";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class DeviceParentRoutes {
  public route = "/device-parent";
  controller = container.get<DeviceParentController>(DeviceParentController);

  public setRoutes(router: Router) {
    router.post(
      `${this.route}`,
      asyncWrap(this.controller.create.bind(this.controller))
    );

    router.get(
      `${this.route}`,
      asyncWrap(this.controller.getAll.bind(this.controller))
    );
  }

}