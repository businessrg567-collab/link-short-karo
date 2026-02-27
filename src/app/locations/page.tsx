import SectionHeading from '@/components/SectionHeading';
import { locationArticles } from '@/data/locationBusinessData';
import styles from '../small-business-ideas/category.module.css';

export default function LocationsPage() {
    return (
        <main className={styles.categoryPage}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="Business Ideas by City"
                    subtitle="Detailed guides on starting high-demand businesses in major Indian cities. Includes market analysis, registration info, and local secrets."
                />

                <div className={styles.grid}>
                    {locationArticles.map((article) => (
                        <div key={article.slug} className={styles.card}>
                            <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                                <img
                                    src={article.image}
                                    alt={article.city}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    loading="lazy"
                                />
                                <div className={styles.badge} style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 1 }}>{article.city}</div>
                            </div>
                            <div className={styles.cardContent} style={{ padding: '1.5rem' }}>
                                <h2 className={styles.title} style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{article.title}</h2>
                                <p className={styles.description}>{article.description}</p>
                                <div className={styles.footer} style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span className={styles.date}>{article.date}</span>
                                    <a href={`/locations/${article.slug}`} className={styles.link}>View City Guide →</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
