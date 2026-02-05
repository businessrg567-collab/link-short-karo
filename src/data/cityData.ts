export interface CityData {
    name: string;
    slug: string;
    state: string;
    description: string;
    industries: string[];
    landmarks: string[];
    postalCode: string;
    stdCode: string;
}

export const indianCities: CityData[] = [
    {
        name: 'Mumbai',
        slug: 'mumbai',
        state: 'Maharashtra',
        description: 'The financial capital of India and a hub for entertainment, finance, and technology.',
        industries: ['Finance', 'Entertainment (Bollywood)', 'Information Technology', 'Textiles', 'Import-Export'],
        landmarks: ['Gateway of India', 'Marine Drive', 'Bandra-Worli Sea Link', 'Chhatrapati Shivaji Maharaj Terminus'],
        postalCode: '400001',
        stdCode: '022'
    },
    {
        name: 'Delhi',
        slug: 'delhi',
        state: 'Delhi',
        description: 'The capital city known for its rich history, political significance, and booming startup ecosystem.',
        industries: ['Politics & Governance', 'Startups & Tech', 'Tourism', 'Retail', 'Real Estate'],
        landmarks: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple'],
        postalCode: '110001',
        stdCode: '011'
    },
    {
        name: 'Bangalore',
        slug: 'bangalore',
        state: 'Karnataka',
        description: 'The Silicon Valley of India, home to the largest number of tech startups and IT giants.',
        industries: ['Information Technology', 'Biotechnology', 'Aerospace', 'Startups', 'Education'],
        landmarks: ['Vidhana Soudha', 'Lalbagh Botanical Garden', 'Bangalore Palace', 'Cubbon Park'],
        postalCode: '560001',
        stdCode: '080'
    },
    {
        name: 'Hyderabad',
        slug: 'hyderabad',
        state: 'Telangana',
        description: 'A major center for the technology industry, also known for its history and cuisine.',
        industries: ['Information Technology', 'Pharmaceuticals', 'Biotechnology', 'Pearls & Jewelry'],
        landmarks: ['Charminar', 'Golconda Fort', 'Ramoji Film City', 'Hussain Sagar Lake'],
        postalCode: '500001',
        stdCode: '040'
    },
    {
        name: 'Chennai',
        slug: 'chennai',
        state: 'Tamil Nadu',
        description: 'The Detroit of India, a major hub for automotive manufacturing and software services.',
        industries: ['Automotive', 'Software Services', 'Healthcare', 'Hardware Manufacturing'],
        landmarks: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'Guindy National Park'],
        postalCode: '600001',
        stdCode: '044'
    },
    {
        name: 'Kolkata',
        slug: 'kolkata',
        state: 'West Bengal',
        description: 'The cultural capital of India, known for its literature, arts, and colonial architecture.',
        industries: ['IT & ITeS', 'Mining & Minerals', 'Jute & Textiles', 'Finance'],
        landmarks: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Indian Museum'],
        postalCode: '700001',
        stdCode: '033'
    },
    {
        name: 'Pune',
        slug: 'pune',
        state: 'Maharashtra',
        description: 'The Oxford of the East, a vibrant city known for education, manufacturing, and IT.',
        industries: ['Education', 'Automotive', 'Information Technology', 'Manufacturing'],
        landmarks: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Osho Ashram'],
        postalCode: '411001',
        stdCode: '020'
    },
    {
        name: 'Ahmedabad',
        slug: 'ahmedabad',
        state: 'Gujarat',
        description: 'A growing industrial and educational hub with a rich heritage in textiles.',
        industries: ['Textiles', 'Chemicals', 'Pharmaceuticals', 'Automobile'],
        landmarks: ['Sabarmati Ashram', 'Kankaria Lake', 'Adalaj Stepwell', 'Sidi Saiyyed Mosque'],
        postalCode: '380001',
        stdCode: '079'
    },
    {
        name: 'Jaipur',
        slug: 'jaipur',
        state: 'Rajasthan',
        description: 'The Pink City, a major tourist destination known for its royals, palaces, and gems.',
        industries: ['Tourism', 'Gems & Jewelry', 'Textiles', 'Handicrafts'],
        landmarks: ['Hawa Mahal', 'Amber Fort', 'City Palace', 'Jantar Mantar'],
        postalCode: '302001',
        stdCode: '0141'
    },
    {
        name: 'Lucknow',
        slug: 'lucknow',
        state: 'Uttar Pradesh',
        description: 'The City of Nawabs, famous for its culture, food, and emerging IT sector.',
        industries: ['IT & ITeS', 'Food Processing', 'Handicrafts (Chikankari)', 'Manufacturing'],
        landmarks: ['Bara Imambara', 'Rumi Darwaza', 'The Residency', 'Ambedkar Memorial Park'],
        postalCode: '226001',
        stdCode: '0522'
    },
    {
        name: 'Surat',
        slug: 'surat',
        state: 'Gujarat',
        description: 'The Diamond City of the World and a major textile hub.',
        industries: ['Diamonds & Gems', 'Textiles', 'Petrochemicals'],
        landmarks: ['Dumas Beach', 'Dutch Garden', 'Sardar Patel Museum', 'Surat Castle'],
        postalCode: '395001',
        stdCode: '0261'
    },
    {
        name: 'Kanpur',
        slug: 'kanpur',
        state: 'Uttar Pradesh',
        description: 'A major industrial city known for its leather and textile industries.',
        industries: ['Leather', 'Textiles', 'Chemicals', 'Engineering'],
        landmarks: ['Allen Forest Zoo', 'JK Temple', 'Moti Jheel', 'Z Square Mall'],
        postalCode: '208001',
        stdCode: '0512'
    },
    {
        name: 'Nagpur',
        slug: 'nagpur',
        state: 'Maharashtra',
        description: 'The Orange City and the geographical center of India.',
        industries: ['Logistics', 'Agriculture (Oranges)', 'Mining', 'IT'],
        landmarks: ['Deekshabhoomi', 'Ambazari Lake', 'Zero Mile Stone', 'Futala Lake'],
        postalCode: '440001',
        stdCode: '0712'
    },
    {
        name: 'Indore',
        slug: 'indore',
        state: 'Madhya Pradesh',
        description: 'The cleanest city in India and a commercial hub of MP.',
        industries: ['Automobile', 'Pharmaceuticals', 'Software', 'Food'],
        landmarks: ['Rajwada Palace', 'Lal Bagh Palace', 'Khajrana Ganesh Temple', 'Sarafa Bazaar'],
        postalCode: '452001',
        stdCode: '0731'
    },
    {
        name: 'Thane',
        slug: 'thane',
        state: 'Maharashtra',
        description: 'The City of Lakes, a prominent residential and commercial suburb of Mumbai.',
        industries: ['Service Sector', 'Retail', 'Real Estate', 'Logistics'],
        landmarks: ['Upvan Lake', 'Talao Pali', 'Yeoor Hills', 'Korum Mall'],
        postalCode: '400601',
        stdCode: '022'
    },
    {
        name: 'Bhopal',
        slug: 'bhopal',
        state: 'Madhya Pradesh',
        description: 'The City of Lakes, known for its greenery and historical significance.',
        industries: ['Electrical Engineering', 'Medicinal Plants', 'Cotton & Chemicals'],
        landmarks: ['Upper Lake', 'Van Vihar National Park', 'Sanchi Stupa', 'Taj-ul-Masajid'],
        postalCode: '462001',
        stdCode: '0755'
    },
    {
        name: 'Visakhapatnam',
        slug: 'visakhapatnam',
        state: 'Andhra Pradesh',
        description: 'Vizag, a port city known for its beautiful beaches and naval base.',
        industries: ['Steel', 'Petroleum', 'Information Technology', 'Tourism'],
        landmarks: ['RK Beach', 'INS Kursura Submarine Museum', 'Kailasagiri', 'Araku Valley'],
        postalCode: '530001',
        stdCode: '0891'
    },
    {
        name: 'Patna',
        slug: 'patna',
        state: 'Bihar',
        description: 'One of the oldest continuously inhabited places in the world.',
        industries: ['Agriculture', 'Trade', 'FMCG', 'Education'],
        landmarks: ['Golghar', 'Patna Sahib Gurudwara', 'Bihar Museum', 'Eco Park'],
        postalCode: '800001',
        stdCode: '0612'
    },
    {
        name: 'Vadodara',
        slug: 'vadodara',
        state: 'Gujarat',
        description: 'The cultural capital of Gujarat, known for its palaces and universities.',
        industries: ['Chemicals', 'Pharmaceuticals', 'Engineering', 'Education'],
        landmarks: ['Laxmi Vilas Palace', 'Sayaji Baug', 'Vadodara Museum', 'EME Temple'],
        postalCode: '390001',
        stdCode: '0265'
    },
    {
        name: 'Ghaziabad',
        slug: 'ghaziabad',
        state: 'Uttar Pradesh',
        description: 'The Gateway of UP, a major industrial and residential city in NCR.',
        industries: ['Steel', 'Manufacturing', 'Real Estate', 'Education'],
        landmarks: ['City Forest', 'Swarna Jayanti Park', 'ISKCON Temple', 'Mohan Nagar'],
        postalCode: '201001',
        stdCode: '0120'
    },
    {
        name: 'Ludhiana',
        slug: 'ludhiana',
        state: 'Punjab',
        description: 'The Manchester of India, famous for its hosiery and cycle industries.',
        industries: ['Hosiery', 'Textile', 'Bicycles', 'Auto Parts'],
        landmarks: ['Punjab Agricultural University Museum', 'Gurudwara Charan Kamal', 'Nehru Rose Garden'],
        postalCode: '141001',
        stdCode: '0161'
    },
    {
        name: 'Agra',
        slug: 'agra',
        state: 'Uttar Pradesh',
        description: 'Home to the Taj Mahal and a major tourist destination.',
        industries: ['Tourism', 'Leather', 'Handicrafts', 'Marble Inlay Work'],
        landmarks: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh'],
        postalCode: '282001',
        stdCode: '0562'
    },
    {
        name: 'Nashik',
        slug: 'nashik',
        state: 'Maharashtra',
        description: 'The Wine Capital of India and a holy city on the banks of Godavari.',
        industries: ['Wine & Agriculture', 'Automobile', 'Engineering', 'Tourism'],
        landmarks: ['Sula Vineyards', 'Trimbakeshwar Temple', 'Pandavleni Caves', 'Panchvati'],
        postalCode: '422001',
        stdCode: '0253'
    },
    {
        name: 'Faridabad',
        slug: 'faridabad',
        state: 'Haryana',
        description: 'The industrial capital of Haryana, adjacent to Delhi.',
        industries: ['Manufacturing', 'Automobile', 'Home Appliances', 'Real Estate'],
        landmarks: ['Badkhal Lake', 'Surajkund', 'Raja Nahar Singh Palace'],
        postalCode: '121001',
        stdCode: '0129'
    },
    {
        name: 'Meerut',
        slug: 'meerut',
        state: 'Uttar Pradesh',
        description: 'A sports goods manufacturing hub and a historical city.',
        industries: ['Sports Goods', 'Music Instruments', 'Gold', 'Education'],
        landmarks: ['Augarnath Temple', 'Gandhi Bagh', 'St. John\'s Church'],
        postalCode: '250001',
        stdCode: '0121'
    },
    {
        name: 'Rajkot',
        slug: 'rajkot',
        state: 'Gujarat',
        description: 'A major industrial center known for its casting and jewelry industries.',
        industries: ['Jewelry', 'Silk', 'Watch Parts', 'Auto Parts'],
        landmarks: ['Watson Museum', 'Kaba Gandhi No Delo', 'Aji Dam', 'Pradhyuman Zoological Park'],
        postalCode: '360001',
        stdCode: '0281'
    },
    {
        name: 'Varanasi',
        slug: 'varanasi',
        state: 'Uttar Pradesh',
        description: 'The spiritual capital of India, one of the oldest living cities.',
        industries: ['Tourism', 'Silk Weaving', 'Education', 'Handicrafts'],
        landmarks: ['Kashi Vishwanath Temple', 'Ganga Ghats', 'Sarnath', 'Ramnagar Fort'],
        postalCode: '221001',
        stdCode: '0542'
    },
    {
        name: 'Coimbatore',
        slug: 'coimbatore',
        state: 'Tamil Nadu',
        description: 'The Manchester of South India, known for textiles and engineering.',
        industries: ['Textiles', 'Engineering', 'Auto Components', 'Information Technology'],
        landmarks: ['Marudamalai Temple', 'Siruvani Waterfalls', 'Black Thunder', 'VOC Park'],
        postalCode: '641001',
        stdCode: '0422'
    },
    {
        name: 'Chandigarh',
        slug: 'chandigarh',
        state: 'Chandigarh',
        description: 'The first planned city of India, capital of both Punjab and Haryana.',
        industries: ['Government', 'Education', 'IT', 'Tourism'],
        landmarks: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Capitol Complex'],
        postalCode: '160001',
        stdCode: '0172'
    },
    {
        name: 'Kochi',
        slug: 'kochi',
        state: 'Kerala',
        description: 'The Queen of the Arabian Sea, a major port city.',
        industries: ['Tourism', 'Shipping', 'Seafood', 'IT'],
        landmarks: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Marine Drive'],
        postalCode: '682001',
        stdCode: '0484'
    }
];
