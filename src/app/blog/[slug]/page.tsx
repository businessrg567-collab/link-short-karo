
import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/data/blogData';
import { getMassiveContentSections } from '@/utils/contentGenerator';
import Image from 'next/image';
import styles from '@/components/ArticleDisplay.module.css';
import RelatedArticles from '@/components/RelatedArticles';
import TableOfContents from '@/components/TableOfContents';
import SafeImage from '@/components/SafeImage';
import AdSlot from '@/components/AdSlot';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

// Static generation — pages are pre-rendered at build time
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const postData = getPostBySlug(slug);

    if (!postData) {
        notFound();
    }

    // Generate content sections on the server
    const sections = getMassiveContentSections(postData);

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.meta}>
                        <span className={styles.category}>{postData.category}</span>
                        <span className={styles.date}>{postData.date}</span>
                    </div>
                    <h1 className={styles.title}>{postData.title}</h1>
                    <p className={styles.description}>{postData.excerpt}</p>
                </div>
            </header>

            <div className="container">
                {postData.image && (
                    <div className={styles.bannerImageWrapper}>
                        <SafeImage
                            key={`${postData.slug}-hero-banner`}
                            src={`${postData.image}?auto=format&fit=crop&q=80&w=1200`}
                            alt={postData.title}
                            style={{ 
                                width: '100%', 
                                height: '100%', 
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: 1
                            }}
                            loading="eager"
                        />
                    </div>
                )}
                
                <div className={styles.contentGrid}>
                    <div className={styles.mainContentWrapper}>
                        <div className={styles.mainContent}>
                            {sections.map((section, idx) => (
                                <div key={section.id}>
                                    <div className="article-section" id={section.id} style={{ marginBottom: '3rem' }}>
                                        <h2 style={{ 
                                            fontSize: '1.75rem', 
                                            fontWeight: 800, 
                                            marginBottom: '1.5rem', 
                                            background: section.headingColor, 
                                            WebkitBackgroundClip: 'text', 
                                            WebkitTextFillColor: 'transparent', 
                                            display: 'inline-block', 
                                            lineHeight: 1.3 
                                        }}>
                                            {section.h2}
                                        </h2>
                                        
                                        {section.injectedImage && (
                                            <div style={{ 
                                                marginTop: '3rem',
                                                marginBottom: '3rem',
                                                marginLeft: 0,
                                                marginRight: 0,
                                                borderRadius: '12px', 
                                                overflow: 'hidden', 
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.12)' 
                                            }}>
                                                <img 
                                                    src={section.injectedImage} 
                                                    alt={section.h2} 
                                                    style={{ 
                                                        width: '100%', 
                                                        height: 'auto', 
                                                        display: 'block', 
                                                        objectFit: 'cover', 
                                                        maxHeight: '420px' 
                                                    }} 
                                                    loading="lazy" 
                                                />
                                            </div>
                                        )}

                                        <div 
                                            style={{ 
                                                fontSize: '1.05rem', 
                                                lineHeight: 1.85, 
                                                color: 'hsl(var(--foreground)/0.9)' 
                                            }} 
                                            dangerouslySetInnerHTML={{ __html: section.content.replace(/\s+/g, ' ').trim() }} 
                                        />
                                    </div>

                                    {idx === 0 && (
                                        <AdSlot slotId="article-mid" format="auto" label="Mid-Article Ad" />
                                    )}
                                </div>
                            ))}
                        </div>


                        {postData.faqs && postData.faqs.length > 0 && (
                            <section className={styles.faqSection}>
                                <h2>Frequently Asked Questions</h2>
                                <div className={styles.faqList}>
                                    {postData.faqs.map((faq, i) => (
                                        <div key={i} className={styles.faqItem}>
                                            <h3>{faq.question}</h3>
                                            <p>{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    <aside className={styles.sidebar}>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <TableOfContents />

                            <AdSlot slotId="sidebar-ad" format="rectangle" label="Sidebar Ad" style={{ marginTop: '2rem' }} />

                            <div className={styles.sidebarCard} style={{ marginTop: '2rem' }}>
                                <h3>Recent Posts</h3>
                                <ul>
                                    {blogPosts.slice(0, 5).map(p => (
                                        <li key={p.slug}>
                                            <a href={`/blog/${p.slug}`}>{p.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>


                {/* Related Articles — exactly 4 articles with images */}
                {(() => {
                    const sameCat = blogPosts.filter(p => p.category === postData.category && p.slug !== postData.slug);
                    const others = blogPosts.filter(p => p.category !== postData.category && p.slug !== postData.slug);
                    const related = [...sameCat, ...others].slice(0, 4);
                    if (related.length === 0) return null;
                    return (
                        <section style={{ borderTop: '2px solid hsl(var(--border))', paddingTop: '3rem', marginTop: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                                You May Also Like
                            </h2>
                            <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>
                                More expert guides to help you grow and earn
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
                                {related.map((p) => (
                                    <a key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px', overflow: 'hidden' }}>
                                        <div style={{ height: '160px', overflow: 'hidden' }}>
                                            <img
                                                src={p.image || 'https://images.unsplash.com/photo-1491336477066-31156b5e4f3c?auto=format&fit=crop&q=80&w=400'}
                                                alt={p.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ background: '#05966915', color: '#059669', padding: '0.15rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.5rem', display: 'inline-block' }}>{p.category}</span>
                                            <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>{p.title}</h3>
                                            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.5rem' }}>
                                                <span style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>{p.readTime}</span>
                                                <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.82rem' }}>Read →</span>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    );
                })()}
            </div>
        </article>
    );
}



