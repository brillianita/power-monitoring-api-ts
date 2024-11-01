import { container } from "@/container";
import asyncWrap from "@/libs/asyncWrapper";
import DeviceParentController from "@/presentation/controllers/power-monitoring/device-controller";
import { Router } from "express";
import { injectable } from "inversify";

@injectable()
export class DeviceRoutes {
  public route = "/device";
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
    
    router.get(
      `${this.route}/:id`,
      asyncWrap(this.controller.getById.bind(this.controller))
    );

    // router.put(
    //   `${this.route}/:id`,
    //   asyncWrap(this.controller.update.bind(this.controller))
    // );
    router.delete(
      `${this.route}/:id`,
      asyncWrap(this.controller.destroy.bind(this.controller))
    );
  }

}