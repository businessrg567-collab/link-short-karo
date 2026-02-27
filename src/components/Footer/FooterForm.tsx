'use client';

import styles from './Footer.module.css';

export default function FooterForm() {
    return (
        <form className={styles.subscribeForm} onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input type="email" placeholder="Enter your email" required className={styles.subscribeInput} />
            <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
    );
}
