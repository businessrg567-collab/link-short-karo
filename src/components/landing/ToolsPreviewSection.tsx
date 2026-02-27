import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeSections.module.css';

const tools = [
    {
        title: "Monthly Budget Planner",
        desc: "Plan your monthly income and expenses with our easy-to-use Indian budget tool.",
        link: "/budget-planner",
        icon: "📊",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Business Profit Calculator",
        desc: "Calculate your estimated profits and break-even points for any small business.",
        link: "/business-profit-calculator",
        icon: "📈",
        image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Loan EMI Calculator",
        desc: "Instantly calculate your monthly EMI for home, car, or personal loans.",
        link: "/loan-emi-calculator",
        icon: "🧮",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    }
];

export default function ToolsPreviewSection() {
    return (
        <section className={styles.section} style={{ background: 'hsl(var(--primary) / 0.03)' }}>
            <div className="container">
                <SectionHeading
                    title="Financial Tools & Calculators"
                    subtitle="Simple, fast, and mobile-friendly tools to help you manage your money and business growth."
                    viewAllLink="/budget-planner"
                    viewAllText="Explore All Tools"
                />
                <div className={styles.grid}>
                    {tools.map((tool, i) => (
                        <div key={i} className={`${styles.card} card`}>
                            <div className={styles.cardImageWrapper} style={{ height: '180px' }}>
                                <Image
                                    src={tool.image}
                                    alt={tool.title}
                                    className={styles.cardImage}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.iconBox} style={{ position: 'absolute', bottom: '1rem', right: '1rem', marginBottom: 0, background: 'white', padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', boxShadow: 'var(--shadow-md)', zIndex: 1 }}>
                                    {tool.icon}
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{tool.title}</h3>
                                <p className={styles.cardDesc}>{tool.desc}</p>
                                <Link href={tool.link} className="btn btn-primary" style={{ marginTop: 'auto' }}>
                                    Open {tool.title}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
