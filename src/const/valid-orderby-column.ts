export const VALID_ORDERBY_COLUMN = {
  // Core entity
  USER: ["isActive", "fullname", "email", "role"],
  ROLE: ["name"],

  // Apps entity
  DEVICE: ["macAddress", "name", "isMain"],
  CARBON_COEFFICIENT_LOG: ["changedAt"],
  DEVICE_LIMITATION: ["macAddress", "name"],
  FISCAL_YEAR: ["year", "startDate", "endDate", "totalBudget"],
};
