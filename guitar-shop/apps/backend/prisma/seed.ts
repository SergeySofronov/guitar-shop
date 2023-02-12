import { Guitar, StringsCount } from '@guitar-shop/shared-types';
import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      email: 'admin@notify.local',
      password: 'admin',
      name: 'admin',
      role: UserRole.Admin,
    }
  });
  await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      email: 'boris@notify.local',
      password: '123456',
      name: 'Boris',
    }
  });
  await prisma.product.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Liana Z100',
      description: 'Это описание гитары Liana Z10',
      photo: 'add-item-1.png',
      guitarType: Guitar.Electric,
      article: '123456789',
      stringsCount: StringsCount.Six,
      Comment: {
        create: [
          {
            advantages: 'some advantages',
            disadvantages: 'some disadvantages',
            score: 5,
            userId: 1,
            content: "This comment from user #1 for publication #1"
          },
          {
            advantages: 'some advantages',
            disadvantages: 'some disadvantages',
            score: 5,
            userId: 2,
            content: "This comment from user #2 for publication #1"
          }
        ]
      },
    }
  });
  console.info('🤘️ Database was filled');
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
