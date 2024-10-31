import { Router } from "express";
import { injectable } from "inversify";
import { UserRoutes } from "@/presentation/routes/web-admin/user-routes";
import { WebadminAuthRoute } from "@/presentation/routes/web-admin/auth-route";
import { PermissionRoutes } from "@/presentation/routes/web-admin/permission-routes";
import { MenuRoutes } from "@/presentation/routes/web-admin/menu-routes";
import { RoleRoutes } from "@/presentation/routes/web-admin/role-routes";
import { SeederRoutes } from "@/presentation/routes/web-admin/seeder-routes";
import { DeviceParentRoutes } from "./power-monitoring/device-parent-route";

@injectable()
export class Routes {
  constructor(
    private userRoutes: UserRoutes,
    private webadminAuthRoute: WebadminAuthRoute,
    private permissionRoutes: PermissionRoutes,
    private menuRoutes: MenuRoutes,
    private roleRoutes: RoleRoutes,
    private seederRoutes: SeederRoutes,
    private deviceParentRoutes: DeviceParentRoutes
  ) {}

  public setRoutes(router: Router) {
    this.userRoutes.setRoutes(router);
    this.webadminAuthRoute.setRoutes(router);
    this.permissionRoutes.setRoutes(router);
    this.menuRoutes.setRoutes(router);
    this.roleRoutes.setRoutes(router);
    this.seederRoutes.setRoutes(router);
    this.deviceParentRoutes.setRoutes(router);
  }
}
