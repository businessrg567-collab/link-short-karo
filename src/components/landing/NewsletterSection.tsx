import NewsletterForm from './NewsletterForm';
import styles from './NewsletterSection.module.css';

export default function NewsletterSection() {
    return (
        <section className={styles.newsletter}>
            <div className="container">
                <div className={styles.box}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Never Miss a Business Opportunity</h2>
                        <p className={styles.description}>
                            Join 5,000+ entrepreneurs and get the most profitable small business ideas and finance tips delivered to your inbox every week.
                        </p>
                    </div>
                    <NewsletterForm />
                    <p className={styles.privacy}>
                        We respect your privacy. No spam, only value.
                    </p>
                </div>
            </div>
        </section>
    );
}
