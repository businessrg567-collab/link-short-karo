import Image from 'next/image';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import styles from './HomeSections.module.css';
import { blogPosts } from '@/data/blogData';

export default function LatestBlogSection() {
    const latestPosts = blogPosts.slice(0, 6);

    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeading
                    title="Latest Insights from Our Blog"
                    subtitle="Stay updated with the latest trends in small business, personal finance, and online earning."
                    viewAllLink="/blog"
                />
                <div className={styles.grid}>
                    {latestPosts.map((post, i) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className={`${styles.card} card`} style={{ textDecoration: 'none' }}>
                            <div className={styles.cardImageWrapper} style={{ position: 'relative', height: '200px' }}>
                                {post.image ? (
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className={styles.cardImage}
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                                        priority={i < 3}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', background: 'hsl(var(--muted))' }} />
                                )}
                                <span className={styles.tag} style={{ position: 'absolute', top: '1rem', left: '1rem', marginBottom: 0, zIndex: 1 }}>{post.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle} style={{ fontSize: '1.1rem' }}>{post.title}</h3>
                                <p className={styles.cardDesc} style={{ fontSize: '0.9rem' }}>{post.excerpt}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                    <span className={styles.readMore}>
                                        Read More →
                                    </span>
                                    <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{post.readTime}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
