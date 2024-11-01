import { Device, IDevice } from "@/domain/models/power-monitoring/device";
import BaseRepository from "../base-repository";
// import { IDeviceUpdate } from "@/dto/device-dto";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeviceRepository extends BaseRepository<Device, IDevice> {}