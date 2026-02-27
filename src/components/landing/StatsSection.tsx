export default function StatsSection() {
    return (
        <section style={{ padding: '4rem 0', borderTop: '1px solid hsl(var(--border))', borderBottom: '1px solid hsl(var(--border))' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>500+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Business Ideas</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>50K+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Monthly Readers</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>100+</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Finance Guides</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>100%</div>
                        <div style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>Free Resources</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
