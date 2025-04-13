import { Category } from "../types/recommendedSectionKitchenProfile";

export const kitchenProfileConstants = {
    name: "StarBucks",
    tagline: "Coffee",
    reviewCount: 1000,
    rating: 4.5,
    deliveryTime: "30 min",
    distance: 4.0,
    deliveryFee: 0,
    coverImage: "https://images.unsplash.com/photo-1654054041538-ad6a3fb653d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileImage: "https://imgs.search.brave.com/GP36WrnstYLKwqJvaE0ybXGDfSig7MvU5kCephTHwCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cHJvZC53ZWJzaXRl/LWZpbGVzLmNvbS82/NWNhZmVhZTBkNjJk/OWU0MTYzZDE1NDUv/NjZkZWZlYjBkOGJm/OTMxN2Q0Y2IyZmFi/X0FEXzRuWGZTR2hI/bWt0cjNWLW12X0dY/Mmx2VUdIQkZFazRE/Rl9kM05Mdm5OdGRP/QnE5ejd1QkVWUnJl/NDhLMEoxaXBmcGFC/QndXd0YzZ2lvbHNa/N3pUT212bHNZcU1F/UmYxeXVOZXJNSlJf/NDlVRUhETVZSSGV2/TEVhYi1XbVA1OFF4/NldUcWhOWW9BeGdR/ZFZIZ2I0RDZfM0Vy/NHo2SjQuYXZpZg",
}

export const offersConstants = [
    {
        title: "50% off upto Rs.100",
        code: "STARBUCKS50",
    },
    {
        title: "10% off",
        code: "STARBUCKS10",
    },
]

export const categories: Category[] = ["All Thalis", "Vegetarian", "Specials"];

export const thalis = [
    {
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic pepperoni with mozzarella cheese",
        thaliOffer: "Buy 1 Get 1 Free",
    },
    {
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh basil, tomatoes and buffalo mozzarella",
        thaliOffer: "30% Off on Large",
    },
    {
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich and creamy cottage cheese curry",
        thaliOffer: "Free Naan",
    },
    {
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Loaded with fresh garden vegetables",
        thaliOffer: "Extra Toppings Free",
    },
];

export const vegetarian = [
    {
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic pepperoni with mozzarella cheese",
        thaliOffer: "Buy 1 Get 1 Free",
    },
    {
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh basil, tomatoes and buffalo mozzarella",
        thaliOffer: "30% Off on Large",
    },
    {
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich and creamy cottage cheese curry",
        thaliOffer: "Free Naan",
    },
    {
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Loaded with fresh garden vegetables",
        thaliOffer: "Extra Toppings Free",
    },
];


export const specials = [
    {
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic pepperoni with mozzarella cheese",
        thaliOffer: "Buy 1 Get 1 Free",
    },
    {
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh basil, tomatoes and buffalo mozzarella",
        thaliOffer: "30% Off on Large",
    },
    {
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich and creamy cottage cheese curry",
        thaliOffer: "Free Naan",
    },
    {
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Loaded with fresh garden vegetables",
        thaliOffer: "Extra Toppings Free",
    },
];