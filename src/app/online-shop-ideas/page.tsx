import Link from 'next/link';
import { onlineShopArticles } from '@/data/onlineShopData';

const platforms = [
    { name: "Instagram", icon: "📸", color: "#e1306c", desc: "Best for fashion, beauty & lifestyle products" },
    { name: "Amazon", icon: "📦", color: "#ff9900", desc: "India's largest product marketplace" },
    { name: "Meesho", icon: "💼", color: "#a020f0", desc: "Zero investment reselling platform" },
    { name: "Flipkart", icon: "🛒", color: "#2874f0", desc: "Second largest Indian e-commerce" },
    { name: "Etsy", icon: "🎨", color: "#f1641e", desc: "Global marketplace for handmade goods" },
    { name: "WhatsApp", icon: "💬", color: "#25d366", desc: "Direct selling via WhatsApp Business" },
];

const steps = [
    { step: "01", title: "Choose Your Platform", desc: "Pick the marketplace that fits your product and target audience best." },
    { step: "02", title: "List Your Products", desc: "Create appealing product listings with great photos and descriptions." },
    { step: "03", title: "Set Up Payments", desc: "Enable Razorpay, Paytm, or UPI to start accepting payments instantly." },
    { step: "04", title: "Market & Grow", desc: "Use social media, SEO, and discounts to drive traffic to your store." },
];

export default function OnlineShopIdeasPage() {
    return (
        <main style={{ paddingTop: '80px' }}>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)', padding: '60px 0', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '100px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: '1.25rem' }}>
                        🛍️ E-Commerce Made Simple for India
                    </span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.15 }}>
                        Start Your Online Shop in 2026
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: 580, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Complete guides to selling on Instagram, Amazon, Meesho, and more — without any technical knowledge.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {[["₹0", "to Start on Meesho"], ["24hrs", "to Go Live on Amazon"], ["10M+", "Buyers Available"]].map(([v, l], i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.75rem', fontWeight: 900 }}>{v}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.8 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Grid */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--secondary) / 0.3)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Top Selling Platforms in India</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Choose the right platform for your product type and audience</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {platforms.map((p, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: 56, height: 56, borderRadius: '50%', background: p.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>
                                    {p.icon}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.25rem', color: p.color }}>{p.name}</div>
                                    <div style={{ fontSize: '0.82rem', color: 'hsl(var(--muted-foreground))' }}>{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>How to Start Your Online Shop in 4 Steps</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Anyone can do this — no tech skills needed</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
                        {steps.map((s, i) => (
                            <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'hsl(var(--primary) / 0.1)', position: 'absolute', top: '1rem', right: '1rem', lineHeight: 1 }}>{s.step}</div>
                                <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'hsl(var(--primary))', marginBottom: '1rem' }}>Step {s.step}</div>
                                <h3 style={{ fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--secondary) / 0.3)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Online Shop Guides</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Step-by-step guides to launch and grow your online store</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {onlineShopArticles.map((article, index) => (
                            <Link key={article.slug} href={`/online-shop-ideas/${article.slug}`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={article.image || 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=600'}
                                        alt={article.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    {article.tag && <span style={{ background: '#7c3aed20', color: '#7c3aed', padding: '0.2rem 0.7rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', display: 'inline-block' }}>{article.tag}</span>}
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{article.title}</h3>
                                    <p style={{ fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', flex: 1 }}>{article.description}</p>
                                    <span style={{ color: '#7c3aed', fontWeight: 700, fontSize: '0.9rem', marginTop: '1rem', display: 'block' }}>Read Guide →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #7c3aed, #db2777)', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Open Your Online Store?</h2>
                    <p style={{ opacity: 0.85, maxWidth: 520, margin: '0 auto 2rem' }}>Start for free — no technical skills required. Our guides walk you through every step.</p>
                    <Link href="/small-business-ideas" className="btn btn-outline" style={{ background: 'white', color: '#7c3aed', border: 'none' }}>
                        Explore Business Ideas →
                    </Link>
                </div>
            </section>

        </main>
    );
}
