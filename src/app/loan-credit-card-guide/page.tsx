import Link from 'next/link';
import { loanGuideArticles } from '@/data/loanGuideData';

const loanTypes = [
    { icon: "🎓", title: "Student Loans", desc: "Education finance without income proof", color: "#2563eb" },
    { icon: "🏠", title: "Home Loans", desc: "Plan your EMI and save on interest", color: "#059669" },
    { icon: "💳", title: "Credit Cards", desc: "Best zero-fee cards with rewards", color: "#7c3aed" },
    { icon: "🏭", title: "Business Loans", desc: "Mudra, PMEGP & startup funding", color: "#db2777" },
    { icon: "📊", title: "Personal Loans", desc: "Quick cash without collateral", color: "#d97706" },
    { icon: "📈", title: "CIBIL Score", desc: "Improve your credit score fast", color: "#0284c7" },
];

const tips = [
    { icon: "⚡", title: "Check Eligibility First", desc: "Always verify eligibility before applying — multiple rejections hurt your CIBIL score." },
    { icon: "🔍", title: "Compare Interest Rates", desc: "Even 0.5% less on a ₹10L loan saves you ₹50,000+ over 5 years." },
    { icon: "📝", title: "Keep Documents Ready", desc: "Aadhaar, PAN, 3-month bank statements, and ITR for the last 2 years." },
    { icon: "🤝", title: "Negotiate With Banks", desc: "Good credit score holders can negotiate better rates — don't be shy to ask." },
];

export default function LoanGuidePage() {
    return (
        <main style={{ paddingTop: '80px' }}>

            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '60px 0', color: 'white' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <span style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '100px', padding: '0.4rem 1.2rem', fontSize: '0.85rem', fontWeight: 700, display: 'inline-block', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                        💰 Smart Borrowing For Every Indian
                    </span>
                    <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, margin: '0 0 1rem', lineHeight: 1.15, color: 'white' }}>
                        Loan & Credit Card Guide India 2026
                    </h1>
                    <p style={{ fontSize: '1.1rem', opacity: 0.85, maxWidth: 580, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Expert-verified guides to help you borrow smart — understand interest rates, compare lenders, and avoid common traps.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
                        {[["₹10L", "Max Mudra Loan"], ["750+", "CIBIL Needed for Best Rates"], ["24hr", "Quick Disbursal Banks"]].map(([v, l], i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#60a5fa' }}>{v}</div>
                                <div style={{ fontSize: '0.8rem', opacity: 0.7 }}>{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Loan Types */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>Loan & Credit Categories</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Find the right financial product for your situation</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.25rem' }}>
                        {loanTypes.map((lt, i) => (
                            <div key={i} className="card" style={{ padding: '1.5rem', borderLeft: `4px solid ${lt.color}` }}>
                                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{lt.icon}</span>
                                <h3 style={{ fontWeight: 800, marginBottom: '0.4rem', color: lt.color }}>{lt.title}</h3>
                                <p style={{ fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', marginBottom: 0 }}>{lt.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Borrowing Tips */}
            <section style={{ padding: '60px 0', background: '#0f172a', color: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>Smart Borrowing Tips</h2>
                    <p style={{ opacity: 0.7, marginBottom: '2rem' }}>Before you sign any loan document, read these</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {tips.map((t, i) => (
                            <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{t.icon}</div>
                                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>{t.title}</h3>
                                <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: 0 }}>{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles */}
            <section style={{ padding: '60px 0' }}>
                <div className="container">
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem' }}>All Finance Guides</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '2rem' }}>Verified and updated for 2026</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {loanGuideArticles.map((article, index) => (
                            <Link key={article.slug} href={`/loan-credit-card-guide/${article.slug}`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                                <div style={{ height: '200px', overflow: 'hidden' }}>
                                    <img
                                        src={article.image || 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=600'}
                                        alt={article.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        loading={index < 3 ? "eager" : "lazy"}
                                    />
                                </div>
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    {article.tag && <span style={{ background: '#1e3a5f', color: '#60a5fa', padding: '0.2rem 0.7rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem', display: 'inline-block' }}>{article.tag}</span>}
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{article.title}</h3>
                                    <p style={{ fontSize: '0.88rem', color: 'hsl(var(--muted-foreground))', flex: 1 }}>{article.description}</p>
                                    <span style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.9rem', marginTop: '1rem', display: 'block' }}>Read Guide →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* EMI Calculator CTA */}
            <section style={{ padding: '50px 0', background: 'hsl(var(--secondary) / 0.4)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '0.75rem' }}>Calculate Your Loan EMI Instantly</h2>
                    <p style={{ color: 'hsl(var(--muted-foreground))', marginBottom: '1.5rem' }}>Use our free EMI calculator to plan your repayments before applying</p>
                    <Link href="/loan-emi-calculator" className="btn btn-primary">Open EMI Calculator →</Link>
                </div>
            </section>

        </main>
    );
}
