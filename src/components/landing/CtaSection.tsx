export default function CtaSection({ city = "India" }: { city?: string }) {
    return (
        <section style={{ padding: '8rem 0', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to elevate your digital presence in {city}?</h2>
                <p style={{ fontSize: '1.25rem', color: 'hsl(var(--muted-foreground))', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                    Join thousands of businesses using LinkShortKaro to power their links.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <a href="#top" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Start Shortening</a>
                    <a href="/contact" className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Contact Agency</a>
                </div>
            </div>
        </section>
    );
}
