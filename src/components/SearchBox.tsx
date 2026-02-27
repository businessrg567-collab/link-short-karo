'use client';

import { useState, useEffect } from 'react';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

export default function SearchBox({ placeholder = "Search for ideas...", onSearch }: SearchBoxProps) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        // Skip the very first run to prevent "state update on unmounted component" or premature parent updates
        const timer = setTimeout(() => {
            if (query !== '') {
                onSearch(query);
            }
        }, 300);
        return () => clearTimeout(timer);
    }, [query, onSearch]);

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
            <input
                type="text"
                className={styles.searchInput}
                placeholder={placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
                <button
                    className={styles.clearBtn}
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            )}
        </div>
    );
}
