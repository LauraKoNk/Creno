import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../generated/prisma/client.js";

const databaseUrl =
  process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL est manquante.",
  );
}

const url =
  new URL(databaseUrl);

const sslEnabled =
  url.searchParams.get(
    "sslaccept",
  ) === "strict";

const adapter =
  new PrismaMariaDb({
    host: url.hostname,
    port: Number(
      url.port || "3306",
    ),
    user: decodeURIComponent(
      url.username,
    ),
    password: decodeURIComponent(
      url.password,
    ),
    database:
      url.pathname.replace(
        /^\//,
        "",
      ),

    connectionLimit: 5,

    // Le driver MariaDB de Prisma 7
    // utilise 1 seconde par défaut.
    connectTimeout: 5000,

    ...(sslEnabled
      ? {
          ssl: true,
        }
      : {}),
  });

export const prisma =
  new PrismaClient({
    adapter,
  });