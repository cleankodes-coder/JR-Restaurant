export interface MenuItem {
  id: string;
  name: string;
  category: 'breakfast' | 'specials' | 'sizzling' | 'streetfood' | 'sides' | 'seafood' | 'drinks';
  price: number;
  promoPrice?: number;
  description?: string;
  portion?: string;
  tag?: string;
  isPopular?: boolean;
  image?: string;
}

export interface PromoItem {
  id: string;
  title: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  description: string;
  highlight?: string;
  badge?: string;
}

export interface ReviewItem {
  name: string;
  rating: number;
  review: string;
  source: string;
  highlightDish?: string;
}

export const RESTAURANT_INFO = {
  name: "JR's Restaurant",
  altNames: "JRS Restaurant / Jr's Restaurant Al-Ain",
  brandLine: "Home Grown Pinoy Business",
  signaturePositioning: "House of Special La Paz Batchoy",
  priceRange: "AED 1–200 per person",
  rating: 4.5,
  reviewCount: 214,
  saladmasterCertified: "Certified Saladmaster User Restaurant — For healthier meals, preserve nutrients and use less oil",
  
  // Exact Contact & Location
  address: "Taj Mahal St., Central District – Hai Al Salama, Al Ain, Abu Dhabi, United Arab Emirates",
  landmark: "Town Centre, opposite Al Ain Mediclinic & Choitram, Al Ain",
  plusCode: "6QF9+5C Al Ain",
  landline: "+971 3 736 0821",
  landlineTel: "+97137360821",
  whatsapp: "+971 55 182 0975",
  whatsappWaMe: "https://wa.me/971551820975",
  hours: "Open Daily • Until 12:00 AM",
  hoursDetail: "Open Daily — Closes 12:00 AM (Midnight)",
  services: ["Dine-in", "Takeaway", "Curbside Pickup", "No-contact Delivery", "400 sqm Events Venue"],
  
  // Delivery & Social
  talabatUrl: "https://www.talabat.com/uae/restaurant/640693/jrs-restaurant-hai-al-salama?aid=1308",
  deliverooUrl: "https://deliveroo.ae/restaurants/al-ain/al-ain-center/jrs-restaurant",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jr%27s+Restaurant+Al-Ain+Taj+Mahal+St+Hai+Al+Salama+Al+Ain",
  googleReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Jr%27s+Restaurant+Al-Ain+Taj+Mahal+St+Hai+Al+Salama+Al+Ain",
  
  socials: {
    facebook: {
      handle: "@jrsrestouae",
      title: "Jrs Al Ain (1K followers)",
      url: "https://www.facebook.com/jrsrestouae"
    },
    instagram: [
      { handle: "@jrsrestaurantofficial", url: "https://www.instagram.com/jrsrestaurantofficial" },
      { handle: "@jrsrestouae", url: "https://www.instagram.com/jrsrestouae" }
    ],
    tiktok: {
      handle: "@jrsrestaurantalainbranch",
      url: "https://www.tiktok.com/@jrsrestaurantalainbranch"
    }
  }
};

