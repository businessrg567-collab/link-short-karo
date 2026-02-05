'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { blogPosts } from '@/data/blogData';
import styles from './blog.module.css';

export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('all');

    const locations = useMemo(() => {
        const locs = [...new Set(blogPosts.map(post => post.location))];
        return ['all', ...locs.sort()];
    }, []);

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesLocation = selectedLocation === 'all' || post.location === selectedLocation;
            return matchesSearch && matchesLocation;
        });
    }, [searchTerm, selectedLocation]);

    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className="container">
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem', textAlign: 'center' }}>
                        Digital Marketing Insights
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'hsl(var(--muted-foreground))', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        Location-specific guides for 30 major Indian cities. Learn how to leverage link management for your local market.
                    </p>

                    {/* Search and Filter */}
                    <div className={styles.filters}>
                        <div className={styles.searchWrapper}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.searchIcon}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                            <input
                                type="text"
                                placeholder="Search articles or cities..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={styles.searchInput}
                            />
                        </div>
                        <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className={styles.locationSelect}
                        >
                            {locations.map(loc => (
                                <option key={loc} value={loc}>
                                    {loc === 'all' ? 'All Locations' : loc}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            <section className={styles.articlesSection}>
                <div className="container">
                    <p className={styles.resultCount}>{filteredPosts.length} articles found</p>

                    <div className={styles.grid}>
                        {filteredPosts.map((post) => (
                            <article key={post.id} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={styles.postThumbnail}
                                    />
                                    <div className={styles.cardHeader}>
                                        <span className={styles.category}>{post.category}</span>
                                        <span className={styles.location}>{post.location}</span>
                                    </div>
                                </div>
                                <h2 className={styles.cardTitle}>
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                <div className={styles.cardFooter}>
                                    <div className={styles.meta}>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className={styles.noResults}>
                            <p>No articles found matching your search criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(''); setSelectedLocation('all'); }}
                                className="btn btn-outline"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <h2>Want personalized marketing advice?</h2>
                        <p>Our agency team can create a custom strategy for your business location.</p>
                        <Link href="/contact" className="btn btn-primary">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
