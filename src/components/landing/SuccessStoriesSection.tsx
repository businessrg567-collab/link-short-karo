import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeSections.module.css';

const successStories = [
    {
        name: "Rahul Sharma",
        business: "Cloud Kitchen",
        location: "Jaipur",
        story: "Started with zero investment and now earns ₹2 Lakhs per month from a home kitchen.",
        income: "₹2L/mo",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Anjali Gupta",
        business: "Handmade Decor",
        location: "Lucknow",
        story: "Built a national brand using Instagram and our guide on online shop optimization.",
        income: "₹80K/mo",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Vikram Mehra",
        business: "E-vehicle Rental",
        location: "Pune",
        story: "Leveraged Mudra loan strategies to launch a fleet of 20 e-rickshaws in 6 months.",
        income: "₹1.5L/mo",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Priya Nair",
        business: "Online Tutoring",
        location: "Kochi",
        story: "Used Moneygen's digital business guide to start an online tutoring platform for school students.",
        income: "₹60K/mo",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Arjun Singh",
        business: "Agri Export",
        location: "Punjab",
        story: "Started exporting organic produce after reading our village business guide. Now shipping to 5 countries.",
        income: "₹5L/mo",
        image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&q=80&w=600"
    },
    {
        name: "Sunita Devi",
        business: "Pickle & Papad",
        location: "Varanasi",
        story: "Turned grandmother's recipes into a profitable food brand selling on Meesho and local markets.",
        income: "₹45K/mo",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600"
    }
];

export default function SuccessStoriesSection() {
    return (
        <section className={styles.section} style={{ background: 'hsl(var(--primary) / 0.02)' }}>
            <div className="container">
                <SectionHeading
                    title="Real Success Stories"
                    subtitle="Read how ordinary people used Moneygen's expert guides to build extraordinary businesses."
                />
                <div className={styles.grid}>
                    {successStories.map((item, i) => (
                        <div key={i} className={`${styles.card} card`}>
                            <div className={styles.cardImageWrapper} style={{ height: '220px' }}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className={styles.cardImage}
                                    priority={i < 3}
                                    width={600}
                                    height={220}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', zIndex: 1 }}>
                                    <div style={{ background: 'hsl(var(--primary))', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                                        {item.location}
                                    </div>
                                    <div style={{ background: 'hsl(var(--accent))', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '700' }}>
                                        {item.income}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.name} - {item.business}</h3>
                                <p className={styles.cardDesc}>"{item.story}"</p>
                                <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--primary))', fontWeight: '700' }}>
                                    Verified Success Story
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
