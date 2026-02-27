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

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Business Ideas', href: '/small-business-ideas' },
        { label: 'Shop Ideas', href: '/online-shop-ideas' },
        { label: 'Loan Guide', href: '/loan-credit-card-guide' },
        { label: 'Budget Tool', href: '/budget-planner' },
        { label: 'Blog', href: '/blog' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoText}>Moneygen</span>
                    <span className={styles.logoTagline}>Smart Ways to Earn & Grow</span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.links}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.link} ${isActive(item.href) ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className={styles.actions}>
                    <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.6rem 1.2rem', fontWeight: '800', whiteSpace: 'nowrap' }}>
                        Get Started
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
                    {menuItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.mobileLink} ${isActive(item.href) ? styles.active : ''}`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link href="/about" className={`${styles.mobileLink} ${isActive('/about') ? styles.active : ''}`}>About</Link>
                    <Link href="/contact" className={`${styles.mobileLink} ${isActive('/contact') ? styles.active : ''}`}>Contact</Link>
                </div>
                <div className={styles.mobileActions}>
                    <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                        Explore Ideas
                    </Link>
                </div>
            </div>
        </nav>
    );
}
