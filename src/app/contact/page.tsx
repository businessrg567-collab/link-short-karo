'use client';

import SectionHeading from '@/components/SectionHeading';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <SectionHeading
                    title="Get In <span class='title-gradient'>Touch</span>"
                    subtitle="Have a question or a business idea to share? Reach out to the Moneygen team."
                    centered
                />

                <div className={styles.contactGrid}>
                    <div className={styles.formSection}>
                        <h2>Send us a Message</h2>
                        <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputGroup}>
                                <label>Your Name</label>
                                <input type="text" placeholder="Full Name" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Email Address</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Subject</label>
                                <input type="text" placeholder="What is this regarding?" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label>Message</label>
                                <textarea rows={5} placeholder="How can we help you?" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                        </form>
                    </div>

                    <div className={styles.infoSection}>
                        <div className={styles.infoBlock}>
                            <h3>Contact Information</h3>
                            <div className={styles.detailsList}>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>📧</div>
                                    <div className={styles.detailText}>
                                        <p>Email Us</p>
                                        <span>contact@moneygen.online</span>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>📍</div>
                                    <div className={styles.detailText}>
                                        <p>Our Location</p>
                                        <span>Digital Hub, Mumbai, India (Remote Operations)</span>
                                    </div>
                                </div>
                                <div className={styles.detailItem}>
                                    <div className={styles.detailIcon}>📱</div>
                                    <div className={styles.detailText}>
                                        <p>Social Media</p>
                                        <span>Connect with us on Instagram @MoneygenIndia</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h3>Why Reach Out?</h3>
                            <ul style={{ paddingLeft: '1.2rem', color: 'hsl(var(--muted-foreground))', lineHeight: '1.8' }}>
                                <li><strong>Partnerships:</strong> Collaborate with India's fastest growing business guide.</li>
                                <li><strong>Guest Posts:</strong> Share your success story with our community.</li>
                                <li><strong>Feedback:</strong> Tell us how we can improve our tools.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.faqSection}>
                    <h2>Frequently Asked <span className="title-gradient">Questions</span></h2>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqCard}>
                            <h4>How can I start a business with zero investment?</h4>
                            <p>We've curated a specific section for zero-investment ideas like freelancing, dropshipping, and tutoring. Check our 'Business Ideas' page for detailed guides.</p>
                        </div>
                        <div className={styles.faqCard}>
                            <h4>Are your financial tools accurate?</h4>
                            <p>Our calculators are built based on standard financial formulas and current market rates. However, they should be used as guides, and we recommend consulting a pro for final decisions.</p>
                        </div>
                        <div className={styles.faqCard}>
                            <h4>Can I promote my business on Moneygen?</h4>
                            <p>We are always looking for authentic success stories from Indian entrepreneurs. Contact us with your details to discuss a feature story.</p>
                        </div>
                        <div className={styles.faqCard}>
                            <h4>Is Moneygen available in local languages?</h4>
                            <p>Currently, we operate in English, but we have plans to roll out Hindi and other regional language support soon!</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
