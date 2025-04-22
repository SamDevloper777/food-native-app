import { kitchenProfileCategory } from "@/utils/types";
export const offersConstants = [
    {
        id: 1,
        kitchenId: 101,
        title: "50% off upto Rs.100 - Kitchen 101",
        code: "STARBUCKS50",
    },
    {
        id: 2,
        kitchenId: 101,
        title: "10% off - Kitchen 101",
        code: "STARBUCKS10",
    },
    {
        id: 3,
        kitchenId: 102,
        title: "20% off on orders above Rs.200 - Kitchen 102",
        code: "CAFE20",
    },
    {
        id: 4,
        kitchenId: 102,
        title: "Free dessert on orders above Rs.500 - Kitchen 102",
        code: "DESSERTFREE",
    },
    {
        id: 5,
        kitchenId: 103,
        title: "Flat Rs.50 off - Kitchen 103",
        code: "FLAT50",
    },
    {
        id: 6,
        kitchenId: 103,
        title: "Buy 1 Get 1 Free - Kitchen 103",
        code: "BOGO",
    },
    {
        id: 7,
        kitchenId: 104,
        title: "15% off on all orders - Kitchen 104",
        code: "SAVE15",
    },
    {
        id: 8,
        kitchenId: 104,
        title: "Free delivery on first order - Kitchen 104",
        code: "FREEDEL",
    },
    {
        id: 9,
        kitchenId: 105,
        title: "10% cashback - Kitchen 105",
        code: "CASHBACK10",
    },
    {
        id: 10,
        kitchenId: 105,
        title: "Rs.100 off on orders above Rs.1000 - Kitchen 105",
        code: "SAVE100",
    },
];

export const categories: kitchenProfileCategory[] = ["All Thalis", "Vegetarian", "Specials"];

