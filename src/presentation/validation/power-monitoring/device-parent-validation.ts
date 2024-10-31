import { z } from "zod";
// import { soleUuidValidation } from "../web-admin/sole-uuid-validation";

export const deviceParentCreateScheme = z.object({
  name: z.string(),
});