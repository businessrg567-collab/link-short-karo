import Link from 'next/link';
import Image from 'next/image';
import SectionHeading from '../SectionHeading';
import styles from './HomeSections.module.css';

const popularCities = [
    {
        city: "Mumbai",
        emoji: "🌊",
        business: "Export-Import & Finance",
        slug: "business-ideas-mumbai",
        image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=700&h=400"
    },
    {
        city: "Delhi",
        emoji: "🏛️",
        business: "Retail & E-commerce Hub",
        slug: "business-ideas-delhi",
        image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
        city: "Bangalore",
        emoji: "💻",
        business: "IT Services & Startups",
        slug: "business-ideas-bangalore",
        image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=800&h=500"
    },
    {
        city: "Ahmedabad",
        emoji: "🏭",
        business: "Textile & Manufacturing",
        slug: "business-ideas-ahmedabad",
        image: "https://images.unsplash.com/photo-1532664189809-02133fee698d?auto=format&fit=crop&q=80&w=700&h=400"
    },
    {
        city: "Hyderabad",
        emoji: "🍊",
        business: "Pharmacy & Food Business",
        slug: "business-ideas-hyderabad",
        image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?auto=format&fit=crop&q=80&w=700&h=400"
    },
    {
        city: "Pune",
        emoji: "🎓",
        business: "Education & Auto Hub",
        slug: "business-ideas-pune",
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=700&h=400"
    }
];

export default function PopularCitiesSection() {
    return (
        <section className={styles.sectionDark}>
            <div className="container">
                <SectionHeading
                    title="Business Ideas by City"
                    subtitle="Explore profitable high-demand business opportunities in major Indian cities with our localized guides."
                    viewAllLink="/locations"
                />
                <div className={styles.grid}>
                    {popularCities.map((item, index) => (
                        <Link href={`/locations/${item.slug}`} key={index} className={`${styles.card} card`} style={{ textDecoration: 'none' }}>
                            <div className={styles.cardImageWrapper} style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                <Image
                                    src={item.image}
                                    alt={`Business ideas in ${item.city}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority={index < 3}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)', zIndex: 1 }} />
                                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 2, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
                                    <h3 style={{ color: 'white', marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, fontSize: '1.25rem', fontWeight: 800 }}>{item.city}</h3>
                                </div>
                            </div>
                            <div className={styles.cardContent} style={{ padding: '1.25rem' }}>
                                <p className={styles.cardDesc} style={{ marginBottom: '0.75rem' }}>
                                    Best for: <strong>{item.business}</strong>
                                </p>
                                <span className={styles.readMore}>
                                    View City Guide →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
