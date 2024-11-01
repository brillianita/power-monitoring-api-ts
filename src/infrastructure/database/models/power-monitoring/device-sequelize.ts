import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { sequelize } from "../../sequelize";
import { EStatus, IDevice } from "@/domain/models/power-monitoring/device";

export class Device extends Model<InferAttributes<Device>, InferCreationAttributes<Device>> implements IDevice {
  declare id: CreationOptional<string>;
  declare location: string;
  declare name: string;
  declare macAddress: string;
  declare status: string | EStatus;
  declare maxAmpere: number | undefined;
  declare stdAmpere: number | undefined;
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
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    macAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING, 
      allowNull: false,
      defaultValue: "inactive",
    },
    maxAmpere: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    stdAmpere: {
      type: DataTypes.FLOAT,
      allowNull: true
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
    tableName: "devices",
    modelName: "device",
    underscored: true,
    paranoid: true,
  }
);