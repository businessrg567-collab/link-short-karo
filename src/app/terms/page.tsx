'use client';

import styles from '../page.module.css';

export default function TermsOfService() {
    return (
        <main className={styles.main}>
            <section style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <h1 className="title-gradient" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '2rem' }}>Terms of Service</h1>
                    <div style={{ color: 'hsl(var(--muted-foreground))', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 5, 2026</p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            By accessing our website at LinkShortKaro, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                        </p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Use License</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Permission is granted to temporarily use the link shortening services for personal or commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Modify or copy the materials;</li>
                            <li>Use the materials for any illegal purpose;</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
                            <li>Remove any copyright or other proprietary notations from the materials.</li>
                        </ul>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Disclaimer</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The materials on LinkShortKaro's website are provided on an 'as is' basis. LinkShortKaro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                        </p>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Limitations of Use</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            You agree not to use LinkShortKaro for shortening links that lead to:
                        </p>
                        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
                            <li>Malware, viruses, or phishing sites;</li>
                            <li>Hate speech or discriminatory content;</li>
                            <li>Copyrighted material without permission;</li>
                            <li>Any content that violates Indian law.</li>
                        </ul>

                        <h2 style={{ color: 'hsl(var(--foreground))', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Governing Law</h2>
                        <p style={{ marginBottom: '1.5rem' }}>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Maharashtra.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
