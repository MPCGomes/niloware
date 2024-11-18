import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const tagsWithoutTranslations = [
    { name: 'Website' },
    { name: 'Landing Page' },
    { name: 'Software' },
  ];

  await prisma.tag.createMany({
    data: tagsWithoutTranslations,
  });

  const tagsNoTrans = await prisma.tag.findMany({
    where: {
      name: { not: null },
    },
  });

  const tagMap: { [key: string]: number } = {};
  for (const tag of tagsNoTrans) {
    if (tag.name) {
      tagMap[tag.name] = tag.id;
    }
  }

  const tagsWithTranslationsData = [
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Health' },
          { languageCode: 'pt-br', name: 'Saúde' },
          { languageCode: 'es', name: 'Salud' },
        ],
      },
    },
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Construction' },
          { languageCode: 'pt-br', name: 'Construção' },
          { languageCode: 'es', name: 'Construcción' },
        ],
      },
    },
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Food' },
          { languageCode: 'pt-br', name: 'Alimentação' },
          { languageCode: 'es', name: 'Alimentación' },
        ],
      },
    },
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Lodging' },
          { languageCode: 'pt-br', name: 'Estadia' },
          { languageCode: 'es', name: 'Alojamiento' },
        ],
      },
    },
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Accounting' },
          { languageCode: 'pt-br', name: 'Contabilidade' },
          { languageCode: 'es', name: 'Contabilidad' },
        ],
      },
    },
    {
      translations: {
        create: [
          { languageCode: 'en-us', name: 'Human Resources' },
          { languageCode: 'pt-br', name: 'Recursos Humanos' },
          { languageCode: 'es', name: 'Recursos Humanos' },
        ],
      },
    },
  ];

  for (const tagData of tagsWithTranslationsData) {
    const tag = await prisma.tag.create({ data: {} });
    await prisma.tag.update({
      where: { id: tag.id },
      data: {
        translations: tagData.translations,
      },
    });
  }

  const tagsWithTrans = await prisma.tag.findMany({
    where: {
      name: null,
    },
    include: {
      translations: true,
    },
  });

  for (const tag of tagsWithTrans) {
    const ptTranslation = tag.translations.find(
      (t: { languageCode: string; }) => t.languageCode === 'pt-br'
    );
    if (ptTranslation) {
      tagMap[ptTranslation.name] = tag.id;
    }
  }

  const clientCardsData = [
    {
      clientName: 'Litoral Pisos',
      websiteUrl: 'https://www.litoralpisos.com.br',
      imageUrl: '/assets/portfolio/litoral-pisos.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Construção'] } } },
        ],
      },
    },
    {
      clientName: 'Gesso Andrade',
      websiteUrl: 'https://www.gessoandrade.com.br',
      imageUrl: '/assets/portfolio/gesso-andrade.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Construção'] } } },
        ],
      },
    },
    {
      clientName: 'Marmoraria Stone',
      websiteUrl: 'https://www.marmorariastone.com.br',
      imageUrl: '/assets/portfolio/marmoraria-stone.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Construção'] } } },
        ],
      },
    },
    {
      clientName: 'Pousada Lilabella',
      websiteUrl: 'https://www.pousadalilabella.com.br',
      imageUrl: '/assets/portfolio/pousada-lilabella.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Estadia'] } } },
        ],
      },
    },
    {
      clientName: 'Jô-Brás Caraguatatuba',
      websiteUrl: 'https://www.jobrascaraguatatuba.com.br',
      imageUrl: '/assets/portfolio/jobras-caraguatatuba.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Alimentação'] } } },
        ],
      },
    },
    {
      clientName: 'Ápice Clínica Multidisciplinar',
      websiteUrl: 'https://www.apiceclinmult.com.br',
      imageUrl: '/assets/portfolio/apice-clinica.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Landing Page'] } } },
          { tag: { connect: { id: tagMap['Saúde'] } } },
        ],
      },
    },
    {
      clientName: 'Logum RH',
      websiteUrl: 'https://www.logumrh.com.br',
      imageUrl: '/assets/portfolio/logum-rh.png',
      tags: {
        create: [
          { tag: { connect: { id: tagMap['Software'] } } },
          { tag: { connect: { id: tagMap['Recursos Humanos'] } } },
        ],
      },
    },
  ];

  for (const clientCardData of clientCardsData) {
    await prisma.clientCard.create({
      data: clientCardData,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
