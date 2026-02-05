export interface LocationAgency {
    id: string;
    slug: string;
    city: string;
    state: string;
    usp: string;
    serviceFocus: string[];
    description: string;
}

export const locationAgencies: LocationAgency[] = [
    {
        id: '1',
        slug: 'mumbai',
        city: 'Mumbai',
        state: 'Maharashtra',
        usp: 'High-Scale Analytics for Finance Hubs',
        serviceFocus: ['Financial Services Marketing', 'Corporate Branding', 'Enterprise Link Management'],
        description: 'Specialized digital marketing solutions for businesses in India\'s financial capital. We help Mumbai agencies track multi-million dollar campaigns with precision.'
    },
    {
        id: '2',
        slug: 'delhi',
        city: 'Delhi',
        state: 'Delhi NCR',
        usp: 'Government & SME Campaign Experts',
        serviceFocus: ['Public Relations Digital Support', 'SME Growth Strategies', 'Political Campaign Tracking'],
        description: 'Strategic link management and Get in Touch services for the heart of the nation. Connecting businesses from Chandni Chowk to South Delhi.'
    },
    {
        id: '3',
        slug: 'bangalore',
        city: 'Bangalore',
        state: 'Karnataka',
        usp: 'Tech-Driven Marketing Automation',
        serviceFocus: ['SaaS Growth Marketing', 'Tech Startup SEO', 'Automated Campaign Reporting'],
        description: 'The premier choice for tech startups in India\'s Silicon Valley. Our automation-first approach ensures Bangalore startups scale faster.'
    },
    {
        id: '4',
        slug: 'hyderabad',
        city: 'Hyderabad',
        state: 'Telangana',
        usp: 'Pharma & IT Digital Excellence',
        serviceFocus: ['Healthcare Digital Marketing', 'B2B IT Lead Generation', 'Custom Branded Domains'],
        description: 'Reliable and secure link management for Hyderabad\'s pharmaceutical and IT sectors. Building trust through branded connections.'
    },
    {
        id: '5',
        slug: 'chennai',
        city: 'Chennai',
        state: 'Tamil Nadu',
        usp: 'Automobile & Industrial Digital Strategy',
        serviceFocus: ['Industrial Branding', 'Export Marketing Tools', 'Deep Data Analytics'],
        description: 'Leveraging digital tools for Chennai\'s manufacturing and automobile giants. Track global campaigns from the Detroit of Asia.'
    },
    {
        id: '6',
        slug: 'kolkata',
        city: 'Kolkata',
        state: 'West Bengal',
        usp: 'Creative Content & Heritage Branding',
        serviceFocus: ['Influencer Marketing', 'E-commerce for Artisans', 'Social Media Storytelling'],
        description: 'Blending tradition with technology. We help Kolkata businesses tell their story to a global audience with trackable creative campaigns.'
    },
    {
        id: '7',
        slug: 'pune',
        city: 'Pune',
        state: 'Maharashtra',
        usp: 'Education & Manufacturing Marketing',
        serviceFocus: ['Education Portal SEO', 'Quality Lead Gen for SME', 'Link Analytics for Training'],
        description: 'Empowering the Oxford of the East with smart digital infrastructure. Helping Pune\'s education hubs manage enquiries effectively.'
    },
    {
        id: '8',
        slug: 'ahmedabad',
        city: 'Ahmedabad',
        state: 'Gujarat',
        usp: 'Textile & Retail Digital Growth',
        serviceFocus: ['Direct-to-Consumer (D2C) Launch', 'Retail Footfall Analytics', 'Bulk Link Management'],
        description: 'Scaling Ahmedabad\'s vibrant retail and textile businesses. Convert local successes into national e-commerce brands.'
    },
    {
        id: '9',
        slug: 'jaipur',
        city: 'Jaipur',
        state: 'Rajasthan',
        usp: 'Tourism & Jewelry E-commerce',
        serviceFocus: ['Luxury Brand Management', 'Tourism Traffic Analytics', 'Branded Visual Links'],
        description: 'Modernizing Jaipur\'s traditional industries. Showcasing Rajasthan\'s heritage through precise digital marketing and tracking.'
    },
    {
        id: '10',
        slug: 'lucknow',
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        usp: 'Real Estate & Hospitality Focus',
        serviceFocus: ['Real Estate Lead Management', 'Hospitality CRM Integration', 'Get in Touch Tools'],
        description: 'Providing premium digital support for Lucknow\'s growing real estate and hospitality sectors. Tracking growth in the City of Nawabs.'
    }
    // ... adding more locations following the same pattern
];

// Combine with names from blogData to ensure all 30 are covered
export const getAllLocationSlugs = () => {
    return [
        'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad', 'jaipur', 'lucknow',
        'surat', 'kanpur', 'nagpur', 'indore', 'thane', 'bhopal', 'visakhapatnam', 'patna', 'vadodara', 'ghaziabad',
        'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'varanasi', 'coimbatore', 'chandigarh', 'kochi'
    ];
};

export const getLocationData = (slug: string): LocationAgency | undefined => {
    const data = locationAgencies.find(loc => loc.slug === slug);
    if (data) return data;

    // Fallback for demo purposes
    return {
        id: slug,
        slug: slug,
        city: slug.charAt(0).toUpperCase() + slug.slice(1),
        state: 'India',
        usp: 'Premium Digital Marketing & Link Management',
        serviceFocus: ['Advanced SEO', 'Campaign Tracking', 'Custom Branding'],
        description: `Targeted digital growth strategies for businesses in ${slug.charAt(0).toUpperCase() + slug.slice(1)}. Leverage professional link management to scale your local reach.`
    };
};
