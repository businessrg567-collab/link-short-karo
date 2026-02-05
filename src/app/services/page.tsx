import ServiceCard from '@/components/ServiceCard';
import styles from './services.module.css';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            title: "Custom Branded Short Links",
            description: "Enhance your brand visibility with custom domains and branded aliases. Every link you share becomes a promotion for your brand.",
            features: ["Custom Domain Integration", "Branded Aliases", "SSL Certificates", "Link Management Dashboard"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        },
        {
            title: "Campaign Reports & Analytics",
            description: "Deep dive into your campaign performance with detailed analytics. Understand your audience and optimize your strategy.",
            features: ["Real-time Click Tracking", "Geographic Breakdown", "Device & Browser Stats", "Exportable CSV Reports"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        },
        {
            title: "Monthly Marketing Plans",
            description: "Let our expert team handle your digital marketing strategy. We create, execute, and monitor campaigns for you.",
            features: ["Strategy Consultation", "Content Calendar", "Social Media Management", "Performance Reviews"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        },
        {
            title: "Local SEO & Visibility",
            description: "Go viral in your city. We optimize your local presence for Mumbai, Delhi, and 28 other major Indian cities.",
            features: ["Google Business Profile", "Local Keyword Strategy", "City-Specific Landing Pages", "Local Link Building"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v20"></path><path d="M2 12h20"></path></svg>
        },
        {
            title: "Social Media Ads (PPC)",
            description: "High-intent lead generation via Meta, Google, and LinkedIn ads tailored for the Indian demographic.",
            features: ["Campaign Setup", "Creative Ad Copy", "A/B Testing", "Conversion Tracking"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        },
        {
            title: "Influencer Marketing",
            description: "Connect with regional influencers from your city to build authentic trust with your local audience.",
            features: ["Influencer Sourcing", "Contract Management", "Campaign Execution", "ROI Tracking"],
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        }
    ];

    return (
        <main className="container">
            <section className={styles.section}>
                <div className={styles.header}>
                    <span style={{ color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: '1rem', display: 'block' }}>OUR EXPERTISE</span>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Premium Services for <br /> Growing Businesses
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'hsl(var(--muted-foreground))' }}>
                        Beyond just a link shortener, we act as your digital growth partner. Explore our agency services designed to scale your reach.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className={styles.ctaSection}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to scale your business?</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Book a free consultation with our marketing experts and see how LinkShortKaro can help you grow.
                    </p>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </main>
    );
}
