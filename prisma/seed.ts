import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData = [
  {
    name: "Alice",
    image: "photo_alice",
  },
  {
    name: "Win Ko Ko Naing",
    image: "photo_wkkn",
  },
  {
    name: "porlar",
    image: "photo_porlar",
  },
];

const categoryData = [
  {
    name: "breads",
  },
  {
    name: "fruite",
  },
  {
    name: "pasta",
  },
];
async function main() {
  console.log(`Start seeding ...`);
  // for (const u of userData) {
  //   const user = await prisma.user.create({
  //     data: u,
  //   });
  //   console.log(`Created user with id: ${user.id}`);
  // }

  for (const c of categoryData) {
    const category = await prisma.category.create({
      data: c,
    });
    console.log(`Created user with id: ${category.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
