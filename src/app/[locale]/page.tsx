import FeaturesSection from "@/components/Features/FeaturesSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import { languages } from "@/i18n/settings";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <FeaturesSection />
      <PortfolioSection />
    </main>
  );
}
