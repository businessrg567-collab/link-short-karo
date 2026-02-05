'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import { indianCities } from '@/data/cityData';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.footerLogo}>
                            LinkShort<span className={styles.logoAccent}>Karo</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            The ultimate link management tool for businesses and creators. Shorten, track, and optimize your links with India's #1 hybrid platform.
                        </p>
                        <div className={styles.contactInfo}>
                            <p><strong>Email:</strong> hello@linkshortkaro.com</p>
                            <p><strong>Phone:</strong> +91 98765 43210</p>
                            <p><strong>Office:</strong> Mumbai, Maharashtra, India</p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home / Tools</Link></li>
                            <li><Link href="/services">Our Services</Link></li>
                            <li><Link href="/pricing">Pricing Plans</Link></li>
                            <li><Link href="/blog">Marketing Blog</Link></li>
                            <li><Link href="/support">Help & Support</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Services</h3>
                        <ul>
                            <li><Link href="/services">Branded Links</Link></li>
                            <li><Link href="/services">Campaign Reports</Link></li>
                            <li><Link href="/services">Marketing Plans</Link></li>
                            <li><Link href="/contact">Get in Touch</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Top Cities</h3>
                        <ul className={styles.locationList}>
                            {indianCities.slice(0, 16).map(city => (
                                <li key={city.slug}>
                                    <Link href={`/locations/${city.slug}`}>
                                        {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Newsletter</h3>
                        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1rem' }}>
                            Stay updated with digital marketing tips.
                        </p>
                        <form className={styles.subscribeForm} onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                            <input type="email" placeholder="Your email" required className={styles.subscribeInput} />
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} LinkShortKaro. Built with ❤️ in India.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
