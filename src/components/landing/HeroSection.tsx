import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero} style={{ 
            width: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '120px 0',
            background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.03), transparent 70%)',
            textAlign: 'center'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2.5rem',
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                {/* Badge Container */}
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <span className={styles.badge} style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>#1 Finance & Business Guide India</span>
                </div>

                {/* Title */}
                <h1 className={styles.title} style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, alignSelf: 'center' }}>
                    Start Your <span className="title-gradient">Small Business</span> with Zero Investment
                </h1>
                
                {/* Description */}
                <p className={styles.description} style={{ marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, alignSelf: 'center' }}>
                    Discover expert-curated business ideas, online shop strategies, and complete financial guides to help you earn and grow in 2026.
                </p>

                {/* CTA Buttons */}
                <div className={styles.ctaGroup} style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    gap: '1.5rem', 
                    width: '100%',
                    alignItems: 'center'
                }}>
                    <Link href="/small-business-ideas" className="btn btn-primary btn-lg">Explore Business Ideas</Link>
                    <Link href="/budget-planner" className="btn btn-outline btn-lg">Trial Budget Planner</Link>
                </div>

                {/* Stats Grid */}
                <div className={styles.stats} style={{ width: '100%', alignSelf: 'center', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                    <div className={styles.statBox}>
                        <div className={styles.statValue}>500+</div>
                        <div className={styles.statLabel}>Expert Ideas</div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statValue}>50k+</div>
                        <div className={styles.statLabel}>Monthly Readers</div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statValue}>₹10Cr+</div>
                        <div className={styles.statLabel}>Savings</div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statValue}>100%</div>
                        <div className={styles.statLabel}>Free Access</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
