'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdSlot.module.css';

interface AdSlotProps {
    slotId: string;
    format?: 'auto' | 'fluid' | 'rectangle';
    style?: React.CSSProperties;
    label?: string;
}

export default function AdSlot({ slotId, format = 'auto', style, label = 'Advertisement' }: AdSlotProps) {
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);

    const isDev = process.env.NODE_ENV === 'development';

    // Generate a consistent style object to avoid React reconciliation warnings
    const getFinalStyle = (additionalStyles: React.CSSProperties = {}): React.CSSProperties => {
        return {
            // Explicitly set margin shorthand to undefined to avoid conflicts with specific margin properties
            margin: undefined,
            textAlign: 'center',
            ...style, // User-provided styles (like marginTop: '2rem')
            ...additionalStyles
        };
    };

    if (!mounted) {
        return (
            <div 
                className={`${styles.placeholder} ${format === 'rectangle' ? styles.rectangle : ''} ${isDev ? 'development' : ''}`}
                style={getFinalStyle()}
            />
        );
    }

    if (isDev) {
        return (
            <div 
                className={`${styles.placeholder} ${format === 'rectangle' ? styles.rectangle : ''}`}
                style={getFinalStyle({
                    background: 'hsl(var(--muted))',
                    border: '1px dashed hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'hsl(var(--muted-foreground))',
                    fontSize: '0.85rem'
                })}
            >
                <span style={{ fontWeight: 600, marginBottom: '0.5rem', opacity: 0.5 }}>{label}</span>
                <span style={{ fontSize: '0.75rem' }}>Slot ID: {slotId} ({format})</span>
            </div>
        );
    }

    // Production code for AdSense
    return (
        <div style={getFinalStyle()}>
            <ins 
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" 
                data-ad-slot={slotId}
                data-ad-format={format}
                data-full-width-responsive="true"
            ></ins>
            <script
                dangerouslySetInnerHTML={{
                    __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});',
                }}
            />
        </div>
    );
}
