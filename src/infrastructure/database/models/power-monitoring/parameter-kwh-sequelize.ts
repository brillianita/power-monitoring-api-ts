import { IParameterKwh } from "@/domain/models/power-monitoring/parameter-kwh";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Device } from "./device-sequelize";
import { sequelize } from "../../sequelize";

export class ParameterKwh extends Model<InferAttributes<ParameterKwh>, InferCreationAttributes<ParameterKwh>> implements IParameterKwh {
  declare id: CreationOptional<string>;
  declare deviceId: string;
  declare year: number;
  declare standardPercentage: number;
  declare generalJan: number;
  declare generalFeb: number;
  declare generalMar: number;
  declare generalApr: number;
  declare generalMay: number;
  declare generalJun: number;
  declare generalJul: number;
  declare generalAug: number;
  declare generalSep: number;
  declare generalOkt: number;
  declare generalNov: number;
  declare generalDec: number;
  declare standardPercentageJan: number;
  declare standardPercentageFeb: number;
  declare standardPercentageMar: number;
  declare standardPercentageApr: number;
  declare standardPercentageMay: number;
  declare standardPercentageJun: number;
  declare standardPercentageJul: number;
  declare standardPercentageAug: number;
  declare standardPercentageSep: number;
  declare standardPercentageOct: number;
  declare standardPercentageNov: number;
  declare standardPercentageDec: number;
  declare electricityRate: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}

ParameterKwh.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
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
  standardPercentage: {
    type: DataTypes.FLOAT,
  },
  generalJan: {
    type: DataTypes.FLOAT
  },
  generalFeb: {
    type: DataTypes.FLOAT
  },
  generalMar: {
    type: DataTypes.FLOAT
  },
  generalApr: {
    type: DataTypes.FLOAT
  },
  generalMay: {
    type: DataTypes.FLOAT
  },
  generalJun: {
    type: DataTypes.FLOAT
  },
  generalJul: {
    type: DataTypes.FLOAT
  },
  generalAug: {
    type: DataTypes.FLOAT
  },
  generalSep: {
    type: DataTypes.FLOAT
  },
  generalOkt: {
    type: DataTypes.FLOAT
  },
  generalNov: {
    type: DataTypes.FLOAT
  },
  generalDec: {
    type: DataTypes.FLOAT
  },
  standardPercentageJan: {
    type: DataTypes.FLOAT
  },
  standardPercentageFeb: {
    type: DataTypes.FLOAT
  },
  standardPercentageMar: {
    type: DataTypes.FLOAT
  },
  standardPercentageApr: {
    type: DataTypes.FLOAT
  },
  standardPercentageMay: {
    type: DataTypes.FLOAT
  },
  standardPercentageJun: {
    type: DataTypes.FLOAT
  },
  standardPercentageJul: {
    type: DataTypes.FLOAT
  },
  standardPercentageAug: {
    type: DataTypes.FLOAT
  },
  standardPercentageSep: {
    type: DataTypes.FLOAT
  },
  standardPercentageOct: {
    type: DataTypes.FLOAT
  },
  standardPercentageNov: {
    type: DataTypes.FLOAT
  },
  standardPercentageDec: {
    type: DataTypes.FLOAT
  },
  electricityRate: {
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
  tableName: "parameter_kwhs",
  modelName: "parameterKwh",
  underscored: true,
  paranoid: true,
});