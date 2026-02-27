
'use client';

import React, { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    text: string;
}

const TableOfContents = () => {
    const [headings, setHeadings] = useState<TOCItem[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        let isMounted = true;
        let observer: IntersectionObserver | null = null;

        const timer = setTimeout(() => {
            if (!isMounted) return;

            // Find all article sections by the class added in contentGenerator
            const elements = Array.from(document.querySelectorAll('.article-section h2'));
            const items = elements.map((elem, index) => {
                const parent = elem.parentElement;
                if (parent && !parent.id) {
                    parent.id = `section-${index}`;
                }
                return {
                    id: parent?.id || `section-${index}`,
                    text: elem.textContent || `Section ${index + 1}`
                };
            });
            
            setHeadings(items);

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && isMounted) {
                            setActiveId(entry.target.id);
                        }
                    });
                },
                { rootMargin: '-20% 0px -35% 0px' }
            );

            elements.forEach((elem) => {
                if (elem.parentElement) observer?.observe(elem.parentElement);
            });
        }, 100);

        return () => {
            isMounted = false;
            clearTimeout(timer);
            if (observer) observer.disconnect();
        };
    }, []);

    if (headings.length === 0) return null;

    return (
        <nav className="toc-container" style={{
            position: 'sticky',
            top: '120px',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto',
            padding: '1.5rem',
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem', fontSize: '1.2rem' }}>Table of Contents</h3>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0 }}>
                {headings.map((heading) => (
                    <li key={heading.id} style={{ marginBottom: '0.8rem' }}>
                        <a
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                            style={{
                                display: 'block',
                                fontSize: '0.95rem',
                                color: activeId === heading.id ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
                                fontWeight: activeId === heading.id ? 600 : 400,
                                textDecoration: 'none',
                                borderLeft: activeId === heading.id ? '2px solid hsl(var(--primary))' : '2px solid transparent',
                                paddingLeft: '0.8rem',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
