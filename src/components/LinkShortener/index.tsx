'use client';

import { useState, useEffect } from 'react';
import styles from './LinkShortener.module.css';

export default function LinkShortener() {
    const [url, setUrl] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);
    const [history, setHistory] = useState<{ original: string, short: string, id: string }[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('linkHistory');
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    const saveToHistory = (original: string, short: string, shortId: string) => {
        const newHistory = [{ original, short, shortId, id: Date.now().toString() }, ...history].slice(0, 5);
        setHistory(newHistory);
        localStorage.setItem('linkHistory', JSON.stringify(newHistory));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            const shortId = Math.random().toString(36).substring(7);
            const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
            const shortUrl = `${baseUrl}/s/${shortId}`;
            setResult(shortUrl);
            saveToHistory(url, shortUrl, shortId);
            setLoading(false);
            setUrl('');
        }, 1000);
    };

    const copyToClipboard = (text: string, id: string = 'current') => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.inputGroup}>
                <div className={styles.inputWrapper}>
                    <input
                        type="url"
                        placeholder="Paste your long URL here..."
                        className={styles.input}
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={`btn btn-primary ${styles.shortenBtn}`} disabled={loading}>
                    {loading ? 'Shortening...' : 'Shorten URL'}
                </button>
            </form>

            {result && (
                <div className={styles.result}>
                    <div className={styles.resultHeader}>
                        <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>Success! Here is your short link:</span>
                    </div>
                    <div className={styles.copyArea}>
                        <a href={result} target="_blank" rel="noopener noreferrer" className={styles.shortLink}>
                            {result}
                        </a>
                        <button
                            onClick={() => copyToClipboard(result, 'current')}
                            className="btn btn-outline"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                        >
                            {copied === 'current' ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <span className={styles.originalLink} title={url}>{url || "New link generated"}</span>
                </div>
            )}

            {history.length > 0 && (
                <div style={{ marginTop: '3rem', borderTop: '1px solid hsl(var(--border))', paddingTop: '2rem' }}>
                    <h3 style={{ fontSize: '1rem', color: 'hsl(var(--muted-foreground))', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Recent Links</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {history.map((item) => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'hsl(var(--secondary)/0.3)', borderRadius: '0.5rem', border: '1px solid hsl(var(--border))' }}>
                                <div style={{ overflow: 'hidden', marginRight: '1rem' }}>
                                    <div style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{item.short}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'hsl(var(--muted-foreground))', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>{item.original}</div>
                                </div>
                                <button
                                    onClick={() => copyToClipboard(item.short, item.id)}
                                    className="btn btn-outline"
                                    style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
                                >
                                    {copied === item.id ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
