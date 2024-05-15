import {
  getDependentPeriods,
  getSumPeriod,
} from "@/prisma/repositories/periods";
import months, { MonthType } from "@/constants/months";
import { PeriodsClient } from "@/components/periods/client";
import type { IPage } from "@/types/generals/PageType";

export default async function PagePeriods({ searchParams }: IPage) {
  const actualYear = new Date().getFullYear();
  const yearSearch = searchParams?.year
    ? Number(searchParams.year)
    : actualYear;
  const monthIndexes = Object.keys(months).map((index) => Number(index));
  const periods = [];

  for await (const monthIndex of monthIndexes) {
    let period = await getDependentPeriods(1, yearSearch, monthIndex);


    if(!period){
      periods.push({
        month: months[monthIndex as MonthType],
        value: null,
      });
      continue;
    }

    let amount = await getSumPeriod(period.id);
    period = {
      ...period,
      amount,
    };

    periods.push({
      month: months[monthIndex as MonthType],
      value: period,
    });
  }

  return <PeriodsClient periods={periods} />;
}
