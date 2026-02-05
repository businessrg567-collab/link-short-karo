import styles from '@/app/page.module.css';

export default function HowItWorksSection() {
    return (
        <section className={styles.howItWorks}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>How It Works</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Three simple steps to professional link management.</p>
                </div>
                <div className={styles.stepGrid}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <h3>Paste your URL</h3>
                        <p>Drop your long, complex link into our shortener tool. It works with any website or social media profile.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <h3>Brand & Customize</h3>
                        <p>Choose a custom alias or use your own branded domain to make your links professional and trustworthy.</p>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <h3>Track & Grow</h3>
                        <p>Monitor real-time analytics to see who is clicking your links and where they are coming from.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
