'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from './budget.module.css';

export default function BudgetPlannerPage() {
    const [income, setIncome] = useState<number>(0);
    const [expenses, setExpenses] = useState({
        rent: 0,
        groceries: 0,
        utilities: 0,
        transport: 0,
        entertainment: 0,
        savings: 0,
        other: 0
    });

    const totalExpenses = Object.values(expenses).reduce((a, b) => a + b, 0);
    const remaining = income - totalExpenses;
    const savingsPercent = income > 0 ? (remaining / income) * 100 : 0;

    const handleExpenseChange = (name: string, value: string) => {
        setExpenses(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="Monthly Budget Planner India"
                    subtitle="Take control of your finances. Track your income and expenses to reach your savings goals faster."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>Your Income</h3>
                        <div className={styles.inputGroup}>
                            <label>Monthly Take-Home Pay (₹)</label>
                            <input
                                type="number"
                                value={income || ''}
                                onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
                                placeholder="e.g. 50000"
                                className={styles.input}
                            />
                        </div>

                        <h3 className={styles.cardTitle} style={{ marginTop: '2rem' }}>Monthly Expenses</h3>
                        {Object.keys(expenses).map((key) => (
                            <div key={key} className={styles.inputGroup}>
                                <label style={{ textTransform: 'capitalize' }}>{key} (₹)</label>
                                <input
                                    type="number"
                                    value={expenses[key as keyof typeof expenses] || ''}
                                    onChange={(e) => handleExpenseChange(key, e.target.value)}
                                    placeholder="0"
                                    className={styles.input}
                                />
                            </div>
                        ))}
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={`${styles.resultCard} ${remaining >= 0 ? styles.positive : styles.negative}`}>
                            <p className={styles.resultLabel}>Remaining Balance</p>
                            <h2 className={styles.resultValue}>₹{remaining.toLocaleString('en-IN')}</h2>
                            <p className={styles.savingsInfo}>
                                {remaining >= 0
                                    ? `You are saving ${savingsPercent.toFixed(1)}% of your income.`
                                    : `You are overspending by ₹${Math.abs(remaining).toLocaleString('en-IN')}`}
                            </p>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Budget Summary</h3>
                            <div className={styles.summaryItem}>
                                <span>Total Income</span>
                                <span>₹{income.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Total Expenses</span>
                                <span>₹{totalExpenses.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Net Savings</span>
                                <span>₹{remaining.toLocaleString('en-IN')}</span>
                            </div>
                        </div>

                        <div className={styles.tipBox}>
                            <h3>💡 Moneygen Tip</h3>
                            <p>Try to follow the 50/30/20 rule: 50% for Needs, 30% for Wants, and 20% for Savings/Debt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
