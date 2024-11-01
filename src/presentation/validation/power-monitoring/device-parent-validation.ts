import { z } from "zod";
import { soleUuidValidation } from "../web-admin/sole-uuid-validation";
// import { soleUuidValidation } from "../web-admin/sole-uuid-validation";

export const deviceParentCreateScheme = z.object({
  name: z.string(),
});

export const deviceParentUpdate = z.object({
  name: z.string(),
}).merge(soleUuidValidation);
