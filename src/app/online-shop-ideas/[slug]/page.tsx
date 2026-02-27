import { notFound } from 'next/navigation';
import { onlineShopArticles, getOnlineShopArticleBySlug } from '@/data/onlineShopData';
import { getMassiveContentSections } from '@/utils/contentGenerator';
import Image from 'next/image';
import styles from '@/components/ArticleDisplay.module.css';
import AdSlot from '@/components/AdSlot';
import SafeImage from '@/components/SafeImage';
import TableOfContents from '@/components/TableOfContents';

interface ArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return onlineShopArticles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function OnlineShopArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const articleData = getOnlineShopArticleBySlug(slug);

    if (!articleData) {
        notFound();
    }

    const sections = getMassiveContentSections(articleData);
    const related = onlineShopArticles.filter(a => a.slug !== articleData.slug).slice(0, 4);

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.meta}>
                        <span className={styles.category}>{articleData.category}</span>
                        <span className={styles.date}>{articleData.date}</span>
                    </div>
                    <h1 className={styles.title}>{articleData.title}</h1>
                    <p className={styles.description}>{articleData.description}</p>
                </div>
            </header>

            <div className="container">
                {articleData.image && (
                    <div className={styles.bannerImageWrapper}>
                        <SafeImage
                            src={articleData.image}
                            alt={articleData.title}
                            className={styles.bannerImage}
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
                                                <img src={section.injectedImage} alt={section.h2} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', maxHeight: '420px' }} loading="lazy" />
                                            </div>
                                        )}
                                        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: 'hsl(var(--foreground)/0.9)' }} dangerouslySetInnerHTML={{ __html: section.content.replace(/\s+/g, ' ').trim() }} />
                                    </div>
                                    {idx === 0 && (
                                        <AdSlot slotId="article-mid" format="auto" label="Mid-Article Ad" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className={styles.sidebar}>
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <TableOfContents />
                            
                            <AdSlot slotId="sidebar-ad" format="rectangle" label="Sidebar Ad" style={{ marginTop: '2rem' }} />

                            <div className={styles.sidebarCard} style={{ marginTop: '2rem' }}>
                                <h3>Online Shop Guides</h3>
                                <ul>
                                    {onlineShopArticles.filter(a => a.slug !== articleData.slug).slice(0, 5).map(a => (
                                        <li key={a.slug}>
                                            <a href={`/online-shop-ideas/${a.slug}`}>{a.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>

                <section className={styles.faqSection}>
                    <h2>FAQs</h2>
                    <div className={styles.faqList}>
                        {articleData.faqs.map((faq, i) => (
                            <div key={i} className={styles.faqItem}>
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {related.length > 0 && (
                    <section style={{ borderTop: '2px solid hsl(var(--border))', paddingTop: '3rem', marginTop: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>More Online Shop Guides</h2>
                        <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Explore more ways to sell online and grow your store</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
                            {related.map((a) => (
                                <a key={a.slug} href={`/online-shop-ideas/${a.slug}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '12px', overflow: 'hidden' }}>
                                    <div style={{ height: '150px', overflow: 'hidden' }}>
                                        <SafeImage src={a.image} alt={a.title} className={styles.relatedImage} />
                                    </div>
                                    <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        {a.tag && <span style={{ background: '#7c3aed20', color: '#7c3aed', padding: '0.15rem 0.6rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 700, marginBottom: '0.5rem', display: 'inline-block' }}>{a.tag}</span>}
                                        <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'hsl(var(--foreground))', marginBottom: '0.5rem' }}>{a.title}</h3>
                                        <span style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.82rem', marginTop: 'auto', paddingTop: '0.5rem', display: 'block' }}>Read →</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}
