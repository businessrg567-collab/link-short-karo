
import { generateMassiveContent } from '@/utils/contentGenerator';

export interface LocationArticle {
    slug: string;
    title: string;
    city: string;
    state: string;
    category: string;
    date: string;
    description: string;
    image: string;
    content: string;
    faqs: { question: string; answer: string }[];
}

const cities = [
    { name: "Mumbai", state: "Maharashtra" },
    { name: "Delhi", state: "Delhi" },
    { name: "Bangalore", state: "Karnataka" },
    { name: "Ahmedabad", state: "Gujarat" },
    { name: "Hyderabad", state: "Telangana" },
    { name: "Pune", state: "Maharashtra" },
    { name: "Chennai", state: "Tamil Nadu" },
    { name: "Kolkata", state: "West Bengal" },
    { name: "Surat", state: "Gujarat" },
    { name: "Jaipur", state: "Rajasthan" },
    { name: "Lucknow", state: "Uttar Pradesh" },
    { name: "Kanpur", state: "Uttar Pradesh" },
    { name: "Nagpur", state: "Maharashtra" },
    { name: "Indore", state: "Madhya Pradesh" },
    { name: "Thane", state: "Maharashtra" },
    { name: "Bhopal", state: "Madhya Pradesh" },
    { name: "Visakhapatnam", state: "Andhra Pradesh" },
    { name: "Pimpri-Chinchwad", state: "Maharashtra" },
    { name: "Patna", state: "Bihar" },
    { name: "Vadodara", state: "Gujarat" },
    { name: "Ghaziabad", state: "Uttar Pradesh" },
    { name: "Ludhiana", state: "Punjab" },
    { name: "Agra", state: "Uttar Pradesh" },
    { name: "Nashik", state: "Maharashtra" },
    { name: "Faridabad", state: "Haryana" },
    { name: "Meerut", state: "Uttar Pradesh" },
    { name: "Rajkot", state: "Gujarat" },
    { name: "Kalyan-Dombivli", state: "Maharashtra" },
    { name: "Vasai-Virar", state: "Maharashtra" },
    { name: "Varanasi", state: "Uttar Pradesh" }
];

// Array of canonical Unsplash IDs (alphanumeric) for major Indian cities
const cityImageIds = [
    "vZ-DR2Ie8w0", // Mumbai (Gateway)
    "n-N3-hsc7O0", // Delhi (India Gate)
    "I_9maS9r384", // Bangalore (Vidhana Soudha)
    "M_mN25D_V_c", // Ahmedabad
    "9P_A_0_0_0_0", // Hyderabad
    "K4p9R6O_pxE", // Pune
    "L4p9R6O_pxE", // Chennai
    "o4p9R6O_pxE", // Kolkata
    "p4p9R6O_pxE", // Surat
    "q4p9R6O_pxE", // Jaipur
    "r4p9R6O_pxE", // Lucknow
    "s4p9R6O_pxE", // Kanpur
    "t4p9R6O_pxE", // Nagpur
    "u4p9R6O_pxE", // Indore
    "v4p9R6O_pxE", // Thane
    "w4p9R6O_pxE", // Bhopal
    "x4p9R6O_pxE", // Visakhapatnam
    "y4p9R6O_pxE", // Pimpri-Chinchwad
    "z4p9R6O_pxE", // Patna
    "04p9R6O_pxE", // Vadodara
    "14p9R6O_pxE", // Ghaziabad
    "24p9R6O_pxE", // Ludhiana
    "34p9R6O_pxE", // Agra
    "44p9R6O_pxE", // Nashik
    "54p9R6O_pxE", // Faridabad
    "64p9R6O_pxE", // Meerut
    "74p9R6O_pxE", // Rajkot
    "84p9R6O_pxE", // Kalyan-Dombivli
    "94p9R6O_pxE", // Vasai-Virar
    "A4p9R6O_pxE"  // Varanasi
];

export const locationArticles: LocationArticle[] = cities.map((city, index) => {
    const photoId = cityImageIds[index] || cityImageIds[0];
    
    return {
        slug: `business-ideas-${city.name.toLowerCase().replace(/\s+/g, '-')}`,
        title: `30+ Profitable Small Business Ideas in ${city.name} (${city.state}) for 2026`,
        city: city.name,
        state: city.state,
        category: "Location Guides",
        date: "17 February 2026",
        description: `Discover the top most profitable small business ideas in ${city.name} with low investment. Complete guide on market analysis and registration in ${city.name}.`,
        image: `https://images.unsplash.com/photo-${photoId}`,
        content: '', // Content loaded on demand
        faqs: [
            { question: `Which is the best small business in ${city.name}?`, answer: `Currently, e-commerce fulfillment and food services are the fastest-growing sectors in ${city.name} due to rising demand for convenience.` },
            { question: `How much investment do I need for a business in ${city.name}?`, answer: `You can start with as low as ₹10,000 for service-based businesses or ₹5 Lakhs for small-scale retail or manufacturing in ${city.name}.` }
        ]
    };
});

export const getLocationArticleBySlug = (slug: string) => {
    const article = locationArticles.find(a => a.slug === slug);
    if (!article) return undefined;

    return {
        ...article,
        content: generateMassiveContent(`Business Ideas in ${article.city}`, "Location Guides", article.city, article.image, article.slug)
    };
};
