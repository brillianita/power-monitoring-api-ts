const TYPES = {
  Logger: Symbol.for("Logger"),
  Database: Symbol.for("Database"),
  Server: Symbol.for("Server"),
  SocketIo: Symbol.for("SocketIo"),
  Mqtt: Symbol.for("Mqtt"),
  HTTPRouter: Symbol.for("HTTPRouter"),

  // Impelementation Domain Service
  // User Management Domain Service
  UserRepository: Symbol.for("UserRepository"),
  PermissionRepository: Symbol.for("PermissionRepository"),
  MenuRepository: Symbol.for("MenuRepository"),
  RoleRepository: Symbol.for("RoleRepository"),
  MenuPermissionRuleRepository: Symbol.for("MenuPermissionRuleRepository"),
  RoleAccessRepository: Symbol.for("RoleAccessRepository"),

  // Power Monitoring Management Domain Service
  DeviceRepository: Symbol.for("DeviceRepository"),

  // Service Layer
  // User Management Service
  UserService: Symbol.for("UserService"),
  PermissionService: Symbol.for("PermissionService"),
  MenuService: Symbol.for("MenuService"),
  WebadminAuthService: Symbol.for("WebadminAuthService"),
  RoleService: Symbol.for("RoleService"),

  // Power Monitoring Management Service 
  DeviceService: Symbol.for("DeviceService"),

  ManagedTransactionService: Symbol.for("ManagedTransactionService"),
  SeederService: Symbol.for("SeederService"),
};

export { TYPES };
