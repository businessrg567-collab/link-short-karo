import styles from '@/app/page.module.css';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    city?: string;
    customFaqs?: FaqItem[];
}

export default function FaqSection({ city = "India", customFaqs }: FaqSectionProps) {

    const defaultFaqs = [
        {
            question: "Is it free to use?",
            answer: "Yes, our basic link shortening tool is completely free. For advanced features like custom domains and agency reports, we offer premium plans."
        },
        {
            question: "Can I use my own domain?",
            answer: "Absolutely! Our Business and Agency plans allow you to connect your own custom domain for branded short links."
        },
        {
            question: "Where are you located?",
            answer: `Our main office is in Bareilly, Uttar Pradesh, and we serve clients throughout ${city} and all of India.`
        },
        {
            question: "How do I track clicks?",
            answer: "Every link generated includes real-time tracking. You can view detailed analytics on your dashboard or receive monthly reports via our agency service."
        }
    ];

    const displayFaqs = customFaqs || defaultFaqs;

    return (
        <section className={styles.faq}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Frequently Asked Questions</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Common questions about our link shortening and agency services.</p>
                </div>
                <div className={styles.faqGrid}>
                    {displayFaqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
