'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from '../budget-planner/budget.module.css';

export default function GSTCalculatorPage() {
    const [amount, setAmount] = useState<number>(10000);
    const [rate, setRate] = useState<number>(18);
    const [isInclusive, setIsInclusive] = useState<boolean>(false);

    const gstAmount = isInclusive 
        ? amount - (amount * (100 / (100 + rate)))
        : (amount * rate) / 100;

    const totalAmount = isInclusive ? amount : amount + gstAmount;
    const netAmount = isInclusive ? amount - gstAmount : amount;

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="GST Calculator"
                    subtitle="Quickly calculate GST inclusive and exclusive amounts for your business."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>Calculate GST</h3>
                        <div className={styles.inputGroup}>
                            <label>Amount (₹)</label>
                            <input
                                type="number"
                                value={amount || ''}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>GST Rate (%)</label>
                            <select 
                                value={rate} 
                                onChange={(e) => setRate(parseInt(e.target.value))}
                                className={styles.input}
                                style={{ background: 'white' }}
                            >
                                <option value="5">5%</option>
                                <option value="12">12%</option>
                                <option value="18">18%</option>
                                <option value="28">28%</option>
                            </select>
                        </div>

                        <div className={styles.inputGroup} style={{ flexDirection: 'row', gap: '1rem', alignItems: 'center' }}>
                            <input
                                type="checkbox"
                                id="inclusive"
                                checked={isInclusive}
                                onChange={(e) => setIsInclusive(e.target.checked)}
                                style={{ width: '20px', height: '20px' }}
                            />
                            <label htmlFor="inclusive" style={{ marginBottom: 0 }}>Amount is GST Inclusive</label>
                        </div>
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={`${styles.resultCard} ${styles.positive}`}>
                            <p className={styles.resultLabel}>Total Amount</p>
                            <h2 className={styles.resultValue}>₹{Math.round(totalAmount).toLocaleString('en-IN')}</h2>
                            <p className={styles.savingsInfo}>
                                GST Component: ₹{Math.round(gstAmount).toLocaleString('en-IN')}
                            </p>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Breakdown</h3>
                            <div className={styles.summaryItem}>
                                <span>Net Amount</span>
                                <span>₹{Math.round(netAmount).toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>GST ({rate}%)</span>
                                <span>₹{Math.round(gstAmount).toLocaleString('en-IN')}</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Total Amount</span>
                                <span>₹{Math.round(totalAmount).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
