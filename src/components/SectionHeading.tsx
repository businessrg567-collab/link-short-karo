import Link from 'next/link';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    viewAllLink?: string;
    viewAllText?: string;
    centered?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    viewAllLink,
    viewAllText = "View All",
    centered = false
}: SectionHeadingProps) {
    return (
        <div className={`${styles.wrapper} ${centered ? styles.centered : ''}`}>
            <div className={styles.content}>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
            {viewAllLink && (
                <Link href={viewAllLink} className={styles.viewAll}>
                    {viewAllText}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            )}
        </div>
    );
}
