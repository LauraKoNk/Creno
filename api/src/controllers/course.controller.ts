import type {
  Request,
  Response,
} from "express";

import { prisma } from "../lib/prisma.js";
import {
  createCourseSchema,
  updateCourseSchema,
} from "../schemas/course.schema.js";

export async function createCourse(
  request: Request,
  response: Response,
) {
  try {
    if (!request.auth) {
      return response.status(401).json({
        message: "Authentification requise.",
      });
    }

    const validation = createCourseSchema.safeParse(
      request.body,
    );

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
      studioId,
      title,
      discipline,
      description,
      startAt,
      durationMinutes,
      priceCents,
      capacity,
      status,
    } = validation.data;

    const studio = await prisma.studio.findFirst({
      where: {
        id: studioId,
        ownerId: request.auth.userId,
      },
    });

    if (!studio) {
      return response.status(404).json({
        message: "Studio introuvable.",
      });
    }

    const course = await prisma.course.create({
      data: {
        studioId: studio.id,
        title,
        discipline,
        description: description ?? null,
        startAt: new Date(startAt),
        durationMinutes,
        priceCents,
        capacity,
        status: status ?? "DRAFT",
      },

      include: {
        studio: {
          select: {
            id: true,
            name: true,
            city: true,
          },
        },
      },
    });

    return response.status(201).json({
      message: "Cours créé avec succès.",
      course,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la création du cours :",
      error,
    );

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}

export async function getMyCourses(
  request: Request,
  response: Response,
) {
  try {
    if (!request.auth) {
      return response.status(401).json({
        message: "Authentification requise.",
      });
    }

    const courses = await prisma.course.findMany({
      where: {
        studio: {
          is: {
            ownerId: request.auth.userId,
          },
        },
      },

      include: {
        studio: {
          select: {
            id: true,
            name: true,
            city: true,
          },
        },
      },

      orderBy: {
        startAt: "asc",
      },
    });

    return response.status(200).json({
      courses,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des cours :",
      error,
    );

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}

export async function getPublicCourses(
  _request: Request,
  response: Response,
) {
  try {
    const courses = await prisma.course.findMany({
      where: {
        status: "PUBLISHED",

        startAt: {
          gte: new Date(),
        },
      },

      include: {
        studio: {
          select: {
            id: true,
            name: true,
            city: true,
          },
        },
      },

      orderBy: {
        startAt: "asc",
      },
    });

    return response.status(200).json({
      courses,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du catalogue :",
      error,
    );

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}

export async function getCourseById(
  request: Request,
  response: Response,
) {
  try {
    const { id } = request.params;

    if (typeof id !== "string") {
      return response.status(400).json({
        message: "Identifiant de cours invalide.",
      });
    }

    const course = await prisma.course.findFirst({
      where: {
        id,
        status: "PUBLISHED",
      },

      include: {
        studio: {
          select: {
            id: true,
            name: true,
            description: true,
            address: true,
            postalCode: true,
            city: true,
          },
        },
      },
    });

    if (!course) {
      return response.status(404).json({
        message: "Cours introuvable.",
      });
    }

    return response.status(200).json({
      course,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la récupération du cours :",
      error,
    );

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}

export async function updateCourse(
  request: Request,
  response: Response,
) {
  try {
    if (!request.auth) {
      return response.status(401).json({
        message: "Authentification requise.",
      });
    }

    const { id } = request.params;

    if (typeof id !== "string") {
      return response.status(400).json({
        message: "Identifiant de cours invalide.",
      });
    }

    const validation = updateCourseSchema.safeParse(
      request.body,
    );

    if (!validation.success) {
      return response.status(400).json({
        message: "Les données envoyées sont invalides.",
        errors: validation.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      });
    }

    const existingCourse =
      await prisma.course.findFirst({
        where: {
          id,

          studio: {
            is: {
              ownerId: request.auth.userId,
            },
          },
        },
      });

    if (!existingCourse) {
      return response.status(404).json({
        message: "Cours introuvable.",
      });
    }

    const {
      startAt,
      ...otherFields
    } = validation.data;

    const course = await prisma.course.update({
      where: {
        id: existingCourse.id,
      },

      data: {
        ...otherFields,

        ...(startAt
          ? {
              startAt: new Date(startAt),
            }
          : {}),
      },

      include: {
        studio: {
          select: {
            id: true,
            name: true,
            city: true,
          },
        },
      },
    });

    return response.status(200).json({
      message: "Cours modifié avec succès.",
      course,
    });
  } catch (error) {
    console.error(
      "Erreur lors de la modification du cours :",
      error,
    );

    return response.status(500).json({
      message: "Une erreur interne est survenue.",
    });
  }
}