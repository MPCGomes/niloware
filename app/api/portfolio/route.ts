import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/src/utils/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const locale = searchParams.get('locale') || 'en-us';

  const clientCards = await prisma.clientCard.findMany({
    include: {
      tags: {
        include: {
          tag: {
            include: {
              translations: {
                where: { languageCode: locale },
              },
            },
          },
        },
      },
    },
  });

  const formattedClientCards = clientCards.map((card: { id: any; clientName: any; websiteUrl: any; imageUrl: any; tags: any[]; }) => ({
    id: card.id,
    clientName: card.clientName,
    websiteUrl: card.websiteUrl,
    imageUrl: card.imageUrl,
    tags: card.tags.map((t: { tag: { name: any; translations: string | any[]; }; }) => {
      if (t.tag.name) {
        return t.tag.name;
      } else if (t.tag.translations.length > 0) {
        return t.tag.translations[0].name;
      }
      return '';
    }),
  }));

  return NextResponse.json(formattedClientCards);
}
