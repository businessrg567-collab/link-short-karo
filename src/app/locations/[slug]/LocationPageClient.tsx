'use client';

import Link from 'next/link';
import { blogPosts } from '@/data/blogData';
import styles from './location.module.css';

interface LocationPageClientProps {
    location: {
        city: string;
        state: string;
        usp: string;
        serviceFocus: string[];
        description: string;
        slug: string;
    };
}

export default function LocationPageClient({ location }: LocationPageClientProps) {
    return (
        <main className={styles.main}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className={styles.badge}>Our Presence in {location.city}</span>
                    <h1 className={styles.title}>
                        Premium Digital Marketing <br />
                        Agency for <span className="title-gradient">{location.city} Businesses</span>
                    </h1>
                    <p className={styles.subtitle}>
                        {location.description}
                    </p>
                    <div className={styles.ctaGroup}>
                        <Link href="/contact" className="btn btn-primary">Start a Campaign in {location.city}</Link>
                        <Link href="/services" className="btn btn-outline">Explore Services</Link>
                    </div>
                </div>
            </section>

            {/* USP Section */}
            <section className={styles.details}>
                <div className="container">
                    <div className={styles.detailGrid}>
                        <div className={styles.infoBox}>
                            <h2>Why Choose Our Agency in {location.city}?</h2>
                            <p className={styles.uspText}>{location.usp}</p>
                            <ul className={styles.focusList}>
                                {location.serviceFocus.map((service, idx) => (
                                    <li key={idx}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.contactCard}>
                            <h3>Ready to boost your local ROI?</h3>
                            <p>Get a targeted digital strategy for your {location.city}-based company.</p>
                            <form className={styles.miniForm} onSubmit={(e) => { e.preventDefault(); alert('Proposal request sent! We will contact you shortly.'); }}>
                                <input type="text" placeholder="Business Name" required />
                                <input type="email" placeholder="Work Email" required />
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Get Expert Proposal</button>
                                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', marginTop: '1rem', textAlign: 'center' }}>
                                    Local support available in {location.city}, {location.state}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Footprint */}
            <section className={styles.footprint}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Our Footprint in {location.state}</h2>
                    <div className={styles.statGrid}>
                        <div className={styles.statItem}>
                            <div className={styles.statVal}>100+</div>
                            <div className={styles.statLab}>Local Clients</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statVal}>₹5Cr+</div>
                            <div className={styles.statLab}>Ad Spend Managed</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statVal}>4.9/5</div>
                            <div className={styles.statLab}>Avg. Local Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Blog Section */}
            <section className={styles.localBlog}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h2>Local Marketing Insights</h2>
                        <Link href="/blog" className={styles.viewAll}>View All City Guides →</Link>
                    </div>
                    <div className={styles.blogCard}>
                        <h3>The Complete Guide to Digital Marketing in {location.city}</h3>
                        <p>Read our specialized deep-dive article about managing links and scaling your audience in {location.city}.</p>
                        {(() => {
                            const post = blogPosts.find(p => p.location.toLowerCase() === location.city.toLowerCase());
                            return (
                                <Link href={`/blog/${post?.slug || 'digital-marketing-mumbai'}`} className="btn btn-primary">
                                    Read Case Study
                                </Link>
                            );
                        })()}
                    </div>
                </div>
            </section>
        </main>
    );
}