export const SIGNATURE_DISHES = [
  {
    id: "sig-batchoy",
    name: "Special La Paz Batchoy",
    price: 45,
    tag: "THE HOUSE SPECIALTY",
    badge: "Must-Order Dish",
    description: "Chicken or beef special noodle soup topped with meat strips, chicken chicharon, siomai, shanghai and egg, served with fluffy puto cheese.",
    details: "Originating from La Paz, Iloilo, our signature broth is simmered for hours using certified Saladmaster cookware to lock in rich bone marrow flavor with less oil.",
    image: "/images/signature_batchoy_bowl_1793705096368.jpg",
    isHero: true
  },
  {
    id: "sig-bulalo",
    name: "Bulalo",
    price: 59,
    tag: "CHEF SPECIAL",
    description: "Special beef shank soup with tender marrow bone, pechay cabbage, sweet corn cob, and rich clear aromatic beef broth.",
    image: "/images/dish_bulalo_soup_1793705120572.jpg"
  },
  {
    id: "sig-beef-sisig",
    name: "Beef Sisig",
    price: 45,
    tag: "SIZZLING FAVORITE",
    description: "Diced beef, onions, and bell pepper, topped with a fresh egg sizzling on a hot cast iron plate with calamansi citrus.",
    image: "/images/signature_sizzling_sisig_1793705098002.jpg"
  },
  {
    id: "sig-chicken-sisig",
    name: "Chicken Sisig",
    price: 39,
    tag: "POPULAR SIZZLE",
    description: "Diced chicken version of the sizzling favourite with caramelized onions, fresh chili, and topped with rich fresh egg.",
    image: "/images/signature_sizzling_sisig_1793705098002.jpg"
  },
  {
    id: "sig-kare-kare",
    name: "Beef Kare-Kare",
    price: 43,
    tag: "HERITAGE RECIPE",
    description: "Tender beef stewed in savory peanut sauce with string beans, eggplant, and bok choy, served with sautéed shrimp paste on the side.",
    image: "/images/dish_kare_kare_1793705120899.jpg"
  },
  {
    id: "sig-seafood-platter",
    name: "Mixed Seafood Platter",
    price: 149,
    originalPrice: 189,
    tag: "GOOD FOR 4–5 PERSONS",
    description: "Mussels, blue crabs, shrimps, crab balls, and sweet corn cob in Cajun garlic butter sauce with unlimited rice.",
    image: "/images/signature_seafood_platter_1793705098173.jpg"
  },
  {
    id: "sig-goto",
    name: "Goto",
    price: 35,
    tag: "COMFORT CLASSIC",
    description: "Glutinous rice, beef tripe and ginger, topped with chicken shanghai, siomai and boiled egg, served with puto cheese.",
    image: "/images/hero_filipino_feast_1793705095269.jpg"
  },
  {
    id: "sig-halo-halo",
    name: "Halo-Halo Special",
    price: 25,
    tag: "MUST-TRY DESSERT",
    badge: "Crowd Favorite",
    description: "Iconic Filipino shaved-ice dessert layered with sweet beans, ube halaya, leche flan, nata de coco, and evaporated milk.",
    image: "/images/dish_halo_halo_1793705122583.jpg"
  }
];

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'breakfast', label: 'Breakfast (Silog)' },
  { id: 'specials', label: 'Chef Specials' },
  { id: 'sizzling', label: 'Sizzling Plates' },
  { id: 'streetfood', label: 'Street Food' },
  { id: 'sides', label: 'Sides & Starters' },
  { id: 'seafood', label: 'Seafood Boils' },
  { id: 'drinks', label: 'Drinks & Milk Tea' }
] as const;

