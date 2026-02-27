'use client';

import { useState } from 'react';
import Link from 'next/link';
import { businessIdeasArticles } from '@/data/businessIdeasData';
import SearchBox from '@/components/SearchBox';

const stats = [
    { value: "500+", label: "Business Ideas" },
    { value: "₹5K", label: "Min Investment" },
    { value: "30+", label: "Categories" },
    { value: "50K+", label: "Monthly Readers" },
];

const categories = [
    { label: "Rural & Village", icon: "🌾", desc: "Low-cost ideas for tier 2/3 cities" },
    { label: "Digital Business", icon: "💻", desc: "Online businesses you can run from home" },
    { label: "Food & Kitchen", icon: "🍱", desc: "Cloud kitchens, tiffin, snack brands" },
    { label: "Women Entrepreneurs", icon: "👩‍💼", desc: "Ideas tailored for women to grow independently" },
    { label: "Student Startups", icon: "🎓", desc: "Part-time ideas that work around studies" },
    { label: "Retail & Trading", icon: "🛒", desc: "Wholesale, reselling, kirana evolution" },
];

const whyCards = [
    { icon: "✅", title: "Expert Verified", desc: "Every idea is researched and tested for the Indian market." },
    { icon: "📍", title: "City-Specific", desc: "Localized demand data for 30+ Indian cities and towns." },
    { icon: "💰", title: "Investment Ready", desc: "From ₹0 to ₹1 lakh — we cover every budget range." },
    { icon: "📈", title: "Growth Focused", desc: "Ideas that scale — from side hustle to full business." },
];

export default function BusinessIdeasPage() {
    const [filteredArticles, setFilteredArticles] = useState(businessIdeasArticles);
    const [activeCategory, setActiveCategory] = useState('All');

    const handleSearch = (query: string) => {
        const filtered = businessIdeasArticles.filter(article =>
            article.title.toLowerCase().includes(query.toLowerCase()) ||
            article.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

    return (
        <main style={{ paddingTop: '80px' }}>

            {/* Hero Banner */}
            <section style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)', padding: '60px 0', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '100px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: '1.25rem' }}>
                        🚀 India's #1 Business Idea Platform
                    </span>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.15 }}>
                        Small Business Ideas India 2026
                    </h1>
                    <p style={{ fontSize: '1.15rem', opacity: 0.9, maxWidth: 640, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
                        Discover expert-curated, low-investment business opportunities tailored specifically for the Indian market — from villages to metros.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                        {stats.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 900 }}>{s.value}</div>
                                <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Browse by Category */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--secondary) / 0.4)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Browse by Category</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Find ideas that match your skills, location, and budget</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
                        {categories.map((cat, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1.25rem', transition: 'all 0.2s' }}>
                                <span style={{ fontSize: '2.25rem', flexShrink: 0 }}>{cat.icon}</span>
                                <div>
                                    <div style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{cat.label}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>{cat.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Articles */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>All Business Guides</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>Verified, detailed, and updated for 2026</p>
                    <SearchBox onSearch={handleSearch} placeholder="Search business ideas..." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {filteredArticles.map((article, index) => (
                            <Link key={article.slug} href={`/small-business-ideas/${article.slug}`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={article.image || 'https://images.unsplash.com/photo-1491336477066-31156b5e4f3c?auto=format&fit=crop&q=80&w=600'}
                                        alt={article.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                    {article.tag && (
                                        <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'hsl(var(--accent))', color: 'white', padding: '0.2rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, zIndex: 1 }}>{article.tag}</span>
                                    )}
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>{article.title}</h3>
                                    <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1.25rem', flex: 1 }}>{article.description}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{article.date}</span>
                                        <span style={{ color: 'hsl(var(--primary))', fontWeight: 700, fontSize: '0.9rem' }}>Read Guide →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Trust Moneygen */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--primary) / 0.04)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Why Moneygen is Different</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>We don't just list ideas — we give you the playbook to execute them</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {whyCards.map((c, i) => (
                            <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{c.icon}</div>
                                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>{c.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--foreground))', color: 'hsl(var(--background))' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>Ready to Start Your Business Journey?</h2>
                    <p style={{ opacity: 0.75, maxWidth: 560, margin: '0 auto 2rem' }}>Join 50,000+ readers who are already building their financial future with Moneygen's free guides.</p>
                    <Link href="/budget-planner" className="btn btn-primary" style={{ background: 'hsl(var(--primary))', color: 'white' }}>
                        Try Free Budget Planner →
                    </Link>
                </div>
            </section>

        </main>
    );
}
