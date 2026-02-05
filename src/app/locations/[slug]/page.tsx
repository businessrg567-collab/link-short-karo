import { notFound } from 'next/navigation';
import { indianCities } from '@/data/cityData';
import { generateCityContent } from '@/utils/contentGenerator';
import styles from '@/app/page.module.css';

// Reusing components from landing refactor
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import LocationsGrid from '@/components/landing/LocationsGrid';
import FaqSection from '@/components/landing/FaqSection';
import CtaSection from '@/components/landing/CtaSection';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return indianCities.map((city) => ({
        slug: city.slug,
    }));
}

export default async function LocationPage({ params }: PageProps) {
    const { slug } = await params;
    const city = indianCities.find((c) => c.slug === slug);

    if (!city) {
        notFound();
    }

    const contentHtml = generateCityContent(city);

    return (
        <main className={styles.main}>
            {/* Simple SEO Metadata injection */}
            <title>{`Link Shortener & Agency Services in ${city.name} | LinkShortKaro`}</title>
            <meta name="description" content={`Advanced link management and digital strategy for ${city.name}. We analyze market supply and demand for ${city.industries.join(', ')} businesses in ${city.name}, providing sub-millisecond redirects and branded connectivity.`} />

            <HeroSection
                cityName={city.name}
                subtitle={`${city.description} We empower ${city.name}'s economy with precision-engineered links.`}
                badge={`📍 Serving ${city.name}, India`}
                showShortener={false}
            />
            <StatsSection />
            <FeaturesSection city={city.name} />
            <HowItWorksSection />

            {/* Advanced 4k+ Word Localized Insight Section */}
            <section className="container py-12 border-t border-border bg-gradient-to-b from-card/30 to-background shadow-sm rounded-3xl my-8">
                <div className="mx-auto max-w-5xl px-6">
                    <div
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                        className="prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed"
                        style={{ fontFamily: 'inherit' }}
                    />
                </div>
            </section>

            <LocationsGrid />
            <FaqSection city={city.name} />
            <CtaSection city={city.name} />
        </main>
    );
}
