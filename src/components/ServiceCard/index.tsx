import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
}

export default function ServiceCard({ title, description, features, icon, ctaText = "Learn More", ctaLink = "/contact" }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>

            <ul className={styles.features}>
                {features.map((feature, index) => (
                    <li key={index}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <Link href={ctaLink} className="btn btn-outline" style={{ width: '100%' }}>
                {ctaText}
            </Link>
        </div>
    );
}
