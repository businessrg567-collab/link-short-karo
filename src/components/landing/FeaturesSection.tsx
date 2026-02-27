import SectionHeading from '../SectionHeading';
import styles from './HomeSections.module.css';

const features = [
    {
        title: "Expert-Curated Ideas",
        description: "Every business idea on Moneygen is researched and verified by industry experts for viability in the 2026 market.",
        icon: "💡"
    },
    {
        title: "Localized Analysis",
        description: "We provide city-specific market data for 30+ Indian urban centers, helping you start where demand is highest.",
        icon: "📍"
    },
    {
        title: "Zero Investment Focus",
        description: "Our core mission is to empower entrepreneurs with ideas that require minimal capital but offer max growth.",
        icon: "🚀"
    },
    {
        title: "Ad-Free Learning",
        description: "While we support the site through minimal ads, our guides are designed for distraction-free deep reading and learning.",
        icon: "📖"
    },
    {
        title: "Financial Toolkits",
        description: "From EMI calculators to complex business profit margin tools, we provide everything you need to plan.",
        icon: "📊"
    },
    {
        title: "Community Success",
        description: "Join a growing tribe of 50,000+ readers who are building their financial future with Moneygen.",
        icon: "🤝"
    }
];

export default function FeaturesSection() {
    return (
        <section className={styles.section} style={{ background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05) 0%, transparent 100%)' }}>
            <div className="container">
                <SectionHeading
                    title="Why Choose Moneygen?"
                    subtitle="We don't just provide information; we provides a blueprint for your financial independence."
                />
                <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
                    {features.map((feature, index) => (
                        <div key={index} className="card" style={{ textAlign: 'left', padding: '2.5rem', background: 'white', border: '1px solid hsl(var(--border) / 0.5)', transition: 'all 0.3s ease' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', filter: 'drop-shadow(0 10px 10px rgba(var(--primary), 0.1))' }}>{feature.icon}</div>
                            <h3 className={styles.cardTitle} style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p className={styles.cardDesc} style={{ lineHeight: '1.8', marginBottom: 0 }}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
