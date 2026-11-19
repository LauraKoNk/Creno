function futureDate(
  daysFromNow: number,
  hour: number,
  minute = 0,
): Date {
  const date = new Date();

  date.setDate(
    date.getDate() + daysFromNow,
  );

  date.setHours(
    hour,
    minute,
    0,
    0,
  );

  return date;
}

export const users = [
  {
    id: "10000000-0000-4000-8000-000000000001",
    email: "sophie.owner@demo.fr",
    firstName: "Sophie",
    lastName: "Martin",
    role: "OWNER" as const,
  },
  {
    id: "10000000-0000-4000-8000-000000000002",
    email: "thomas.owner@demo.fr",
    firstName: "Thomas",
    lastName: "Bernard",
    role: "OWNER" as const,
  },
  {
    id: "10000000-0000-4000-8000-000000000003",
    email: "julie.owner@demo.fr",
    firstName: "Julie",
    lastName: "Petit",
    role: "OWNER" as const,
  },

  {
    id: "11000000-0000-4000-8000-000000000001",
    email: "alice.user@demo.fr",
    firstName: "Alice",
    lastName: "Dubois",
    role: "USER" as const,
  },
  {
    id: "11000000-0000-4000-8000-000000000002",
    email: "lucas.user@demo.fr",
    firstName: "Lucas",
    lastName: "Moreau",
    role: "USER" as const,
  },
  {
    id: "11000000-0000-4000-8000-000000000003",
    email: "emma.user@demo.fr",
    firstName: "Emma",
    lastName: "Laurent",
    role: "USER" as const,
  },
  {
    id: "11000000-0000-4000-8000-000000000004",
    email: "hugo.user@demo.fr",
    firstName: "Hugo",
    lastName: "Simon",
    role: "USER" as const,
  },
  {
    id: "11000000-0000-4000-8000-000000000005",
    email: "lea.user@demo.fr",
    firstName: "Léa",
    lastName: "Michel",
    role: "USER" as const,
  },
  {
    id: "11000000-0000-4000-8000-000000000006",
    email: "nathan.user@demo.fr",
    firstName: "Nathan",
    lastName: "Garcia",
    role: "USER" as const,
  },
];

export const studios = [
  {
    id: "20000000-0000-4000-8000-000000000001",
    ownerId: "10000000-0000-4000-8000-000000000001",
    name: "Studio Harmonie",
    description:
      "Studio consacré au yoga, au bien-être et à la relaxation.",
    address: "12 rue de Rivoli",
    postalCode: "75004",
    city: "Paris",
    phone: "0142000001",
  },
  {
    id: "20000000-0000-4000-8000-000000000002",
    ownerId: "10000000-0000-4000-8000-000000000002",
    name: "Move & Flow",
    description:
      "Studio moderne de Pilates et de fitness.",
    address: "25 rue de la République",
    postalCode: "69002",
    city: "Lyon",
    phone: "0472000002",
  },
  {
    id: "20000000-0000-4000-8000-000000000003",
    ownerId: "10000000-0000-4000-8000-000000000003",
    name: "Zen Attitude",
    description:
      "Studio de danse, mobilité et méditation.",
    address: "8 rue Sainte-Catherine",
    postalCode: "33000",
    city: "Bordeaux",
    phone: "0556000003",
  },
];

