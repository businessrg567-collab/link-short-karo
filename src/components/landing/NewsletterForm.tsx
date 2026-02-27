'use client';

import styles from './NewsletterSection.module.css';

export default function NewsletterForm() {
    return (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); alert('Welcome to Moneygen!'); }}>
            <input
                type="email"
                placeholder="Enter your best email"
                required
                className={styles.input}
            />
            <button type="submit" className="btn btn-accent">
                Let's Grow Together
            </button>
        </form>
    );
}
