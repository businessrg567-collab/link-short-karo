import styles from '@/app/page.module.css';

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface FeaturesSectionProps {
    city?: string;
    customFeatures?: FeatureCardProps[];
}

export default function FeaturesSection({ city = "India", customFeatures }: FeaturesSectionProps) {

    const defaultFeatures = [
        {
            title: `${city} Market Optimized`,
            description: `Server clusters located strategicially for lightning-fast redirects and local compliance in ${city}.`,
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        },
        {
            title: "Agency Services",
            description: "Get monthly marketing plans, campaign reports, and dedicated support from our expert team.",
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
        },
        {
            title: "Deep Analytics",
            description: `Track clicks by city (${city}, etc.), device types, and referral sources to optimize ROI.`,
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        }
    ];

    const displayFeatures = customFeatures || defaultFeatures;

    return (
        <section className={styles.features}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Powerful Features</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Everything you need to manage your links and grow your business.</p>
                </div>

                <div className={styles.featureGrid}>
                    {displayFeatures.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
