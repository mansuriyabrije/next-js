import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  acceptTerms: z.boolean().refine((value) => value, {
    message: "You must accept the terms and conditions",
  }),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
