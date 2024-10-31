import { ILogAlerts } from "@/domain/models/power-monitoring/log-alerts";
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Device } from "./device-sequelize";
import { sequelize } from "../../sequelize";

export class LogAlerts extends Model<InferAttributes<LogAlerts>, InferCreationAttributes<LogAlerts>> implements ILogAlerts {
  declare id: CreationOptional<string>;
  declare deviceId: string;
  declare location: string;
  declare category: string;
  declare priority: string;
  declare alertLog: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
  declare deletedAt: CreationOptional<Date> | null;
}

LogAlerts.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  deviceId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Device
    }
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  alertLog: {
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
}, {
  sequelize,
  tableName: "log_alerts",
  modelName: "logAlerts",
  underscored: true,
  paranoid: true
});