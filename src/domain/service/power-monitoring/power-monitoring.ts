import { IPowerConsumption, PowerConsumption } from "@/domain/models/power-monitoring/power-consumption";
import BaseRepository from "../base-repository";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PowerConsumptionRepository extends BaseRepository<PowerConsumption, IPowerConsumption>{
}
