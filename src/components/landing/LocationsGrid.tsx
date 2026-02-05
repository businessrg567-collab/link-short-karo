import Link from 'next/link';
import { indianCities } from '@/data/cityData';

export default function LocationsGrid() {
    return (
        <section style={{ padding: '6rem 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Our Presence Across India</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))' }}>Dedicated agency support in 30+ major cities.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                    {indianCities.map(city => (
                        <Link key={city.slug} href={`/locations/${city.slug}`} style={{ padding: '0.75rem', background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '0.5rem', textAlign: 'center', fontSize: '0.9rem', color: 'hsl(var(--foreground))', transition: 'all 0.2s' }} className="city-link">
                            {city.name}
                        </Link>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <Link href="/blog" style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Explore Local Marketing Guides →</Link>
                </div>
            </div>
        </section>
    );
}