export const FULL_MENU_ITEMS: MenuItem[] = [
  // Category: Breakfast (Silog Meals)
  {
    id: 'silog-1',
    name: 'Tapsilog',
    category: 'breakfast',
    price: 29,
    description: 'Marinated beef, egg fried rice, and choice of sunny side up or scrambled egg',
    tag: 'Classic Silog'
  },
  {
    id: 'silog-2',
    name: 'Bangsilog',
    category: 'breakfast',
    price: 29,
    description: 'Fried marinated milkfish in vinegar, egg fried rice and egg',
    tag: 'Bangus Lover'
  },
  {
    id: 'silog-3',
    name: 'Relyenosilog',
    category: 'breakfast',
    price: 29,
    description: 'Deboned milkfish, flaked, stuffed and fried golden and crisp, egg fried rice and egg',
    tag: 'Signature Stuffed Fish'
  },
  {
    id: 'silog-4',
    name: 'Tocilog',
    category: 'breakfast',
    price: 28,
    description: 'Sweet savory marinated chicken breast, egg fried rice and egg',
    tag: 'Pinoy Sweet Cure'
  },

  // Category: Chef Specials
  {
    id: 'spec-1',
    name: 'Bulalo',
    category: 'specials',
    price: 59,
    description: 'Special beef shank soup, a house Chef Special with marrow bone & garden greens',
    tag: 'Chef Special',
    isPopular: true,
    image: '/images/dish_bulalo_soup_1793705120572.jpg'
  },
  {
    id: 'spec-2',
    name: 'Beef Caldereta',
    category: 'specials',
    price: 43,
    description: 'Beef ribs simmered to tenderness in spicy tomato sauce with potatoes & bell peppers',
    tag: 'Hearty Stew'
  },
  {
    id: 'spec-3',
    name: 'Kalderetang Kambing',
    category: 'specials',
    price: 45,
    description: 'Goat meat stewed in tomato sauce with bell pepper, carrots and potato',
    tag: 'Traditional Goat'
  },
  {
    id: 'spec-4',
    name: 'Beef Kare-Kare',
    category: 'specials',
    price: 43,
    description: 'Beef stewed in savory peanut sauce with vegetables, sautéed shrimp paste on the side',
    tag: 'House Special',
    image: '/images/dish_kare_kare_1793705120899.jpg'
  },
  {
    id: 'spec-5',
    name: 'Goto',
    category: 'specials',
    price: 35,
    description: 'Glutinous rice, beef tripe and ginger, topped with chicken shanghai, siomai and boiled egg, served with puto cheese',
    tag: 'Rice Porridge'
  },
  {
    id: 'spec-6',
    name: 'Arroz Caldo',
    category: 'specials',
    price: 35,
    description: 'Glutinous rice porridge in chicken broth with ginger, topped with shanghai, siomai and boiled egg, served with puto cheese',
    tag: 'Chicken Ginger Congee'
  },

  // Category: Sizzling Plates
  {
    id: 'sizz-1',
    name: 'Chicken Sisig',
    category: 'sizzling',
    price: 39,
    description: 'Diced chicken on a sizzling cast-iron platter with onions, chili & topped with egg',
    tag: 'Sizzling Platter'
  },
  {
    id: 'sizz-2',
    name: 'Beef Sisig',
    category: 'sizzling',
    price: 45,
    description: 'Diced beef, onions, bell pepper, topped with fresh egg on a sizzling plate',
    tag: 'Sizzling Favorite',
    isPopular: true,
    image: '/images/signature_sizzling_sisig_1793705098002.jpg'
  },
  {
    id: 'sizz-3',
    name: 'Sizzling Tofu',
    category: 'sizzling',
    price: 32,
    description: 'Deep-fried tofu cubes, chilli, spices, creamy mayo and sweet onion on smoking plate',
    tag: 'Vegetarian Friendly'
  },

  // Category: Street Food (served with JR's special vinegar)
  {
    id: 'street-1',
    name: 'Chicken BBQ (3 sticks)',
    category: 'streetfood',
    price: 18,
    description: 'Tender marinated chicken skewers grilled with sweet savory garlic soy glaze, served with JR special spiced vinegar',
    tag: 'Charcoal Grilled'
  },
  {
    id: 'street-2',
    name: 'Fried Chicken Proven (3 sticks)',
    category: 'streetfood',
    price: 18,
    description: 'Crispy deep-fried chicken proventriculus skewers served piping hot with signature vinegar dip',
    tag: 'Crispy Street Food'
  },
  {
    id: 'street-3',
    name: 'Grilled Chicken Isaw (3 sticks)',
    category: 'streetfood',
    price: 15,
    description: 'Authentic street-style grilled chicken intestines glazed to perfection. Served with JR special vinegar',
    tag: 'Popular on Google',
    isPopular: true,
    image: '/images/dish_street_bbq_1793705137151.jpg'
  },
  {
    id: 'street-4',
    name: 'Tokneneng (3 pcs)',
    category: 'streetfood',
    price: 15,
    description: 'Hard-boiled chicken eggs dipped in spiced orange batter and fried crisp, with special vinegar',
    tag: 'Pinoy Favorite'
  },
  {
    id: 'street-5',
    name: 'Kwek-Kwek (8 pcs)',
    category: 'streetfood',
    price: 15,
    description: 'Quail eggs coated in crunchy golden orange batter served with cucumbers and chili garlic vinegar',
    tag: '8 Pieces'
  },
  {
    id: 'street-6',
    name: 'Grilled Bangus (1 whole)',
    category: 'streetfood',
    price: 45,
    description: 'Whole milkfish stuffed with fresh tomatoes, onions and aromatics, charred over fire',
    tag: 'Whole Stuffed Fish'
  },

  // Category: Sides & Starters
  {
    id: 'side-1',
    name: 'Special La Paz Batchoy',
    category: 'sides',
    price: 45,
    description: 'Noodle soup topped with meat strips, chicken chicharon, siomai, shanghai and egg, with puto cheese',
    tag: 'House Hero',
    isPopular: true,
    image: '/images/signature_batchoy_bowl_1793705096368.jpg'
  },
  {
    id: 'side-2',
    name: 'Chicken Shanghai (10 pcs)',
    category: 'sides',
    price: 25,
    description: 'Crispy golden spring rolls filled with seasoned ground chicken and spices with sweet chili sauce',
    tag: '10 Pieces'
  },
  {
    id: 'side-3',
    name: 'Lumpiang Gulay (4 pcs)',
    category: 'sides',
    price: 20,
    description: 'Vegetable spring rolls served crisp with JR special spiced garlic vinegar',
    tag: '4 Pieces'
  },
  {
    id: 'side-4',
    name: 'Fried Tofu',
    category: 'sides',
    price: 20,
    description: 'Crisp fried tofu blocks served with soy vinegar dipping sauce and fresh scallions',
    tag: 'Starter'
  },
  {
    id: 'side-5',
    name: 'Cajun Crab Balls (10 pcs)',
    category: 'sides',
    price: 35,
    description: 'Spiced seafood crab balls seasoned with savory Cajun spices and dipping sauce',
    tag: '10 Pieces'
  },

  // Category: Seafood
  {
    id: 'sea-1',
    name: 'Mixed Seafood — Good for 4–5 persons (1kg)',
    category: 'seafood',
    price: 149,
    promoPrice: 149,
    portion: '1kg • Good for 4–5 pax',
    description: 'Was AED 189! Mussels, blue crabs, tiger shrimps, crab balls, sweet corn cob in Cajun butter with unlimited rice',
    tag: 'Promo AED 149 (was AED 189)',
    isPopular: true,
    image: '/images/signature_seafood_platter_1793705098173.jpg'
  },
  {
    id: 'sea-2',
    name: 'Mixed Seafood — Good for 2 persons (1/2kg)',
    category: 'seafood',
    price: 85,
    promoPrice: 85,
    portion: '1/2kg • Good for 2 pax',
    description: 'Was AED 105! Juicy shrimps, mussels, crabs, corn cob and unlimited rice in house Cajun sauce',
    tag: 'Promo AED 85 (was AED 105)'
  },
  {
    id: 'sea-3',
    name: "Fisherman's Choice: Shrimps",
    category: 'seafood',
    price: 80,
    description: 'Generous portion of succulent shrimps with rice and choice of iced tea or mojito',
    tag: 'Includes Drink & Rice'
  },
  {
    id: 'sea-4',
    name: "Fisherman's Choice: Mussels",
    category: 'seafood',
    price: 75,
    description: 'Fresh plump mussels cooked in savory butter garlic sauce with rice and choice of iced tea or mojito',
    tag: 'Includes Drink & Rice'
  },
  {
    id: 'sea-5',
    name: "Fisherman's Choice: Crabs",
    category: 'seafood',
    price: 65,
    description: 'Fresh whole crabs simmered in sauce, served with rice and choice of iced tea or mojito',
    tag: 'Includes Drink & Rice'
  },

  // Category: Signature Drinks & Milk Tea
  {
    id: 'drink-1',
    name: 'Bluecurrant Milk Tea',
    category: 'drinks',
    price: 18,
    description: 'Refreshing fruity bluecurrant infused milk tea with chewy tapioca pearls',
    tag: 'Signature'
  },
  {
    id: 'drink-2',
    name: 'Winter Melon Milk Tea',
    category: 'drinks',
    price: 18,
    description: 'Classic roasted winter melon brown sugar milk tea with pearls',
    tag: 'Best Seller'
  },
  {
    id: 'drink-3',
    name: 'Matcha Milk Tea',
    category: 'drinks',
    price: 18,
    description: 'Premium Japanese green matcha infused creamy milk tea',
    tag: 'Matcha'
  },
  {
    id: 'drink-4',
    name: 'House Iced Tea',
    category: 'drinks',
    price: 20,
    description: 'Freshly brewed Pinoy restaurant style sweet citrus iced tea',
    tag: 'Refreshing'
  },
  {
    id: 'drink-5',
    name: 'Strawberry Mojito',
    category: 'drinks',
    price: 25,
    description: 'Muddled fresh strawberries, mint leaves, lime and sparkling soda',
    tag: 'Mocktail'
  },
  {
    id: 'drink-6',
    name: 'Passion Fruit Mojito',
    category: 'drinks',
    price: 25,
    description: 'Tangy tropical passion fruit pulp, mint, crushed ice, and lime fizz',
    tag: 'Tropical'
  },
  {
    id: 'drink-7',
    name: 'Classic Mint Mojito',
    category: 'drinks',
    price: 25,
    description: 'Crisp garden mint, fresh lime slices, brown cane sugar, and sparkling soda',
    tag: 'Classic'
  }
];

