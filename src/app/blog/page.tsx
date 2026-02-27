'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBox from '@/components/SearchBox';
import { blogPosts } from '@/data/blogData';

const categories = ["All", "Small Business", "Finance", "Online Earning", "Loans", "Budgeting"];

const features = [
    { icon: "🔬", title: "Expert Research", desc: "Every article is fact-checked and updated monthly" },
    { icon: "📊", title: "Data-Backed Insights", desc: "Real numbers, not just theories" },
    { icon: "🇮🇳", title: "India Focused", desc: "Content tailored for the Indian economic context" },
    { icon: "📱", title: "Mobile-Friendly", desc: "Read comfortably on any device, anytime" },
];

export default function BlogPage() {
    const [filteredPosts, setFilteredPosts] = useState(blogPosts);
    const [activeCategory, setActiveCategory] = useState('All');

    const handleSearch = (query: string) => {
        const cat = activeCategory === 'All' ? null : activeCategory;
        const filtered = blogPosts.filter(post =>
            (post.title.toLowerCase().includes(query.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(query.toLowerCase())) &&
            (!cat || post.category === cat)
        );
        setFilteredPosts(filtered);
    };

    const handleCategory = (cat: string) => {
        setActiveCategory(cat);
        setFilteredPosts(cat === 'All' ? blogPosts : blogPosts.filter(p => p.category === cat));
    };

    const featured = blogPosts[0];

    return (
        <main style={{ paddingTop: '80px' }}>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #064e3b 0%, #059669 100%)', padding: '60px 0', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '100px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: '1.25rem' }}>
                        ✍️ Expert Financial Insights
                    </span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.15 }}>
                        Moneygen Blog — Learn, Earn, Grow
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
                        Deep-dive guides on business, personal finance, loans, and online earning — updated weekly for India 2026.
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            {featured && (
                <section style={{ padding: '60px 0', background: 'hsl(var(--secondary) / 0.3)' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>📌 Featured Article</h2>
                        <Link href={`/blog/${featured.slug}`} className="card" style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr', gap: 0, overflow: 'hidden' }}>
                            <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                                <img src={featured.image || ''} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 1 }}>
                                    <span style={{ background: 'hsl(var(--accent))', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>{featured.category}</span>
                                </div>
                            </div>
                            <div style={{ padding: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: 'hsl(var(--foreground))' }}>{featured.title}</h3>
                                <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.25rem' }}>{featured.excerpt}</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <span style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>{featured.date}</span>
                                    <span style={{ fontSize: '0.85rem', color: 'hsl(var(--muted-foreground))' }}>{featured.readTime}</span>
                                    <span style={{ color: '#059669', fontWeight: 700 }}>Read Article →</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Category Filter + Articles */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div>
                            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>All Articles</h2>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>{blogPosts.length} expert guides available</p>
                        </div>
                    </div>
                    {/* Category Tabs */}
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategory(cat)}
                                style={{ padding: '0.45rem 1rem', borderRadius: '100px', border: `2px solid ${activeCategory === cat ? '#059669' : 'hsl(var(--border))'}`, background: activeCategory === cat ? '#05966915' : 'transparent', color: activeCategory === cat ? '#059669' : 'hsl(var(--foreground))', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <SearchBox onSearch={handleSearch} placeholder="Search articles..." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
                        {filteredPosts.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={post.image || 'https://images.unsplash.com/photo-1491336477066-31156b5e4f3c?auto=format&fit=crop&q=80&w=600'}
                                        alt={post.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                        loading={index < 6 ? "eager" : "lazy"}
                                    />
                                    <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#05966990', color: 'white', padding: '0.2rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                                        {post.category}
                                    </span>
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{post.title}</h3>
                                    <p style={{ fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', flex: 1 }}>{post.excerpt}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))' }}>{post.readTime}</span>
                                        <span style={{ color: '#059669', fontWeight: 700, fontSize: '0.9rem' }}>Read →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why section */}
            <section style={{ padding: '60px 0', background: 'hsl(var(--secondary) / 0.4)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem' }}>Why Read Moneygen Blog?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
                        {features.map((f, i) => (
                            <div key={i} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.25rem', marginBottom: '1rem' }}>{f.icon}</div>
                                <h3 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>{f.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--muted-foreground))' }}>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