export const thalis = [
    {
        "id": 1011,
        "kitchenId": 101,
        "title": "Paneer Tikka Masala",
        "rating": "4.8",
        "time": "35 min",
        "type": "veg",
        "special": true,
        "url": "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2080&auto=format&fit=crop",
        "description": "Spicy paneer tikka in a creamy tomato-based gravy.",
        "mainCourse": [
            {
                "title": "Naan",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1250225999/photo/indian-naan-bread.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Jeera Rice",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1159967350/photo/jeera-rice.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Dal Tadka",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/95977300/photo/many-lentil-daal.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Hara Bhara Kabab",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105146/photo/hara-bhara-kabab.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Veg Spring Roll",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/1216582528/photo/spring-rolls.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Rasmalai",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1337213310/photo/rasmalai.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Jalebi",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1337213308/photo/jalebi.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1012,
        "kitchenId": 101,
        "title": "Chicken Korma",
        "rating": "4.7",
        "time": "40 min",
        "type": "non-veg",
        "special": false,
        "url": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2080&auto=format&fit=crop",
        "description": "Tender chicken in a creamy cashew-based sauce.",
        "mainCourse": [
            {
                "title": "Butter Naan",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1250226000/photo/butter-naan.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Pulao",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1173266401/photo/rice-cooked-rice-steamed-rice-on-bowl.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Aloo Matar",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1328914049/photo/aloo-matar.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Chicken Tikka",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334104008/photo/chicken-tikka.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Onion Bhaji",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/2153419000/photo/onion-bhaji.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Gulab Jamun",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1337213309/photo/gulab-jamun.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Kulfi",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105148/photo/kulfi.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1021,
        "kitchenId": 102,
        "title": "Vegetable Biryani",
        "rating": "4.6",
        "time": "45 min",
        "type": "veg",
        "special": false,
        "url": "https://images.unsplash.com/photo-1567189718280-8863ae2973fd?q=80&w=2080&auto=format&fit=crop",
        "description": "Fragrant basmati rice with mixed vegetables and spices.",
        "mainCourse": [
            {
                "title": "Raita",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/1334105150/photo/raita.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Palak Paneer",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105152/photo/palak-paneer.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Chole Masala",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105151/photo/chole-masala.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Garlic Naan",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1250226001/photo/garlic-naan.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Veg Manchurian",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105155/photo/veg-manchurian.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Paneer Pakora",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105162/photo/paneer-pakora.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Samosa",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1317460663/photo/close-up-of-fried-food-on-table-west-chester-pennsylvania-united-states-usa.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Mango Lassi",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105156/photo/mango-lassi.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Barfi",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105157/photo/barfi.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Pista Kulfi",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105148/photo/kulfi.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1031,
        "kitchenId": 103,
        "title": "Rogan Josh",
        "rating": "4.6",
        "time": "45 min",
        "type": "non-veg",
        "special": true,
        "url": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2080&auto=format&fit=crop",
        "description": "Aromatic lamb curry with Kashmiri spices.",
        "mainCourse": [
            {
                "title": "Plain Rice",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1173266401/photo/rice-cooked-rice-steamed-rice-on-bowl.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Bhindi Masala",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105158/photo/bhindi-masala.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Matar Paneer",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105159/photo/matar-paneer.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Seekh Kebab",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105160/photo/seekh-kebab.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Fish Amritsari",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1334105161/photo/fish-amritsari.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Kheer",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1308121408/photo/kheer-indian-rice-pudding-india-dessert-food.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Rasgulla",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1369633008/photo/rasgulla.jpg?s=612x612&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1032,
        "kitchenId": 103,
        "title": "Malai Kofta",
        "rating": "4.7",
        "time": "40 min",
        "type": "veg",
        "special": true,
        "url": "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2080&auto=format&fit=crop",
        "description": "Soft paneer dumplings in a rich creamy sauce.",
        "mainCourse": [
            {
                "title": "Tandoori Roti",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334104847/photo/homemade-indian-roti-or-chapati-indian-bread.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Dal Makhani",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105168/photo/dal-makhani.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Mix Veg",
                "cost": "12.00",
                "url": "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/08/Easy-Mix-Vegetables-EOP.jpg?resize=1024%2C683&ssl=1"
            }
        ],
        "starters": [
            {
                "title": "Aloo Tikki",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105145/photo/pindi-chole-curry-served-hot-in-a-bowl-with-other-food-items.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Veg Pakora",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/2153418999/photo/vegetable-pakoda.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Coconut Ladoo",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105163/photo/coconut-ladoo.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Shahi Tukda",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105164/photo/shahi-tukda.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1033,
        "kitchenId": 103,
        "title": "Fish Curry",
        "rating": "4.5",
        "time": "50 min",
        "type": "non-veg",
        "special": false,
        "url": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2080&auto=format&fit=crop",
        "description": "Spicy fish curry with coastal flavors.",
        "mainCourse": [
            {
                "title": "Steamed Rice",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1173266401/photo/rice-cooked-rice-steamed-rice-on-bowl.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Aloo Gobi",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1328914049/photo/aloo-gobi.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Rajma",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105151/photo/rajma.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Prawn Fry",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1334105154/photo/prawn-fry.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Dahi Vada",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105147/photo/dahi-vada.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Jalebi",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1337213308/photo/jalebi.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Rasmalai",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1337213310/photo/rasmalai.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1041,
        "kitchenId": 104,
        "title": "Butter Chicken",
        "rating": "4.7",
        "time": "40 min",
        "type": "non-veg",
        "special": false,
        "url": "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Creamy butter chicken with a rich sauce.",
        "mainCourse": [
            {
                "title": "Rice",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1173266401/photo/rice-cooked-rice-steamed-rice-on-bowl.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Dal",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/95977300/photo/many-lentil-daal.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Roti",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334104847/photo/homemade-indian-roti-or-chapati-indian-bread.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Mix Veg",
                "cost": "13.00",
                "url": "https://i0.wp.com/www.blissofcooking.com/wp-content/uploads/2020/08/Easy-Mix-Vegetables-EOP.jpg?resize=1024%2C683&ssl=1"
            }
        ],
        "starters": [
            {
                "title": "Samosa",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1317460663/photo/close-up-of-fried-food-on-table-west-chester-pennsylvania-united-states-usa.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Pakora",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/2153418999/photo/vegetable-pakoda.webp?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Aloo Tikki",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105145/photo/pindi-chole-curry-served-hot-in-a-bowl-with-other-food-items.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Gulab Jamun",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1337213309/photo/gulab-jamun.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Kheer",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/1308121408/photo/kheer-indian-rice-pudding-india-dessert-food.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Ice Cream",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1042,
        "kitchenId": 104,
        "title": "Shahi Paneer",
        "rating": "4.8",
        "time": "35 min",
        "type": "veg",
        "special": true,
        "url": "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2080&auto=format&fit=crop",
        "description": "Paneer in a rich, royal creamy sauce with nuts.",
        "mainCourse": [
            {
                "title": "Laccha Paratha",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334104847/photo/homemade-indian-roti-or-chapati-indian-bread.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Jeera Rice",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1159967350/photo/jeera-rice.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Chana Masala",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105151/photo/chole-masala.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Paneer Tikka",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1334104009/photo/paneer-tikka-with-mint-chutney-and-onion-rings.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Veg Cutlet",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1216582528/photo/veg-cutlet.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Rasgulla",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1369633008/photo/rasgulla.jpg?s=612x612&w=gi&k=20"
            },
            {
                "title": "Mango Kulfi",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105148/photo/kulfi.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1051,
        "kitchenId": 105,
        "title": "Chole Bhature",
        "rating": "4.5",
        "time": "30 min",
        "type": "veg",
        "special": false,
        "url": "https://images.unsplash.com/photo-1589301771356-6a4e8c9b0d6b?q=80&w=2080&auto=format&fit=crop",
        "description": "Spicy chickpea curry served with fluffy bhature.",
        "mainCourse": [
            {
                "title": "Puri",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105165/photo/puri.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Onion Salad",
                "cost": "7.00",
                "url": "https://media.gettyimages.com/id/1334105166/photo/onion-salad.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Aloo Sabzi",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105167/photo/aloo-sabzi.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Papdi Chaat",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105169/photo/papdi-chaat.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Bhel Puri",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/1334105170/photo/bhel-puri.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Rabri",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1334105173/photo/rabri.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Phirni",
                "cost": "9.00",
                "url": "https://media.gettyimages.com/id/1334105174/photo/phirni.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    },
    {
        "id": 1052,
        "kitchenId": 105,
        "title": "Mutton Biryani",
        "rating": "4.9",
        "time": "55 min",
        "type": "non-veg",
        "special": true,
        "url": "https://images.unsplash.com/photo-1567189718280-8863ae2973fd?q=80&w=2080&auto=format&fit=crop",
        "description": "Richly spiced mutton layered with fragrant basmati rice.",
        "mainCourse": [
            {
                "title": "Raita",
                "cost": "8.00",
                "url": "https://media.gettyimages.com/id/1334105150/photo/raita.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Butter Naan",
                "cost": "13.00",
                "url": "https://media.gettyimages.com/id/1250226000/photo/butter-naan.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Palak Paneer",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105152/photo/palak-paneer.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "starters": [
            {
                "title": "Mutton Seekh Kebab",
                "cost": "14.00",
                "url": "https://media.gettyimages.com/id/1334105160/photo/seekh-kebab.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Chicken 65",
                "cost": "11.00",
                "url": "https://media.gettyimages.com/id/1334105153/photo/chicken-65.jpg?s=1024x1024&w=gi&k=20"
            }
        ],
        "desserts": [
            {
                "title": "Gulab Jamun",
                "cost": "10.00",
                "url": "https://media.gettyimages.com/id/1337213309/photo/gulab-jamun.jpg?s=1024x1024&w=gi&k=20"
            },
            {
                "title": "Laddu",
                "cost": "12.00",
                "url": "https://media.gettyimages.com/id/1334105175/photo/laddu.jpg?s=1024x1024&w=gi&k=20"
            }
        ]
    }
]
