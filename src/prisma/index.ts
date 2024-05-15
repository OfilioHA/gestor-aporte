import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    "info",
    "warn",
    "error",
  ],
});

prisma.$on("query", (e: Prisma.QueryEvent) => {
  console.log("Params:", e.query);
  console.log("Params:", e.params);
  console.log("Duration:", e.duration + "ms");
});

export { prisma };
