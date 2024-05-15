import { prisma } from "..";

export default async function execute() {
  const actualDate = new Date();
  let amount = actualDate.getMonth() + 1;
  if (amount > 11) amount -= -1;

  const periods = Array.from({ length: amount }).map((_, index) => ({
    month: index,
    createdAt: new Date(`2024-${index + 1}-01`),
    finishedAt: new Date(`2024-${index + 1}-02`),
    isActive: true,
    dependencyId: 1,
  }));

  for await (const period of periods) {
    await prisma.period.create({ data: period });
  }
}
