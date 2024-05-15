import { faker } from "@faker-js/faker";
import { prisma } from "..";

export default async function execute() {
  const supports = faker.helpers.multiple(
    () => ({
      name: faker.word.sample(),
      minimun:
        faker.number.int({
          min: 1,
          max: 10,
        }) * 10,
      isActive: true,
      createdAt: new Date()
    }),
    { count: 2 }
  );

  for await (const support of supports) {
    await prisma.support.create({ data: support });
  }
}
