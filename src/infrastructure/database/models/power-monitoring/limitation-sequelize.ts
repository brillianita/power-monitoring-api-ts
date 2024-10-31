import { ILimitation } from "@/domain/models/power-monitoring/limitation";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Device } from "./device-sequelize";
import { sequelize } from "../../sequelize";

export class Limitation extends Model<InferAttributes<Limitation>, InferCreationAttributes<Limitation>> implements ILimitation
{
  declare id: CreationOptional<string>;
  declare deviceId: string;
  declare maxLimitationCurrentR: number;
  declare maxLimitationCurrentS: number;
  declare maxLimitationCurrentT: number;
  declare maxLimitationCurrentAvg: number;
  declare maxLimitationCurrentUnbalance: number;
  declare maxLimitationVoltageRs: number;
  declare maxLimitationVoltageSt: number;
  declare maxLimitationVoltageTr: number;
  declare maxLimitationVoltageRn: number;
  declare maxLimitationVoltageSn: number;
  declare maxLimitationVoltageTn: number;
  declare maxLimitationVoltageUnbalanced: number;
  declare maxLimitationVoltageAvg: number;
  declare maxLimitationVoltage3PAvg: number;
  declare minLimitationVoltageRs: number;
  declare minLimitationVoltageSt: number;
  declare minLimitationVoltageTr: number;
  declare minLimitationVoltageRn: number;
  declare minLimitationVoltageSn: number;
  declare minLimitationVoltageTn: number;
  declare minLimitationVoltageUnbalanced: number;
  declare minLimitationVoltageAvg: number;
  declare minLimitationVoltage3PAvg: number;
  declare maxLimitationKva: number;
  declare maxLimitationKvar: number;
  declare maxLimitationPowerFactor: number;
  declare maxLimitationFrequency: number;
  declare minLimitationPowerFactor: number;
  declare minLimitationFrequency: number;
  declare maxThdV1: number;
  declare maxThdV2: number;
  declare maxThdV3: number;
  declare minThdV1: number;
  declare minThdV2: number;
  declare minThdV3: number;
  declare maxThdI1: number;
  declare maxThdI2: number;
  declare maxThdI3: number;
  declare minThdI1: number;
  declare minThdI2: number;
  declare minThdI3: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}

Limitation.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  deviceId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Device
    }
  },
  maxLimitationCurrentR: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationCurrentS: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationCurrentT: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationCurrentAvg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationCurrentUnbalance: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageRs: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageSt: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageTr: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageRn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageSn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageTn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageUnbalanced: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltageAvg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationVoltage3PAvg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageRs: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageSt: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageTr: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageRn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageSn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageTn: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageUnbalanced: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltageAvg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationVoltage3PAvg: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationKva: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationKvar: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationPowerFactor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxLimitationFrequency: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationPowerFactor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minLimitationFrequency: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdV1: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdV2: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdV3: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdV1: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdV2: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdV3: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdI1: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdI2: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  maxThdI3: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdI1: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdI2: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  minThdI3: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deletedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: "limitation",
  modelName: "limitation",
  paranoid: true,
});