export const PROMO_BUNDLES: PromoItem[] = [
  {
    id: 'promo-veg',
    title: 'Vegetable Bundle Promo',
    tagline: 'Eat Healthy!',
    price: 32,
    description: '1 vegetable dish + 1 cut golden fried milkfish + 1 steamed rice + 1 chilled soda.',
    highlight: 'Nutritious Saladmaster cooked vegetables with crispy bangus',
    badge: 'Healthy Choice'
  },
  {
    id: 'promo-noodles',
    title: 'Noodles + Fried Chicken Bundle',
    tagline: 'Pinoy Comfort Combo',
    price: 28,
    description: 'Choice of Pancit Guisado (Bihon or Canton), Pancit Malabon, Spaghetti or Carbonara + 1 pc fried chicken. (Add AED 2 for an extra chicken piece!)',
    highlight: 'Generous noodles with crispy fried chicken',
    badge: 'Value Combo'
  },
  {
    id: 'promo-barkada-5',
    title: 'Barkada Meal — 5 Pax',
    tagline: 'Great for Small Groups & Families',
    price: 99,
    description: 'A feast crafted for 5 persons from only AED 99. Packed with Filipino favourites, rice, and sides for the whole barkada.',
    highlight: 'Under AED 20 per person!',
    badge: 'Barkada Favorite'
  },
  {
    id: 'promo-bm1',
    title: 'Barkada Meal BM1 (6–8 Pax)',
    tagline: 'Grand Barkada Sharing Feast',
    price: 329,
    originalPrice: 359,
    description: 'Good for 6 to 8 persons! An enormous sharing spread with sizzling plates, stews, crispy appetisers, plenty of rice, and drinks.',
    highlight: 'Save AED 30 on this massive celebration feast',
    badge: 'Popular Feast'
  },
  {
    id: 'promo-bm2',
    title: 'Barkada Meal BM2 (10–12 Pax)',
    tagline: 'Ultimate Family & Party Spread',
    price: 429,
    originalPrice: 459,
    description: 'Good for 10 to 12 persons! The centerpiece banquet with seafood, sizzling meats, traditional stews, and all your Pinoy favourites.',
    highlight: 'Save AED 30 • Ideal for birthdays & celebrations',
    badge: 'Mega Banquet'
  },
  {
    id: 'promo-weekend',
    title: 'Weekend Unlimited Iced Tea',
    tagline: 'Saturday & Sunday Special',
    price: 40,
    description: 'Order food worth AED 40 or more, and enjoy UNLIMITED Iced Tea throughout your meal!',
    highlight: 'Available every Saturday & Sunday dine-in',
    badge: 'Weekend Only'
  },
  {
    id: 'promo-wings',
    title: 'Honey Glazed Wings Bundle',
    tagline: 'Perfect for 2 Persons',
    price: 45,
    description: 'Crispy honey glazed chicken lollipop or wings bundle, served with steaming rice and refreshing iced tea for two.',
    highlight: 'Sweet & savory glazed perfection',
    badge: 'Duo Special'
  },
  {
    id: 'promo-milktea',
    title: 'Milk Tea Promo — Buy 2 Take 1',
    tagline: 'Summer Refreshment Promo',
    price: 10,
    description: 'Enjoy refreshing milk teas starting from AED 10! Buy 2 cups and get 1 free during our special promotional hours.',
    highlight: 'Tapioca pearls included',
    badge: 'Buy 2 Take 1'
  }
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    name: 'Oni R.',
    rating: 5,
    review: 'My family loves the chilled atmosphere at JR\'s. The Chicken Biryani with pine nuts, cashew nuts, crispy onions and sultana is excellent and unique — more delicious and tastier than any other I have tasted.',
    source: 'Google Review',
    highlightDish: 'Chicken Biryani & Ambiance'
  },
  {
    name: 'Pearl A.',
    rating: 5,
    review: 'I stumbled upon JR\'s by chance and was surprised. It\'s rare to find Filipino food that\'s truly worth recommending and revisiting — every dish we tried was delicious and definitely worth the price.',
    source: 'Google Review',
    highlightDish: 'Authentic Filipino Taste'
  },
  {
    name: 'Brandel D.',
    rating: 5,
    review: 'The place, food taste, serving and customer service is excellent.',
    source: 'Google Review',
    highlightDish: 'Service & Generous Portions'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Special La Paz Batchoy with Puto Cheese',
    category: 'Signature',
    image: '/images/signature_batchoy_bowl_1793705096368.jpg',
    caption: 'Our crown jewel: homemade noodles, rich bone marrow broth, chicharon and steamed puto cheese'
  },
  {
    id: 'gal-2',
    title: 'Sizzling Beef Sisig',
    category: 'Sizzling',
    image: '/images/signature_sizzling_sisig_1793705098002.jpg',
    caption: 'Fresh from the sizzling plate, topped with golden egg and calamansi'
  },
  {
    id: 'gal-3',
    title: 'Mixed Seafood Boil Platter',
    category: 'Seafood',
    image: '/images/signature_seafood_platter_1793705098173.jpg',
    caption: 'Blue crabs, giant prawns, mussels, and sweet corn in Cajun garlic butter'
  },
  {
    id: 'gal-4',
    title: 'Hearty Bulalo Beef Shank Soup',
    category: 'Special',
    image: '/images/dish_bulalo_soup_1793705120572.jpg',
    caption: 'Simmered slow for rich marrow broth and fall-apart tender beef'
  },
  {
    id: 'gal-5',
    title: 'Traditional Beef Kare-Kare',
    category: 'Heritage',
    image: '/images/dish_kare_kare_1793705120899.jpg',
    caption: 'Rich peanut sauce with tender beef, eggplant, green beans and sautéed bagoong'
  },
  {
    id: 'gal-6',
    title: 'Filipino Street Food BBQ & Isaw',
    category: 'Street Food',
    image: '/images/dish_street_bbq_1793705137151.jpg',
    caption: 'Charcoal grilled skewers with JR\'s signature chili-garlic vinegar'
  },
  {
    id: 'gal-7',
    title: 'Grand 400 sqm Events Venue',
    category: 'Venue',
    image: '/images/events_venue_hall_1793705098431.jpg',
    caption: 'A 400 sqm dedicated event hall in Central District for birthdays, weddings, & gatherings'
  },
  {
    id: 'gal-8',
    title: 'Iconic Halo-Halo Special',
    category: 'Dessert',
    image: '/images/dish_halo_halo_1793705122583.jpg',
    caption: 'Layers of sweet ingredients topped with ube ice cream and golden leche flan'
  }
];

export const SEARCH_KEYWORDS = [
  'Filipino Food',
  'Special La Paz Batchoy',
  'Kare-Kare',
  'Bulalo',
  'Chicken Inasal',
  'Sizzling Sisig',
  'Barkada Platter',
  'Saladmaster Healthy',
  'Events Hall Al Ain'
];
