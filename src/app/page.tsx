import styles from './page.module.css';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/landing/HeroSection';
import BusinessIdeasSection from '@/components/landing/BusinessIdeasSection';

const LoadingSection = () => (
  <div className="section-padding" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid hsl(var(--primary) / 0.1)',
      borderTopColor: 'hsl(var(--primary))',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
);

const OnlineShopSection = dynamic(() => import('@/components/landing/OnlineShopSection'), { loading: () => <LoadingSection /> });
const LoanGuidesSection = dynamic(() => import('@/components/landing/LoanGuidesSection'), { loading: () => <LoadingSection /> });
const ToolsPreviewSection = dynamic(() => import('@/components/landing/ToolsPreviewSection'), { loading: () => <LoadingSection /> });
const SuccessStoriesSection = dynamic(() => import('@/components/landing/SuccessStoriesSection'), { loading: () => <LoadingSection /> });
const FeaturesSection = dynamic(() => import('@/components/landing/FeaturesSection'), { loading: () => <LoadingSection /> });
const LatestBlogSection = dynamic(() => import('@/components/landing/LatestBlogSection'), { loading: () => <LoadingSection /> });
const PopularCitiesSection = dynamic(() => import('@/components/landing/PopularCitiesSection'), { loading: () => <LoadingSection /> });
const NewsletterSection = dynamic(() => import('@/components/landing/NewsletterSection'), { loading: () => <LoadingSection /> });

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <BusinessIdeasSection />
      <OnlineShopSection />
      <LoanGuidesSection />
      <LatestBlogSection />
      <PopularCitiesSection />
      <FeaturesSection />
      <ToolsPreviewSection />
      <SuccessStoriesSection />
      <NewsletterSection />
    </main>
  );
}
