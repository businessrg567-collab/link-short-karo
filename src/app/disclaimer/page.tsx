import SectionHeading from '@/components/SectionHeading';
import PopularTools from '@/components/PopularTools';
import styles from '../privacy/Legal.module.css';

export default function DisclaimerPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <SectionHeading
                    title="Legal <span class='title-gradient'>Disclaimer</span>"
                    subtitle="Financial and Business Advice Disclaimer for Moneygen.online"
                    centered
                />

                <div className={styles.legalContent}>
                    <span className={styles.lastUpdated}>Last Updated: February 22, 2026</span>

                    <h2>1. General Information</h2>
                    <p>The information provided on Moneygen (moneygen.online) is for educational and informational purposes only and should not be construed as professional financial, legal, or business advice. Always consult with a qualified professional before making any investment or business decisions.</p>

                    <h2>2. No Professional-Client Relationship</h2>
                    <p>Your use of this website – including implementation of any suggestions set out in this website and/or use of any resources available on this website – does not create a professional-client relationship between you and Moneygen or any of its professionals.</p>

                    <h2>3. Errors and Omissions</h2>
                    <p>This World Wide Web Site is a public resource of general information that is intended, but not promised or guaranteed, to be correct, complete, and up-to-date. We have taken reasonable steps to ensure that the information contained in this Website is correct, but we cannot guarantee that this Website is free of errors.</p>

                    <h2>4. Affiliate Disclosure</h2>
                    <p>In compliance with the FTC guidelines, please assume that any and all links on this website are affiliate links of which Moneygen receives a small commission from sales of certain items, but the price is the same for you.</p>

                    <h2>5. Results Disclaimer</h2>
                    <p>Any earnings or income statements made on this website are estimates of what we think you could potentially earn. There is no assurance you will do as well as stated in any examples. Reliance on any figures provided is at your own risk. Past performance does not guarantee future results.</p>

                    <div className={styles.contactBox}>
                        <h4>Need further clarification?</h4>
                        <p>If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at <strong>contact@moneygen.online</strong></p>
                    </div>
                </div>

                <PopularTools />
            </div>
        </main>
    );
}
