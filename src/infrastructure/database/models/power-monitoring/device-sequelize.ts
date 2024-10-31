import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../../sequelize";
import { IDevice } from "@/domain/models/power-monitoring/device";
import { DeviceParent } from "./device-parent-sequelize";

export class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> implements IDevice {
  declare id: CreationOptional<string>;
  declare parentId: string;
  declare name: string;
  declare macAddress: string;
  declare status: string;
  declare maxAmpere: number;
  declare stdAmpere: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}
Device.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: DeviceParent
      }
    },
    name: {
      type: DataTypes.STRING,
    },
    macAddress: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: true
    },
    maxAmpere: {
      type: DataTypes.FLOAT,
    },
    stdAmpere: {
      type: DataTypes.FLOAT,
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
    tableName: "device",
    modelName: "device",
    underscored: true,
    paranoid: true,
  }
);