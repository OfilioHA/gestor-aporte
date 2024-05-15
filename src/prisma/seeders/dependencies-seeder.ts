import { faker } from "@faker-js/faker";
import { prisma } from "..";

export default async function execute() {
  const dependency = {
    name: faker.word.sample(),
  };
  await prisma.dependency.create({ data: dependency });
}
