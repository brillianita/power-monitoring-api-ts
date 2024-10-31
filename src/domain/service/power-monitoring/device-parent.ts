import BaseRepository from "../base-repository";
import { DeviceParent, IDeviceParent } from "@/domain/models/power-monitoring/device-parents";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeviceParentRepository extends BaseRepository<DeviceParent, IDeviceParent> {}

