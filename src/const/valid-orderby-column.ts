export const VALID_ORDERBY_COLUMN = {
  // Core entity
  USER: ["isActive", "fullname", "email", "role"],
  ROLE: ["name"],

  // Apps entity
  DEVICE_PARENT: ["name"],
  PARAMETER_KWH: ["year"], 
  PARAMETER_COST:["year"],
  POWER_CONSUMPTION: ["year"],
  LOG_ALERTS: ["location", "category", "priority"],
  DEVICE: ["macAddress", "name", "location", "maxAmpere", "stdAmpere", "status"],
  CARBON_COEFFICIENT_LOG: ["changedAt"],
  DEVICE_LIMITATION: ["macAddress", "name"],
  FISCAL_YEAR: ["year", "startDate", "endDate", "totalBudget"],
};
