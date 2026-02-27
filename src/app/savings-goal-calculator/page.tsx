'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from '../budget-planner/budget.module.css';

export default function SavingsCalculatorPage() {
    const [goal, setGoal] = useState<number>(500000);
    const [time, setTime] = useState<number>(2);
    const [interest, setInterest] = useState<number>(7);

    const months = time * 12;
    const r = interest / 12 / 100;
    // Formula: Monthly = Goal * (r / ((1 + r)^n - 1))
    const monthlyNeeded = goal * (r / (Math.pow(1 + r, months) - 1));

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="Savings Goal Calculator"
                    subtitle="Plan your savings strategy and reach your financial goals on time."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>How much do you want to save?</h3>
                        <div className={styles.inputGroup}>
                            <label>Target Amount (₹)</label>
                            <input
                                type="number"
                                value={goal || ''}
                                onChange={(e) => setGoal(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Time to reach goal (Years)</label>
                            <input
                                type="number"
                                value={time || ''}
                                onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Expected Returns (%)</label>
                            <input
                                type="number"
                                value={interest || ''}
                                onChange={(e) => setInterest(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={`${styles.resultCard} ${styles.positive}`}>
                            <p className={styles.resultLabel}>Monthly Savings Needed</p>
                            <h2 className={styles.resultValue}>₹{Math.round(monthlyNeeded).toLocaleString('en-IN')}</h2>
                            <p className={styles.savingsInfo}>
                                Start today to reach your ₹{goal.toLocaleString('en-IN')} goal!
                            </p>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Goal Breakdown</h3>
                            <div className={styles.summaryItem}>
                                <span>Target Amount</span>
                                <span>₹{goal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Total Months</span>
                                <span>{months} months</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Monthly Deposit</span>
                                <span>₹{Math.round(monthlyNeeded).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
