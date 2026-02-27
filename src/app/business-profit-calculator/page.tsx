'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from '../budget-planner/budget.module.css';

export default function ProfitCalculatorPage() {
    const [revenue, setRevenue] = useState<number>(0);
    const [costs, setCosts] = useState({
        productCost: 0,
        marketing: 0,
        shipping: 0,
        platformFees: 0,
        overhead: 0
    });

    const totalCosts = Object.values(costs).reduce((a, b) => a + b, 0);
    const profit = revenue - totalCosts;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

    const handleCostChange = (name: string, value: string) => {
        setCosts(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="Business Profit Calculator"
                    subtitle="Calculate your net profit margins and understand your business expenses better."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>Sales Revenue</h3>
                        <div className={styles.inputGroup}>
                            <label>Estimated Monthly Revenue (₹)</label>
                            <input
                                type="number"
                                value={revenue || ''}
                                onChange={(e) => setRevenue(parseFloat(e.target.value) || 0)}
                                placeholder="e.g. 100000"
                                className={styles.input}
                            />
                        </div>

                        <h3 className={styles.cardTitle} style={{ marginTop: '2rem' }}>Direct & Indirect Costs</h3>
                        {Object.keys(costs).map((key) => (
                            <div key={key} className={styles.inputGroup}>
                                <label style={{ textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')} (₹)</label>
                                <input
                                    type="number"
                                    value={costs[key as keyof typeof costs] || ''}
                                    onChange={(e) => handleCostChange(key, e.target.value)}
                                    placeholder="0"
                                    className={styles.input}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={`${styles.resultCard} ${profit >= 0 ? styles.positive : styles.negative}`}>
                            <p className={styles.resultLabel}>Net Monthly Profit</p>
                            <h2 className={styles.resultValue}>₹{profit.toLocaleString('en-IN')}</h2>
                            <p className={styles.savingsInfo}>
                                {profit >= 0
                                    ? `Your profit margin is ${margin.toFixed(1)}%.`
                                    : `Your business is currently at a loss.`}
                            </p>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Profitability Summary</h3>
                            <div className={styles.summaryItem}>
                                <span>Total Revenue</span>
                                <span>₹{revenue.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Total Operating Costs</span>
                                <span>₹{totalCosts.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Net Profit</span>
                                <span>₹{profit.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
