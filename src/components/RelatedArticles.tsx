import Image from 'next/image';
import styles from './ArticleDisplay.module.css';

interface RelatedArticle {
    slug: string;
    title: string;
    path: string;
    image?: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>You Might Also Like</h2>
            <div className={styles.relatedGrid}>
                {articles.map((article, index) => (
                    <a href={article.path} key={index} className={styles.relatedCard}>
                        <div className={styles.relatedImageWrapper}>
                            <img
                                src={article.image ? `${article.image}?auto=format&fit=crop&q=60&w=500` : 'https://images.unsplash.com/photo-1491336477066-31156b5e4f3c?auto=format&fit=crop&q=60&w=500'}
                                alt={article.title}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover' 
                                }}
                                loading="lazy"
                            />
                        </div>
                        <div className={styles.relatedContent}>
                            <h3>{article.title}</h3>
                            <span className={styles.relatedLink}>Read Now →</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
