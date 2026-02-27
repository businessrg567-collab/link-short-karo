
import { notFound } from 'next/navigation';
import { locationArticles, getLocationArticleBySlug } from '@/data/locationBusinessData';
import Image from 'next/image';
import styles from '@/components/ArticleDisplay.module.css';
import RelatedArticles from '@/components/RelatedArticles';
import TableOfContents from '@/components/TableOfContents';
import SafeImage from '@/components/SafeImage';

interface LocationArticlePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return locationArticles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function LocationArticlePage({ params }: LocationArticlePageProps) {
    const { slug } = await params;
    const article = getLocationArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.meta}>
                        <span className={styles.category}>{article.category}</span>
                        <span className={styles.date}>{article.date}</span>
                    </div>
                    <h1 className={styles.title}>{article.title}</h1>
                    <p className={styles.description}>{article.description}</p>
                </div>
            </header>

            <div className="container">
                {article.image && (
                    <div className={styles.bannerImageWrapper}>
                        <SafeImage
                            key={`${article.slug}-hero-banner`}
                            src={`${article.image}?auto=format&fit=crop&q=80&w=1200`}
                            alt={article.title}
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
                        <div className={styles.mainContent} dangerouslySetInnerHTML={{ __html: article.content }} />

                        <section className={styles.faqSection} style={{ marginTop: '4rem' }}>
                            <h2>Frequently Asked Questions</h2>
                            <div className={styles.faqList}>
                                {article.faqs.map((faq, i) => (
                                    <div key={i} className={styles.faqItem}>
                                        <h3>{faq.question}</h3>
                                        <p>{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside className={styles.sidebar} style={{ height: '100%' }}>
                        <div style={{ position: 'sticky', top: '2rem' }}>
                            <TableOfContents />

                            <div className={styles.sidebarCard} style={{ marginTop: '2rem' }}>
                                <h3>Featured Cities</h3>
                                <ul>
                                    {locationArticles.slice(0, 5).map(a => (
                                        <li key={a.slug}>
                                            <a href={`/locations/${a.slug}`}>{a.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>

                <RelatedArticles
                    articles={locationArticles
                        .filter(a => a.slug !== article.slug)
                        .slice(0, 3)
                        .map(a => ({
                            slug: a.slug,
                            title: a.title,
                            path: `/locations/${a.slug}`,
                            image: a.image
                        }))
                    }
                />
            </div>
        </article>
    );
}
