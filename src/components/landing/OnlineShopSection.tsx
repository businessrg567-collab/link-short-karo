import SectionHeading from '../SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import styles from './HomeSections.module.css';

const shopIdeas = [
    {
        title: "Instagram Shop Kaise Start Kare",
        desc: "Complete step-by-step guide to selling products on Instagram in India.",
        link: "/online-shop-ideas/instagram-shop-kaise-start-kare",
        icon: "📸",
        image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Amazon Seller Account Guide",
        desc: "Learn how to register and sell your products to millions on Amazon India.",
        link: "/online-shop-ideas/amazon-seller-account-guide",
        icon: "📦",
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Dropshipping Business India",
        desc: "Start a successful dropshipping business without holding any inventory.",
        link: "/online-shop-ideas/dropshipping-business-india",
        icon: "🚀",
        image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "How to Sell on Meesho",
        desc: "Use Meesho to resell products and earn from home without any initial investment.",
        link: "/online-shop-ideas/meesho-se-paise-kaise-kamaye",
        icon: "💼",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Etsy Selling Guide",
        desc: "Sell handmade, vintage or digital products to global customers from India.",
        link: "/online-shop-ideas/etsy-selling-guide-india",
        icon: "🎨",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Flipkart Seller Guide",
        desc: "Step-by-step guide to enrolling as a seller on Flipkart and receiving your first order.",
        link: "/online-shop-ideas/flipkart-seller-registration-guide",
        icon: "🛒",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800"
    }
];

export default function OnlineShopSection() {
    return (
        <section className={styles.sectionDark}>
            <div className="container">
                <SectionHeading
                    title="Online Shop Ideas for Students"
                    subtitle="Monetize your creative skills and digital presence with these online selling strategies."
                    viewAllLink="/online-shop-ideas"
                />
                <div className={styles.grid}>
                    {shopIdeas.map((shop, i) => (
                        <Link key={i} href={shop.link} className={`${styles.card} card`} style={{ textDecoration: 'none' }}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={shop.image}
                                    alt={shop.title}
                                    className={styles.cardImage}
                                    priority={i < 3}
                                    width={600}
                                    height={300}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className={styles.iconBox} style={{ position: 'absolute', bottom: '1rem', right: '1rem', marginBottom: 0, background: 'white', padding: '0.5rem', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', zIndex: 1 }}>
                                    {shop.icon}
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{shop.title}</h3>
                                <p className={styles.cardDesc}>{shop.desc}</p>
                                <span className={styles.readMore}>
                                    Launch Shop
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
