'use client';

import { useState } from 'react';

export default function Support() {
    const [status, setStatus] = useState<null | 'submitting' | 'success'>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <main className="container" style={{ padding: '8rem 1.5rem 6rem' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                        Get in Touch
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'hsl(var(--muted-foreground))' }}>
                        Have questions about our agency plans or need technical support? We're here to help.
                    </p>
                </div>

                <div className="glass-card" style={{ padding: '3rem' }}>
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                            <div style={{ width: '60px', height: '60px', background: 'hsl(var(--primary) / 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'hsl(var(--primary))' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p style={{ color: 'hsl(var(--muted-foreground))' }}>We'll get back to you within 24 hours.</p>
                            <button onClick={() => setStatus(null)} className="btn btn-outline" style={{ marginTop: '2rem' }}>Send Another Message</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Name</label>
                                    <input type="text" id="name" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
                                    <input type="email" id="email" required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Subject</label>
                                <select id="subject" style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
                                    <option>General Inquiry</option>
                                    <option>Agency Plan Consultation</option>
                                    <option>Bug Report</option>
                                    <option>Billing</option>
                                </select>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Message</label>
                                <textarea id="message" rows={5} required style={{ padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))', background: 'hsl(var(--background))', color: 'hsl(var(--foreground))', resize: 'vertical' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '1rem' }}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </main>
    );
}
