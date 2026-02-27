import Link from 'next/link';

export default function CtaSection({ city = "India" }: { city?: string }) {
    return (
        <section style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to build your financial future in {city}?</h2>
                <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', maxWidth: '600px', marginTop: 0, marginLeft: 'auto', marginRight: 'auto' }}>
                    Join thousands of entrepreneurs using Moneygen to power their dreams.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link href="/small-business-ideas" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Explore Ideas</Link>
                    <Link href="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Contact Experts</Link>
                </div>
            </div>
        </section>
    );
}
