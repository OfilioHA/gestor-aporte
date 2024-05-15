import { prisma } from "@prisma";

export async function getDependentPeriods(
  dependencyId: number,
  actualYear: number,
  monthIndex: number
) {
  const period = await prisma.period.findFirst({
    select: {
      id: true,
      finishedAt: true,
      createdAt: true,
      _count: {
        select: {
          Deposit: true,
        },
      },
    },
    where: {
      month: monthIndex,
      dependencyId: dependencyId,
      isActive: true,
      createdAt: {
        gte: new Date(`${actualYear}-01-01`),
        lte: new Date(`${actualYear}-12-31`),
      },
    },
  });

  return period;
}

export async function getSumPeriod(periodId: number) {
  const totalAmount = await prisma.deposit.aggregate({
    _sum: {
      amount: true,
    },
    where: {
      periodId: periodId,
    },
  });

  return totalAmount._sum.amount || 0;
}
