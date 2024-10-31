import { IPowerConsumption } from "@/domain/models/power-monitoring/power-consumption";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Device } from "./device-sequelize";
import { sequelize } from "../../sequelize";

export class PowerConsumption extends Model<InferAttributes<PowerConsumption>, InferCreationAttributes<PowerConsumption>> implements IPowerConsumption {
  declare id: CreationOptional<string>;
  declare deviceId: string;
  declare year: number;
  declare lwbpJan: number;
  declare lwbpFeb: number;
  declare lwbpMar: number;
  declare lwbpApr: number;
  declare lwbpMay: number;
  declare lwbpJun: number;
  declare lwbpJul: number;
  declare lwbpAug: number;
  declare lwbpSep: number;
  declare lwbpOkt: number;
  declare lwbpNov: number;
  declare lwbpDec: number;
  declare wbpJan: number;
  declare wbpFeb: number;
  declare wbpMar: number;
  declare wbpApr: number;
  declare wbpMay: number;
  declare wbpJun: number;
  declare wbpJul: number;
  declare wbpAug: number;
  declare wbpSep: number;
  declare wbpOkt: number;
  declare wbpNov: number;
  declare wbpDec: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}

PowerConsumption.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  deviceId: {
    type: DataTypes.UUID,
    references: {
      model: Device
    }
  }, 
  year: {
    type: DataTypes.INTEGER,
  },
  lwbpJan: {
    type: DataTypes.FLOAT
  },
  lwbpFeb: {
    type: DataTypes.FLOAT
  },
  lwbpMar: {
    type: DataTypes.FLOAT
  },
  lwbpApr: {
    type: DataTypes.FLOAT
  },
  lwbpMay: {
    type: DataTypes.FLOAT
  },
  lwbpJun: {
    type: DataTypes.FLOAT
  },
  lwbpJul: {
    type: DataTypes.FLOAT
  },
  lwbpAug: {
    type: DataTypes.FLOAT
  },
  lwbpSep: {
    type: DataTypes.FLOAT
  },
  lwbpOkt: {
    type: DataTypes.FLOAT
  },
  lwbpNov: {
    type: DataTypes.FLOAT
  },
  lwbpDec: {
    type: DataTypes.FLOAT
  },
  wbpJan: {
    type: DataTypes.FLOAT
  },
  wbpFeb: {
    type: DataTypes.FLOAT
  },
  wbpMar: {
    type: DataTypes.FLOAT
  },
  wbpApr: {
    type: DataTypes.FLOAT
  },
  wbpMay: {
    type: DataTypes.FLOAT
  },
  wbpJun: {
    type: DataTypes.FLOAT
  },
  wbpJul: {
    type: DataTypes.FLOAT
  },
  wbpAug: {
    type: DataTypes.FLOAT
  },
  wbpSep: {
    type: DataTypes.FLOAT
  },
  wbpOkt: {
    type: DataTypes.FLOAT
  },
  wbpNov: {
    type: DataTypes.FLOAT
  },
  wbpDec: {
    type: DataTypes.FLOAT
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
  tableName: "power_consumption",
  modelName: "powerConsumption",
  underscored: true,
  paranoid: true
});