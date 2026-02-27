'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from '../budget-planner/budget.module.css';

export default function SIPCalculatorPage() {
    const [monthly, setMonthly] = useState<number>(5000);
    const [rate, setRate] = useState<number>(12);
    const [years, setYears] = useState<number>(10);

    const months = years * 12;
    const i = rate / 12 / 100;
    
    // Formula: Future Value = P * [((1 + i)^n - 1) / i] * (1 + i)
    const totalValue = monthly * ((Math.pow(1 + i, months) - 1) / i) * (1 + i);
    const totalInvested = monthly * months;
    const estReturns = totalValue - totalInvested;

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="SIP Calculator"
                    subtitle="Calculate the future value of your Systematic Investment Plan (SIP)."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>SIP Details</h3>
                        <div className={styles.inputGroup}>
                            <label>Monthly Investment (₹)</label>
                            <input
                                type="number"
                                value={monthly || ''}
                                onChange={(e) => setMonthly(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Expected Return Rate (% p.a)</label>
                            <input
                                type="number"
                                value={rate || ''}
                                onChange={(e) => setRate(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Time Period (Years)</label>
                            <input
                                type="number"
                                value={years || ''}
                                onChange={(e) => setYears(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={`${styles.resultCard} ${styles.positive}`}>
                            <p className={styles.resultLabel}>Estimated Future Value</p>
                            <h2 className={styles.resultValue}>₹{Math.round(totalValue).toLocaleString('en-IN')}</h2>
                            <p className={styles.savingsInfo}>
                                Wealth Gained: ₹{Math.round(estReturns).toLocaleString('en-IN')}
                            </p>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Investment Summary</h3>
                            <div className={styles.summaryItem}>
                                <span>Total Investment</span>
                                <span>₹{totalInvested.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Estimated Returns</span>
                                <span>₹{Math.round(estReturns).toLocaleString('en-IN')}</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Total Value</span>
                                <span>₹{Math.round(totalValue).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
