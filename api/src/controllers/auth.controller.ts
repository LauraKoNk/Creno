import bcrypt from "bcryptjs";
import type { Request, Response } from "express";

import { prisma } from "../lib/prisma.js";
import { registerSchema } from "../schemas/auth.schema.js";

export async function register(
  request: Request,
  response: Response,
) {
  try {
    const validation = registerSchema.safeParse(request.body);

    if (!validation.success) {
      return response.status(400).json({
        message: "Les données envoyées sont invalides.",
        errors: validation.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const {
      firstName,
      lastName,
      password,
      role,
    } = validation.data;

    const email = validation.data.email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return response.status(409).json({
        message: "Un compte existe déjà avec cette adresse email.",
      });
    }

    if (bcrypt.truncates(password)) {
      return response.status(400).json({
        message: "Le mot de passe est trop long.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        passwordHash,
        role,
      },

      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return response.status(201).json({
      message: "Compte créé avec succès.",
      user,
    });
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}