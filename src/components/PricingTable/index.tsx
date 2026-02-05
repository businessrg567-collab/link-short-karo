import Link from 'next/link';
import styles from './PricingTable.module.css';

interface PricingTier {
    name: string;
    price: string;
    period?: string;
    features: string[];
    cta: string;
    ctaLink: string;
    popular?: boolean;
}

export default function PricingTable() {
    const tiers: PricingTier[] = [
        {
            name: "Free",
            price: "₹0",
            period: "/month",
            features: [
                "Unlimited Link Shortening",
                "Basic Analytics (Clicks only)",
                "Ad-supported Redirects",
                "Standard Support"
            ],
            cta: "Get Started Free",
            ctaLink: "/"
        },
        {
            name: "Business",
            price: "₹999",
            period: "/month",
            popular: true,
            features: [
                "Custom Branded Domains",
                "Advanced Analytics & Geo-targeting",
                "No Ads",
                "API Access",
                "Priority Email Support"
            ],
            cta: "Request Quote",
            ctaLink: "/contact"
        },
        {
            name: "Agency",
            price: "Custom",
            features: [
                "Everything in Business",
                "White-label Dashboard",
                "Client Management Portal",
                "Monthly Strategy Calls",
                "Dedicated Account Manager"
            ],
            cta: "Contact Sales",
            ctaLink: "/contact"
        }
    ];

    return (
        <div className={styles.container}>
            {tiers.map((tier, index) => (
                <div key={index} className={`${styles.card} ${tier.popular ? styles.popular : ''}`}>
                    {tier.popular && <span className={styles.badge}>Most Popular</span>}
                    <h3 className={styles.name}>{tier.name}</h3>
                    <div className={styles.price}>
                        {tier.price}
                        {tier.period && <span className={styles.period}>{tier.period}</span>}
                    </div>
                    <ul className={styles.features}>
                        {tier.features.map((feature, i) => (
                            <li key={i}>
                                <svg className={styles.check} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={tier.ctaLink}
                        className={`btn ${tier.popular ? 'btn-primary' : 'btn-outline'} ${styles.button}`}
                    >
                        {tier.cta}
                    </Link>
                </div>
            ))}
        </div>
    );
}
