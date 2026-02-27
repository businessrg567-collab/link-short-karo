import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeSections.module.css';

const loanGuides = [
    {
        title: "Student Loan Without Income",
        desc: "How to get educational loans in India even if you don't have a stable income source.",
        link: "/loan-credit-card-guide/student-loan-without-income-india",
        category: "Education",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Best Credit Cards for Students",
        desc: "Compare the top student credit cards with zero annual fees and rewards.",
        link: "/loan-credit-card-guide/best-credit-cards-for-students",
        category: "Credit Card",
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Mudra Loan Kaise Milega",
        desc: "Everything you need to know about applying for government Mudra loans for your startup.",
        link: "/loan-credit-card-guide/mudra-loan-kaise-milega",
        category: "Govt Loan",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Home Loan EMI Guide 2026",
        desc: "How to plan your home loan, choose the best bank, and reduce your EMI burden.",
        link: "/loan-credit-card-guide/home-loan-emi-guide",
        category: "Home Loan",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "CIBIL Score Kaise Badhaye",
        desc: "Step-by-step guide to improve your credit score and become loan-eligible in 90 days.",
        link: "/loan-credit-card-guide/cibil-score-kaise-badhaye",
        category: "Credit Score",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Personal Loan Without Salary Slip",
        desc: "Find out how to get a personal loan in India even without a salary slip or income proof.",
        link: "/loan-credit-card-guide/personal-loan-without-salary-slip",
        category: "Personal Loan",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800"
    }
];

export default function LoanGuidesSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <SectionHeading
                    title="Loan & Credit Card Guides"
                    subtitle="Navigate the complex world of finance with our simplified and expert-verified guides."
                    viewAllLink="/loan-credit-card-guide"
                />
                <div className={styles.grid}>
                    {loanGuides.map((guide, i) => (
                        <Link key={i} href={guide.link} className={`${styles.card} card`} style={{ textDecoration: 'none' }}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={guide.image}
                                    alt={guide.title}
                                    className={styles.cardImage}
                                    priority={i < 3}
                                    width={600}
                                    height={300}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <span className={styles.guideCat} style={{ position: 'absolute', top: '1rem', left: '1rem', marginBottom: 0, zIndex: 1 }}>{guide.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{guide.title}</h3>
                                <p className={styles.cardDesc}>{guide.desc}</p>
                                <span className={styles.readMore}>
                                    Get Details
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
