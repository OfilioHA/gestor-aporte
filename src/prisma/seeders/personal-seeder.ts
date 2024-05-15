import { faker } from "@faker-js/faker";
import { prisma } from "..";

export default async function execute() {
  const people = faker.helpers.multiple(
    () => ({
      firstnames: faker.person.firstName(),
      lastnames: faker.person.firstName(),
      dependencyId: 1,
      genderId: faker.number.int({ min: 1, max: 2 }),
      createdAt: new Date(),
    }),
    { count: 10 }
  );

  for await (const person of people) {
    await prisma.personal.create({ data: person });
  }
}
