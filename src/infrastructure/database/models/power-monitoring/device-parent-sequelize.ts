import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "@/infrastructure/database/sequelize";
import { IDeviceParent } from "@/domain/models/power-monitoring/device-parents";

export class DeviceParent
  extends Model<InferAttributes<DeviceParent>, InferCreationAttributes<DeviceParent>> implements IDeviceParent {
  declare id: CreationOptional<string>;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}

DeviceParent.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
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
  },
  {
    sequelize,
    tableName: "device_parents",
    modelName: "deviceParents",
    underscored: true,
    paranoid: true,
  }
);
