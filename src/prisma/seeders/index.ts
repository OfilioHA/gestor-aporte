import { prisma } from "..";
import PersonalSeeder from "./personal-seeder";
import DependeciesSeeder from "./dependencies-seeder";
import SupportsSeeder from "./supports-seeder";
import PeriodSeeder from './periods-seeder';

// DependeciesSeeder, SupportsSeeder, PersonalSeeder

async function main() {
  const seeders = [PeriodSeeder];
  for await (const seeder of seeders) {
    await seeder();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
