import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Le prénom est obligatoire.")
    .max(50, "Le prénom est trop long."),

  lastName: z
    .string()
    .trim()
    .min(1, "Le nom est obligatoire.")
    .max(50, "Le nom est trop long."),

  email: z
    .string()
    .trim()
    .email("L'adresse email n'est pas valide.")
    .max(191, "L'adresse email est trop longue."),

  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères.")
    .max(72, "Le mot de passe est trop long."),

  role: z.enum(["USER", "OWNER"]).default("USER"),
});

export type RegisterInput = z.infer<typeof registerSchema>;