export const courses = [
  {
    id: "30000000-0000-4000-8000-000000000001",
    studioId: "20000000-0000-4000-8000-000000000001",
    title: "Yoga Vinyasa",
    discipline: "Yoga",
    description:
      "Séance dynamique pour travailler la souplesse et l'équilibre.",
    startAt: futureDate(1, 18, 30),
    durationMinutes: 60,
    priceCents: 1800,
    capacity: 15,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000002",
    studioId: "20000000-0000-4000-8000-000000000001",
    title: "Hatha Yoga",
    discipline: "Yoga",
    description:
      "Pratique douce centrée sur la respiration et la posture.",
    startAt: futureDate(2, 19),
    durationMinutes: 75,
    priceCents: 2000,
    capacity: 12,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000003",
    studioId: "20000000-0000-4000-8000-000000000001",
    title: "Méditation guidée",
    discipline: "Méditation",
    description:
      "Séance de détente et de respiration guidée.",
    startAt: futureDate(4, 12),
    durationMinutes: 45,
    priceCents: 1200,
    capacity: 20,
    status: "DRAFT" as const,
  },

  {
    id: "30000000-0000-4000-8000-000000000004",
    studioId: "20000000-0000-4000-8000-000000000002",
    title: "Pilates Flow",
    discipline: "Pilates",
    description:
      "Cours complet pour renforcer les muscles profonds.",
    startAt: futureDate(1, 20),
    durationMinutes: 60,
    priceCents: 2500,
    capacity: 12,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000005",
    studioId: "20000000-0000-4000-8000-000000000002",
    title: "HIIT Training",
    discipline: "Fitness",
    description:
      "Séance intensive alternant effort et récupération.",
    startAt: futureDate(3, 18, 30),
    durationMinutes: 45,
    priceCents: 1500,
    capacity: 15,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000006",
    studioId: "20000000-0000-4000-8000-000000000002",
    title: "Cardio Blast",
    discipline: "Fitness",
    description:
      "Séance cardio énergique et accessible.",
    startAt: futureDate(5, 11),
    durationMinutes: 45,
    priceCents: 1400,
    capacity: 15,
    status: "CANCELLED" as const,
  },

  {
    id: "30000000-0000-4000-8000-000000000007",
    studioId: "20000000-0000-4000-8000-000000000003",
    title: "Modern Jazz",
    discipline: "Danse",
    description:
      "Découverte du modern jazz dans une ambiance conviviale.",
    startAt: futureDate(2, 17, 30),
    durationMinutes: 90,
    priceCents: 1600,
    capacity: 15,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000008",
    studioId: "20000000-0000-4000-8000-000000000003",
    title: "Danse contemporaine",
    discipline: "Danse",
    description:
      "Travail sur l'expression corporelle et la créativité.",
    startAt: futureDate(4, 19),
    durationMinutes: 90,
    priceCents: 1800,
    capacity: 12,
    status: "PUBLISHED" as const,
  },
  {
    id: "30000000-0000-4000-8000-000000000009",
    studioId: "20000000-0000-4000-8000-000000000003",
    title: "Relaxation profonde",
    discipline: "Méditation",
    description:
      "Séance douce pour relâcher les tensions.",
    startAt: futureDate(6, 18),
    durationMinutes: 60,
    priceCents: 1000,
    capacity: 10,
    status: "PUBLISHED" as const,
  },
];

export const reservations = [
  {
    id: "40000000-0000-4000-8000-000000000001",
    userId: "11000000-0000-4000-8000-000000000001",
    courseId: "30000000-0000-4000-8000-000000000001",
    status: "PAID" as const,
    amountCents: 1800,
    stripePaymentIntentId: null,
  },
  {
    id: "40000000-0000-4000-8000-000000000002",
    userId: "11000000-0000-4000-8000-000000000002",
    courseId: "30000000-0000-4000-8000-000000000001",
    status: "PENDING" as const,
    amountCents: 1800,
    stripePaymentIntentId: null,
  },
  {
    id: "40000000-0000-4000-8000-000000000003",
    userId: "11000000-0000-4000-8000-000000000003",
    courseId: "30000000-0000-4000-8000-000000000002",
    status: "CANCELLED" as const,
    amountCents: 2000,
    stripePaymentIntentId: null,
  },
  {
    id: "40000000-0000-4000-8000-000000000004",
    userId: "11000000-0000-4000-8000-000000000004",
    courseId: "30000000-0000-4000-8000-000000000004",
    status: "PAID" as const,
    amountCents: 2500,
    stripePaymentIntentId: null,
  },
  {
    id: "40000000-0000-4000-8000-000000000005",
    userId: "11000000-0000-4000-8000-000000000005",
    courseId: "30000000-0000-4000-8000-000000000005",
    status: "REFUNDED" as const,
    amountCents: 1500,
    stripePaymentIntentId: null,
  },
  {
    id: "40000000-0000-4000-8000-000000000006",
    userId: "11000000-0000-4000-8000-000000000006",
    courseId: "30000000-0000-4000-8000-000000000007",
    status: "PAID" as const,
    amountCents: 1600,
    stripePaymentIntentId: null,
  },
];