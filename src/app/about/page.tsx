import Image from 'next/image';
import PopularTools from '@/components/PopularTools';
import styles from './About.module.css';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles.aboutHero}>
                    <h1>Empowering Your <span className="title-gradient">Financial Future</span></h1>
                    <p>Moneygen is India's most trusted platform for entrepreneurship, side hustles, and smart money management. We believe that everyone deserves the opportunity to build wealth, regardless of their starting point.</p>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.aboutStatCard}>
                        <h3>500+</h3>
                        <p>Business Ideas</p>
                    </div>
                    <div className={styles.aboutStatCard}>
                        <h3>50k+</h3>
                        <p>Monthly Readers</p>
                    </div>
                    <div className={styles.aboutStatCard}>
                        <h3>₹10Cr+</h3>
                        <p>Savings Generated</p>
                    </div>
                    <div className={styles.aboutStatCard}>
                        <h3>100%</h3>
                        <p>Free Resources</p>
                    </div>
                </div>

                <div className={styles.journeySection}>
                    <div className={styles.journeyContent}>
                        <h2>Our <span className="title-gradient">Journey</span></h2>
                        <p>Started in 2026, Moneygen was born out of a simple observation: there is a massive gap between people's desire to start a business and the availability of actionable, local information in India. Most guides are written for Western markets, ignoring the unique challenges and opportunities found in Indian cities and towns.</p>
                        <p>We set out to change that. By focusing on local markets, low-investment opportunities, and practical financial tools, we've helped thousands of Indians take their first steps toward financial independence.</p>
                    </div>
                    <div className={styles.journeyImage}>
                        <Image
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
                            alt="Our Collaboration"
                            width={500}
                            height={400}
                            style={{ borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>

                <div className={styles.valuesGrid}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🎯</div>
                        <h3>Accuracy First</h3>
                        <p>We verify every business idea and financial guide to ensure you get the most reliable information possible.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🇮🇳</div>
                        <h3>Local Market Focus</h3>
                        <p>Our content is tailored specifically for the Indian socio-economic landscape, from Mudra loans to local retail ideas.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>💎</div>
                        <h3>Always Free</h3>
                        <p>We believe high-quality financial education should be accessible to everyone, which is why our core tools and guides will always be free.</p>
                    </div>
                </div>

                <div className={styles.missionCard}>
                    <h2>Our Mission for 2026</h2>
                    <p>By the end of this year, we aim to have documented 1,000 unique business ideas catering to every state in India and provide free budget planning tools to over 100,000 households. Join us as we build a more prosperous and entrepreneurial India.</p>
                </div>

                <PopularTools />
            </div>
        </main>
    );
}
