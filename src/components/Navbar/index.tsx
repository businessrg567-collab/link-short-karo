'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span>LinkShort<span className={styles.logoAccent}>Karo</span></span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.links}>
                    <Link href="/" className={`${styles.link} ${isActive('/') ? styles.active : ''}`}>Tools</Link>
                    <Link href="/services" className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>Services</Link>
                    <Link href="/pricing" className={`${styles.link} ${isActive('/pricing') ? styles.active : ''}`}>Pricing</Link>
                    <Link href="/blog" className={`${styles.link} ${isActive('/blog') ? styles.active : ''}`}>Blog</Link>
                    <Link href="/support" className={`${styles.link} ${isActive('/support') ? styles.active : ''}`}>Support</Link>
                </div>

                <div className={styles.actions}>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: '0.9rem', padding: '0.5rem 1rem' }}>
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileLinks}>
                    <Link href="/" className={`${styles.mobileLink} ${isActive('/') ? styles.active : ''}`}>
                        <span>🔗</span> Tools
                    </Link>
                    <Link href="/services" className={`${styles.mobileLink} ${isActive('/services') ? styles.active : ''}`}>
                        <span>💼</span> Services
                    </Link>
                    <Link href="/pricing" className={`${styles.mobileLink} ${isActive('/pricing') ? styles.active : ''}`}>
                        <span>💰</span> Pricing
                    </Link>
                    <Link href="/blog" className={`${styles.mobileLink} ${isActive('/blog') ? styles.active : ''}`}>
                        <span>📝</span> Blog
                    </Link>
                    <Link href="/support" className={`${styles.mobileLink} ${isActive('/support') ? styles.active : ''}`}>
                        <span>💬</span> Support
                    </Link>
                    <Link href="/contact" className={`${styles.mobileLink} ${isActive('/contact') ? styles.active : ''}`}>
                        <span>📧</span> Contact
                    </Link>
                </div>
                <div className={styles.mobileActions}>
                    <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                        Get in Touch
                    </Link>
                </div>
            </div>
        </nav>
    );
}
