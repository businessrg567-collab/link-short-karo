export default function StatsSection() {
    return (
        <section style={{ padding: '4rem 0', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>1M+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Links Shortened</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>50K+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Happy Users</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>500+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Agencies Trust Us</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>99.9%</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Uptime Guarantee</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
