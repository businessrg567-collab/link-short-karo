'use client';

import styles from '../page.module.css';

export default function PrivacyPolicy() {
    return (
        <main className={styles.main}>
            <section style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>Privacy Policy</h1>
                    <div style={{ color: 'hsl(var(--muted-foreground))', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 5, 2026</p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Welcome to LinkShortKaro. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
                        </p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Data We Collect</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We may collect, use, store and transfer different kinds of personal data about you, including:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li><strong>Identity Data:</strong> Name, username, or similar identifier.</li>
                            <li><strong>Contact Data:</strong> Email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and location data when you shorten links.</li>
                            <li><strong>Usage Data:</strong> Information about how you use our website and services.</li>
                        </ul>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>3. How We Use Your Data</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Process and manage your link shortening requests.</li>
                            <li>Provide you with campaign analytics and reports.</li>
                            <li>Send you our newsletter if you have opted in.</li>
                            <li>Improve our website and user experience.</li>
                        </ul>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Data Security</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.
                        </p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Contact Us</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        </p>
                        <p><strong>Email:</strong> privacy@linkshortkaro.com</p>
                        <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
