import "dotenv/config";

import bcrypt from "bcryptjs";

import { prisma } from "../src/lib/prisma.js";
import {
  courses,
  reservations,
  studios,
  users,
} from "./seed-data.js";

const DEMO_PASSWORD =
  "MotDePasse123!";

async function main() {
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    throw new Error(
      "Le seed ne peut pas être exécuté en production.",
    );
  }

  console.log(
    "🌱 Réinitialisation des données de développement...",
  );

  await prisma.reservation.deleteMany();
  await prisma.course.deleteMany();
  await prisma.studio.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash =
    await bcrypt.hash(
      DEMO_PASSWORD,
      12,
    );

  console.log(
    "🌱 Insertion des données de démonstration...",
  );

  await prisma.user.createMany({
    data: users.map((user) => ({
      ...user,
      passwordHash,
    })),
  });

  await prisma.studio.createMany({
    data: studios,
  });

  await prisma.course.createMany({
    data: courses,
  });

  await prisma.reservation.createMany({
    data: reservations,
  });

  console.log(
    "✅ Seed terminé.",
  );

  console.table({
    users: users.length,
    studios: studios.length,
    courses: courses.length,
    reservations:
      reservations.length,
  });

  console.log(
    `🔐 Mot de passe des comptes de démonstration : ${DEMO_PASSWORD}`,
  );
}

try {
  await main();
} catch (error) {
  console.error(
    "❌ Erreur pendant le seed :",
    error,
  );

  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}