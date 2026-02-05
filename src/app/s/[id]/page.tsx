'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { use } from 'react';

interface RedirectPageProps {
    params: Promise<{ id: string }>;
}

export default function RedirectPage({ params }: RedirectPageProps) {
    const { id } = use(params);

    useEffect(() => {
        const saved = localStorage.getItem('linkHistory');
        if (saved) {
            const history = JSON.parse(saved);
            const linkEntry = history.find((entry: any) => entry.shortId === id);

            if (linkEntry && linkEntry.original) {
                window.location.href = linkEntry.original;
            } else {
                console.error('Link mapping not found in local storage');
                // Could fall back to a 404 or home
            }
        }
    }, [id]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
            <h1 className="title-gradient">Redirecting...</h1>
            <p style={{ color: 'hsl(var(--muted-foreground))', marginTop: '1rem' }}>Please wait while we take you to your destination.</p>
            <div style={{ marginTop: '2rem', width: '40px', height: '40px', border: '4px solid hsl(var(--primary)/0.2)', borderTopColor: 'hsl(var(--primary))', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
