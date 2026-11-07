import { z } from "zod";
import { services } from "./services";

export const serviceOptions = [...services.map((s) => s.name), "Not sure yet"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  company: z.string().trim().max(120, "Company name is too long.").optional().or(z.literal("")),
  service: z.enum(serviceOptions, { message: "Please choose a service." }),
  details: z
    .string()
    .trim()
    .min(20, "Tell us a little more — at least 20 characters.")
    .max(4000, "Please keep it under 4000 characters."),
  /** Honeypot: must stay empty */
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
