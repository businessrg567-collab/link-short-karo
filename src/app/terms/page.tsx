import SectionHeading from '@/components/SectionHeading';
import PopularTools from '@/components/PopularTools';
import styles from '../privacy/Legal.module.css';

export default function TermsPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <SectionHeading
                    title="Terms & <span class='title-gradient'>Conditions</span>"
                    subtitle="Please read these terms carefully before using Moneygen.online"
                    centered
                />

                <div className={styles.legalContent}>
                    <span className={styles.lastUpdated}>Last Updated: February 22, 2026</span>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use Moneygen if you do not agree to take all of the terms and conditions stated on this page.</p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>Unless otherwise stated, Moneygen and/or its licensors own the intellectual property rights for all material on Moneygen. All intellectual property rights are reserved. You may access this from Moneygen for your own personal use subjected to restrictions set in these terms and conditions.</p>
                    <p>You must not:</p>
                    <ul>
                        <li>Republish material from Moneygen</li>
                        <li>Sell, rent or sub-license material from Moneygen</li>
                        <li>Reproduce, duplicate or copy material from Moneygen</li>
                        <li>Redistribute content from Moneygen</li>
                    </ul>

                    <h2>3. User Comments</h2>
                    <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Moneygen does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Moneygen, its agents and/or affiliates.</p>

                    <h2>4. Hyperlinking to our Content</h2>
                    <p>The following organizations may link to our Website without prior written approval:</p>
                    <ul>
                        <li>Government agencies;</li>
                        <li>Search engines;</li>
                        <li>News organizations;</li>
                        <li>Online directory distributors;</li>
                    </ul>

                    <h2>5. Content Liability</h2>
                    <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>

                    <div className={styles.contactBox}>
                        <h4>Legal concerns or feedback?</h4>
                        <p>If you have any questions regarding our terms, please contact us at <strong>legal@moneygen.online</strong></p>
                    </div>
                </div>

                <PopularTools />
            </div>
        </main>
    );
}
