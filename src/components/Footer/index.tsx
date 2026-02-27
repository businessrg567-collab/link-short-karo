import Link from 'next/link';
import FooterForm from './FooterForm';
import styles from './Footer.module.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <Link href="/" className={styles.footerLogo}>
                            Moneygen
                        </Link>
                        <p className={styles.brandDesc}>
                            Smart Ways to Earn & Grow. Your trusted guide for small business ideas, financial planning, and online growth strategies in India.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h3>Categories</h3>
                        <ul>
                            <li><Link href="/small-business-ideas">Small Business Ideas</Link></li>
                            <li><Link href="/online-shop-ideas">Online Shop Ideas</Link></li>
                            <li><Link href="/loan-credit-card-guide">Loan & Credit Card Guide</Link></li>
                            <li><Link href="/budget-planner">Budget Planner Tool</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Interactive Tools</h3>
                        <ul>
                            <li><Link href="/budget-planner">Monthly Budget Planner</Link></li>
                            <li><Link href="/business-profit-calculator">Profit Calculator</Link></li>
                            <li><Link href="/loan-emi-calculator">Loan EMI Calculator</Link></li>
                            <li><Link href="/savings-goal-calculator">Savings Calculator</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h3>Company</h3>
                        <ul>
                            <li><Link href="/about">About Moneygen</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                            <li><Link href="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.newsletterSection}>
                    <div className={styles.newsletterInfo}>
                        <h3>Join Our Newsletter</h3>
                        <p>Get the latest business ideas and finance tips delivered to your inbox.</p>
                    </div>
                    <FooterForm />
                </div>

                <div className={styles.bottom}>
                    <p suppressHydrationWarning>© {currentYear} Moneygen.online – All Rights Reserved.</p>
                    <div className={styles.socialLinks}>
                        {/* Social links can be added here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
