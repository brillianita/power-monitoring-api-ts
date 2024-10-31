// Core Sequelize Model Import
import { User } from "@/infrastructure/database/models/user-sequelize";
import { Permission } from "@/infrastructure/database/models/permission-sequelize";
import { Menu } from "@/infrastructure/database/models/menu-sequelize";
import { Role } from "@/infrastructure/database/models/role-sequelize";
import { MenuPermissionRule } from "@/infrastructure/database/models/menu-permission-rule-sequelize";
import { RoleAccess } from "@/infrastructure/database/models/role-access-sequelize";
import { DeviceParent } from "./power-monitoring/device-parent-sequelize";
import { Device } from "./power-monitoring/device-sequelize";
import { Limitation } from "./power-monitoring/limitation-sequelize";
import { LogAlerts } from "./power-monitoring/log-alerts-sequelize";
import { ParameterCost } from "./power-monitoring/parameter-cost-sequelize";
import { ParameterKwh } from "./power-monitoring/parameter-kwh-sequelize";
import { PowerConsumption } from "./power-monitoring/power-consumption-sequelize";

// Apps Sequelize Model Import

(async () => {
  // Core Model Synchronisation
  await Role.sync({ alter: true });
  await User.sync({ alter: true });
  await Permission.sync({ alter: true });
  await Menu.sync({ alter: true });
  await MenuPermissionRule.sync({ alter: true });
  await RoleAccess.sync({ alter: true });

  // Power Monitoring
  await DeviceParent.sync({ alter: true });
  await Device.sync({ alter: true });
  await Limitation.sync({ alter: true });
  await LogAlerts.sync({ alter: true });
  await ParameterCost.sync({ alter: true });
  await ParameterKwh.sync({ alter: true });
  await PowerConsumption.sync({ alter: true });
  // Apps Model Synchronisation
})();

// Core Model Assosiation
Menu.hasOne(Menu, {
  foreignKey: "parentId",
  as: "parent",
});
Menu.hasMany(Menu, {
  foreignKey: "parentId",
  as: "children",
});
RoleAccess.belongsTo(Role);
RoleAccess.belongsTo(Permission);
RoleAccess.belongsTo(Menu);
Role.hasMany(User, {
  foreignKey: "roleId",
  as: "users",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
  as: "role",
});


// Apps Model Assosiation
// Power Monitoring
// DeviceParent to Device (One-to-Many)
DeviceParent.hasMany(Device, {
  foreignKey: "parentId",
  as: "devices"
});

Device.belongsTo(DeviceParent, {
  foreignKey: "parentId",
  as: "parent"
});

// Device to ParameterKwh (One-to-Many)
Device.hasMany(ParameterKwh, {
  foreignKey: "deviceId",
  as: "parameterKwhs"
});

ParameterKwh.belongsTo(Device, {
  foreignKey: "deviceId",
  as: "device"
});

// Device to ParameterCost (One-to-Many)
Device.hasMany(ParameterCost, {
  foreignKey: "deviceId",
  as: "parameterCosts"
});

ParameterCost.belongsTo(Device, {
  foreignKey: "deviceId",
  as: "device"
});

// Device to PowerConsumption (One-to-One)
Device.hasOne(PowerConsumption, {
  foreignKey: "deviceId",
  as: "powerConsumption"
});

// Device to Limitation (One-to-Many)
Device.hasMany(Limitation, {
  foreignKey: "deviceId",
  as: "limitations"
});

Limitation.belongsTo(Device, {
  foreignKey: "deviceId",
  as: "device"
});

// Device to LogAlerts (One-to-Many)
Device.hasMany(LogAlerts, {
  foreignKey: "deviceId",
  as: "logAlerts"
});

LogAlerts.belongsTo(Device, {
  foreignKey: "deviceId",
  as: "device"
});


// Core Model Export
// Core Model Export
export { 
  User,
  Permission,
  Menu,
  Role, 
  MenuPermissionRule, 
  RoleAccess, 
  DeviceParent, 
  Device,
  ParameterCost,
  ParameterKwh,
  PowerConsumption,
  Limitation,
  LogAlerts
};

// Apps Model Export
