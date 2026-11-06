
import "dotenv/config";

import { prisma } from "../src/lib/prisma.js";
import {
  users,
  studios,
  courses,
  reservations,
} from "./seed-data.js";

async function main() {
  console.log("🌱 Insertion des données de démonstration...");

  for (const user of users) {
    await prisma.user.upsert({
      where: { id: user.id },
      update: user,
      create: user,
    });
  }

  for (const studio of studios) {
    await prisma.studio.upsert({
      where: { id: studio.id },
      update: studio,
      create: studio,
    });
  }

  for (const course of courses) {
    await prisma.course.upsert({
      where: { id: course.id },
      update: course,
      create: course,
    });
  }

  for (const reservation of reservations) {
    await prisma.reservation.upsert({
      where: { id: reservation.id },
      update: reservation,
      create: reservation,
    });
  }

  console.log("✅ Seed terminé !");
  console.table({
    users: users.length,
    studios: studios.length,
    courses: courses.length,
    reservations: reservations.length,
  });
}

try {
  await main();
} catch (error) {
  console.error("❌ Erreur pendant le seed :", error);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}
