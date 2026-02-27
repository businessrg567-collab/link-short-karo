'use client';

import Link from 'next/link';
import styles from './PopularTools.module.css';

interface Tool {
    title: string;
    description: string;
    icon: string;
    href: string;
    color: string;
}

const tools: Tool[] = [
    {
        title: 'Budget Planner',
        description: 'Take control of your monthly expenses with our smart planner.',
        icon: '📊',
        href: '/budget-planner',
        color: '#2563eb'
    },
    {
        title: 'Business Profit Calculator',
        description: 'Estimate your margins and profits before you start.',
        icon: '💰',
        href: '/business-profit-calculator',
        color: '#059669'
    },
    {
        title: 'Loan EMI Calculator',
        description: 'Calculate your monthly loan repayments instantly.',
        icon: '💳',
        href: '/loan-emi-calculator',
        color: '#7c3aed'
    },
    {
        title: 'Savings Goal Tracker',
        description: 'Plan your future and hit your savings milestones.',
        icon: '🎯',
        href: '/savings-goal-calculator',
        color: '#db2777'
    },
    {
        title: 'GST Calculator',
        description: 'Quickly calculate GST for your business transactions.',
        icon: '🧾 ', 
        href: '/gst-calculator',
        color: '#0891b2'
    },
    {
        title: 'Investment SIP Builder',
        description: 'Calculate and visualize your future wealth with SIP.',
        icon: '📈',
        href: '/sip-calculator',
        color: '#ea580c'
    }
];

export default function PopularTools() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.title}>Popular <span className="title-gradient">Financial Tools</span></h2>
                <p className={styles.subtitle}>
                    Grow your wealth faster with our free-to-use smart planners and calculators.
                </p>
            </div>

            <div className={styles.grid}>
                {tools.map((tool) => (
                    <Link 
                        key={tool.href} 
                        href={tool.href}
                        className={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = tool.color;
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'hsl(var(--border))';
                        }}
                    >
                        <div 
                            className={styles.iconWrapper}
                            style={{ 
                                background: `${tool.color}10`,
                                color: tool.color
                            }}
                        >
                            {tool.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{tool.title}</h3>
                        <p className={styles.cardDesc}>{tool.description}</p>
                        <span className={styles.useToolBtn} style={{ color: tool.color }}>
                            Use Tool
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
