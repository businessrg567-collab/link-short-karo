import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeSections.module.css';

const businessIdeas = [
    {
        title: "Village Small Business Ideas 2026",
        desc: "Top profitable business ideas specifically for rural India with low investment.",
        link: "/small-business-ideas/village-small-business-ideas-2026",
        tag: "Profitable",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Low Investment Business Ideas India",
        desc: "Start your own business with as little as ₹10,000. Practical ideas for everyone.",
        link: "/small-business-ideas/low-investment-business-ideas-india",
        tag: "Low Budget",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Small Business for Students",
        desc: "Earn while you learn with these flexible and easy-to-start businesses for students.",
        link: "/small-business-ideas/small-business-for-students",
        tag: "For Students",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Home Based Business Ideas",
        desc: "Start a profitable business from your home with minimal setup and zero commute.",
        link: "/small-business-ideas/home-based-business-ideas-india",
        tag: "Work From Home",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Food Business Ideas India 2026",
        desc: "India's food industry is booming. Start a tiffin service, cloud kitchen, or snack shop.",
        link: "/small-business-ideas/food-business-ideas-india",
        tag: "Food & Beverage",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600"
    },
    {
        title: "Women Entrepreneurs Business Ideas",
        desc: "Empowering women with curated business ideas in fashion, beauty, food, and digital services.",
        link: "/small-business-ideas/women-business-ideas-india",
        tag: "Women Entrepreneurs",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
    }
];

export default function BusinessIdeasSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeading
                    title="Latest Small Business Ideas India"
                    subtitle="Start your entrepreneurial journey today with these high-potential ideas tailored for the Indian market."
                    viewAllLink="/small-business-ideas"
                />
                <div className={styles.grid}>
                    {businessIdeas.map((idea, i) => (
                        <Link key={i} href={idea.link} className={`${styles.card} card`} style={{ textDecoration: 'none' }}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={idea.image}
                                    alt={idea.title}
                                    className={styles.cardImage}
                                    width={600}
                                    height={300}
                                    priority={i < 3}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <span className={styles.tag} style={{ position: 'absolute', top: '1rem', left: '1rem', marginBottom: 0, zIndex: 1 }}>{idea.tag}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{idea.title}</h3>
                                <p className={styles.cardDesc}>{idea.desc}</p>
                                <span className={styles.readMore}>
                                    Read Guide
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
