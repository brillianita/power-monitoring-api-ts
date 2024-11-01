import { z } from "zod";
import { soleUuidValidation } from "../web-admin/sole-uuid-validation";

export const deviceCreateScheme = z.object({
  name: z.string(),
  macAddress: z.string(),
  location: z.string(),
  maxAmpere: z.number().optional(),
  stdAmpere: z.number().optional(),
  status: z.string() 
});

export const deviceUpdateScheme = z.object({
  name: z.string(),
  macAddress: z.string(),
  location: z.string(),
  maxAmpere: z.number().optional(),
  stdAmpere: z.number().optional(),
  status: z.string() 
}).merge(soleUuidValidation);
