'use client';

import LinkShortener from '@/components/LinkShortener';
import styles from '@/app/page.module.css';

interface HeroSectionProps {
    title?: React.ReactNode;
    cityName?: string;
    subtitle?: string;
    badge?: string;
    showShortener?: boolean;
}

export default function HeroSection({
    title,
    cityName,
    subtitle,
    badge = "🚀 #1 Link Management Platform in India",
    showShortener = true
}: HeroSectionProps) {
    return (
        <section className={styles.hero}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span className={styles.badge}>{badge}</span>
                <h1 className={styles.title}>
                    {title || (
                        <>
                            {cityName ? (
                                <>The #1 Link Shortener in <br /><span className="title-gradient">{cityName}</span></>
                            ) : (
                                <>Make Every Connection <br /><span className="title-gradient">Count with LinkShortKaro</span></>
                            )}
                        </>
                    )}
                </h1>
                <p className={styles.subtitle}>
                    {subtitle || "A powerful SaaS & Agency hybrid. Shorten links, track campaigns, and grow your audience with our expert enquiry services tuned for the Indian market."}
                </p>

                {showShortener && (
                    <div className={styles.toolSection}>
                        <LinkShortener />
                    </div>
                )}

                <div style={{ marginTop: '4rem', width: '100%', maxWidth: '500px' }}>
                    <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>Join 5,000+ marketers receiving our weekly insights.</p>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <input type="email" placeholder="Enter your email" style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius)', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }} />
                        <button className="btn btn-primary" onClick={() => alert('Thanks for subscribing! Check your inbox for our latest guide.')}>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
