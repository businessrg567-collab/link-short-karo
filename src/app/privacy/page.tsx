import SectionHeading from '@/components/SectionHeading';
import PopularTools from '@/components/PopularTools';
import styles from './Legal.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <SectionHeading
                    title="Privacy <span class='title-gradient'>Policy</span>"
                    subtitle="Your privacy is critically important to us at Moneygen.online"
                    centered
                />

                <div className={styles.legalContent}>
                    <span className={styles.lastUpdated}>Last Updated: February 22, 2026</span>

                    <h2>1. Introduction</h2>
                    <p>At Moneygen, accessible from moneygen.online, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Moneygen and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>

                    <h2>2. Log Files</h2>
                    <p>Moneygen follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>
                    <p>These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                    <h2>3. Cookies and Web Beacons</h2>
                    <p>Like any other website, Moneygen uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                    <h2>4. Google DoubleClick DART Cookie</h2>
                    <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>

                    <h2>5. Our Advertising Partners</h2>
                    <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:</p>
                    <ul>
                        <li>Google AdSense</li>
                        <li>Other local affiliate partners</li>
                    </ul>
                    <p>Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

                    <h2>6. Third Party Privacy Policies</h2>
                    <p>Moneygen's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

                    <div className={styles.contactBox}>
                        <h4>Questions regarding our data policy?</h4>
                        <p>If you have any questions about this Privacy Policy, please contact us at <strong>privacy@moneygen.online</strong></p>
                    </div>
                </div>

                <PopularTools />
            </div>
        </main>
    );
}
