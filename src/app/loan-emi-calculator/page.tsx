'use client';

import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import styles from '../budget-planner/budget.module.css';

export default function EmiCalculatorPage() {
    const [loanAmount, setLoanAmount] = useState<number>(1000000);
    const [interestRate, setInterestRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(10);

    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    const emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - loanAmount;

    return (
        <main className={styles.main}>
            <div className="container" style={{ paddingTop: '120px' }}>
                <SectionHeading
                    title="Loan EMI Calculator"
                    subtitle="Calculate your monthly loan EMIs for Home, Car, or Personal loans instantly."
                    centered
                />

                <div className={styles.toolGrid}>
                    <div className="card">
                        <h3 className={styles.cardTitle}>Loan Details</h3>

                        <div className={styles.inputGroup}>
                            <label>Loan Amount (₹)</label>
                            <input
                                type="number"
                                value={loanAmount || ''}
                                onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Interest Rate (% P.A.)</label>
                            <input
                                type="number"
                                step="0.1"
                                value={interestRate || ''}
                                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Loan Tenure (Years)</label>
                            <input
                                type="number"
                                value={tenure || ''}
                                onChange={(e) => setTenure(parseFloat(e.target.value) || 0)}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className={styles.resultsWrapper}>
                        <div className={styles.resultCard} style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, #1565c0 100%)' }}>
                            <p className={styles.resultLabel}>Monthly EMI</p>
                            <h2 className={styles.resultValue}>₹{Math.round(emi).toLocaleString('en-IN')}</h2>
                        </div>

                        <div className="card" style={{ marginTop: '2rem' }}>
                            <h3 className={styles.cardTitle}>Repayment Summary</h3>
                            <div className={styles.summaryItem}>
                                <span>Principal Amount</span>
                                <span>₹{loanAmount.toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.summaryItem}>
                                <span>Total Interest Payable</span>
                                <span>₹{Math.round(totalInterest).toLocaleString('en-IN')}</span>
                            </div>
                            <div className={`${styles.summaryItem} ${styles.total}`}>
                                <span>Total Amount Payable</span>
                                <span>₹{Math.round(totalPayment).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
