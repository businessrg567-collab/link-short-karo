'use client';

import styles from './page.module.css';
import HeroSection from '@/components/landing/HeroSection';
import StatsSection from '@/components/landing/StatsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import LocationsGrid from '@/components/landing/LocationsGrid';
import FaqSection from '@/components/landing/FaqSection';
import CtaSection from '@/components/landing/CtaSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <LocationsGrid />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
