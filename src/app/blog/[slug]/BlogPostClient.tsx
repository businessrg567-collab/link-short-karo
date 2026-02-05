'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getPostBySlug, blogPosts } from '@/data/blogData';
import styles from './post.module.css';

interface BlogPostClientProps {
    post: {
        id: string;
        slug: string;
        title: string;
        category: string;
        location: string;
        date: string;
        readTime: string;
        excerpt: string;
        image: string;
        content: string;
    };
    prevPost: { id: string; slug: string; location: string } | null;
    nextPost: { id: string; slug: string; location: string } | null;
    relatedPosts: { id: string; slug: string; title: string; location: string; readTime: string }[];
}

export default function BlogPostClient({ post, prevPost, nextPost, relatedPosts }: BlogPostClientProps) {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    const handleShare = (platform: string) => {
        let url = '';
        switch (platform) {
            case 'twitter':
                url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
                break;
            case 'whatsapp':
                url = `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + shareUrl)}`;
                break;
        }
        if (url) window.open(url, '_blank');
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <main className={styles.main}>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb}>
                <div className="container">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/blog">Blog</Link>
                    <span>/</span>
                    <span>{post.location}</span>
                </div>
            </nav>

            {/* Article Header */}
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.meta}>
                        <span className={styles.category}>{post.category}</span>
                        <span className={styles.location}>📍 {post.location}</span>
                        <span className={styles.date}>{post.date}</span>
                        <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                </div>
            </header>

            {/* Article Content */}
            <article className={styles.article}>
                <div className="container">
                    <div className={styles.content}>
                        <div className={styles.mainImage}>
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={1200}
                                height={600}
                                priority
                                className={styles.topImage}
                            />
                        </div>
                        <div
                            className={styles.prose}
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share Buttons */}
                        <div className={styles.shareSection}>
                            <h3>Share this article</h3>
                            <div className={styles.shareButtons}>
                                <button
                                    className={`${styles.shareBtn} ${styles.twitter}`}
                                    onClick={() => handleShare('twitter')}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                    Twitter
                                </button>
                                <button
                                    className={`${styles.shareBtn} ${styles.linkedin}`}
                                    onClick={() => handleShare('linkedin')}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
                                    LinkedIn
                                </button>
                                <button
                                    className={`${styles.shareBtn} ${styles.whatsapp}`}
                                    onClick={() => handleShare('whatsapp')}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                    WhatsApp
                                </button>
                                <button
                                    className={`${styles.shareBtn} ${styles.copy}`}
                                    onClick={handleCopyLink}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    Copy Link
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        <div className={styles.sidebarCard}>
                            <h3>Try LinkShortKaro</h3>
                            <p>Get started with free link shortening today!</p>
                            <Link href="/" className="btn btn-primary" style={{ width: '100%' }}>
                                Start Shortening
                            </Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h3>Need Expert Help?</h3>
                            <p>Our agency team can help with your marketing strategy.</p>
                            <Link href="/contact" className="btn btn-outline" style={{ width: '100%' }}>
                                Contact Us
                            </Link>
                        </div>

                        <div className={styles.sidebarCard}>
                            <h3>Subscribe</h3>
                            <p>Get marketing tips directly in your inbox.</p>
                            <input type="email" placeholder="Your email" className={styles.emailInput} />
                            <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                                Subscribe
                            </button>
                        </div>
                    </aside>
                </div>
            </article>

            {/* Post Navigation */}
            <nav className={styles.postNav}>
                <div className="container">
                    <div className={styles.postNavGrid}>
                        {prevPost ? (
                            <Link href={`/blog/${prevPost.slug}`} className={styles.navLink}>
                                <span>← Previous</span>
                                <strong>{prevPost.location}</strong>
                            </Link>
                        ) : <div />}

                        {nextPost && (
                            <Link href={`/blog/${nextPost.slug}`} className={`${styles.navLink} ${styles.navRight}`}>
                                <span>Next →</span>
                                <strong>{nextPost.location}</strong>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/* Related Posts */}
            <section className={styles.related}>
                <div className="container">
                    <h2>More Articles</h2>
                    <div className={styles.relatedGrid}>
                        {relatedPosts.map(p => (
                            <Link key={p.id} href={`/blog/${p.slug}`} className={styles.relatedCard}>
                                <span className={styles.relatedLocation}>{p.location}</span>
                                <h3>{p.title}</h3>
                                <span className={styles.relatedMeta}>{p.readTime}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
