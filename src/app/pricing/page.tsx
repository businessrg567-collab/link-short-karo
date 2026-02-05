import PricingTable from '@/components/PricingTable';
import styles from './pricing.module.css';

export default function Pricing() {
    return (
        <main className="container">
            <section className={styles.section}>
                <div className={styles.header}>
                    <span style={{ color: 'hsl(var(--primary))', fontWeight: 600, marginBottom: '1rem', display: 'block' }}>PLANS & PRICING</span>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Choose the Perfect Plan
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'hsl(var(--muted-foreground))' }}>
                        Whether you're just starting out or managing clients, we have a plan that scales with your needs.
                    </p>
                </div>

                <PricingTable />

                <div style={{ textAlign: 'center', marginTop: '4rem', color: 'hsl(var(--muted-foreground))' }}>
                    <p>Questions about the agency plan? <a href="/contact" style={{ color: 'hsl(var(--primary))', textDecoration: 'underline' }}>Talk to us</a></p>
                </div>
            </section>
        </main>
    );
}
