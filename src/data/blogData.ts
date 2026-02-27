
export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image?: string;
    faqs?: { question: string; answer: string }[];
}

type PostData = {
    title: string;
    category: string;
    image: string;
};

const posts: PostData[] = [
    { title: "How to Start a Business with ₹5000", category: "Small Business", image: "https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=80&w=1200" },
    { title: "10 Best Passive Income Ideas for Students", category: "Finance", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop" },
    { title: "How to Save Your First ₹1 Lakh in 6 Months", category: "Budgeting", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop" },
    { title: "The Future of Dropshipping in India 2026", category: "Online Earning", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop" },
    { title: "Complete Guide to Mudra Loans for Women", category: "Loans", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop" },
    { title: "How to Build a High-Growth Instagram Business", category: "Small Business", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop" },
    { title: "Best Credit Cards for Cashback in India", category: "Finance", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop" },
    { title: "How to Invest in Mutual Funds for Beginners", category: "Budgeting", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop" },
    { title: "Side Hustle Ideas for IT Professionals", category: "Online Earning", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop" },
    { title: "How to Start a Print on Demand Business", category: "Loans", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop" },
    { title: "Understanding Business Loans for Small Startups", category: "Small Business", image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop" },
    { title: "Mastering Personal Budgeting: 50/30/20 Rule", category: "Finance", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop" },
    { title: "How to Sell Handmade Products Online", category: "Budgeting", image: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=800&auto=format&fit=crop" },
    { title: "The Ultimate Guide to Amazon Seller Central India", category: "Online Earning", image: "https://images.unsplash.com/photo-1544654803-b69140b285a1?w=800&auto=format&fit=crop" },
    { title: "How to Improve Your Credit Score Fast", category: "Loans", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop" },
    { title: "Best Business Ideas for Rural Entrepreneurs", category: "Small Business", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&auto=format&fit=crop" },
    { title: "How to Start a Digital Marketing Agency", category: "Finance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" },
    { title: "Profitable Home-Based Business Ideas for 2026", category: "Budgeting", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop" },
    { title: "How to Get an Education Loan for Studies Abroad", category: "Online Earning", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop" },
    { title: "The Pros and Cons of Personal Loans", category: "Loans", image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop" },
    { title: "How to Start a Content Creation Journey", category: "Small Business", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop" },
    { title: "Affiliate Marketing Strategies for Beginners", category: "Finance", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop" },
    { title: "How to Launch a Successful Shopify Store", category: "Budgeting", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop" },
    { title: "Understanding GST for Small Business Owners", category: "Online Earning", image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop" },
    { title: "How to Plan for Early Retirement in India", category: "Loans", image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&auto=format&fit=crop" },
    { title: "Top 5 Finance Apps Every Indian Should Use", category: "Small Business", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop" },
    { title: "Developing a Strategic Business Plan", category: "Finance", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop" },
    { title: "How to Negotiate Better Interest Rates on Loans", category: "Budgeting", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop" },
    { title: "The Importance of Emergency Funds", category: "Online Earning", image: "https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&auto=format&fit=crop" },
    { title: "Scaling Your Small Business to the Next Level", category: "Loans", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop" },
];

const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const blogPosts: BlogPost[] = posts.map((post, index) => ({
    id: (index + 1).toString(),
    slug: generateSlug(post.title),
    title: post.title,
    excerpt: `Learn everything about ${post.title} in this comprehensive guide from Moneygen.`,
    category: post.category,
    author: "Moneygen Expert",
    date: new Date(2026, 1, Math.max(1, 17 - (index % 15))).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
    readTime: `${20 + (index % 10)} min read`,
    image: post.image,
    content: '',
    faqs: [
        { question: `What are the first steps to start with ${post.title}?`, answer: `Starting with ${post.title} requires a clear understanding of your goals and resources. First, conduct thorough market research to identify your target audience and competitors. Create a detailed plan that outlines your strategy, budget, and timeline.` },
        { question: `How much capital is needed for ${post.title}?`, answer: `The capital required varies significantly depending on scale. For small-scale initiatives, start with a minimal budget focusing on essential tools and organic growth. Always start small and scale up as you generate revenue.` },
        { question: `Is ${post.title} suitable for beginners?`, answer: `Yes, ${post.title} is suitable for beginners willing to learn and adapt. Many successful professionals started with little experience. Use online resources, take courses, and practice regularly. Consistency and patience are key.` },
        { question: `What are the common risks in ${post.title}?`, answer: `Risks include market volatility, regulatory changes, and financial uncertainty. Maintain a risk management strategy: diversify your approach, keep an emergency fund, and stay updated with industry trends.` },
        { question: `Where can I find more resources on ${post.title}?`, answer: `Explore specialized blogs, YouTube channels, and courses on Udemy or Coursera. Join community forums and social media groups. Our website offers in-depth guides and articles to help you succeed.` }
    ]
}));

// Note: getPostBySlug is intentionally NOT here.
// Content generation happens in the article page (server-side) to avoid
// importing contentGenerator.ts into client-side bundles.
export const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(p => p.slug === slug);
};
