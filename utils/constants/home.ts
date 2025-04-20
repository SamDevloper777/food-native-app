import { homeCategory } from "@/utils/types";

export const thalis = [
    {
        id: 1,
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 2,
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 3,
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        id: 4,
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
];

export const kitchens = [
    { id: 5, title: "Biryani Blues", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
    { id: 6, title: "Pizza Palace", cost: "10.00", rating: "4.5", time: "20min", url: thalis[0].url },
    { id: 7, title: "Indian Spice", cost: "8.00", rating: "4.6", time: "30min", url: thalis[1].url },
    { id: 8, title: "Chettinad", cost: "12.00", rating: "4.1", time: "25min", url: thalis[2].url },
    { id: 9, title: "Kebab Corner", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
];

export const specials = [
    {
        id: 10,
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Classic pepperoni with mozzarella cheese",
        thaliOffer: "Buy 1 Get 1 Free",
    },
    {
        id: 11,
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fresh basil, tomatoes and buffalo mozzarella",
        thaliOffer: "30% Off on Large",
    },
    {
        id: 12,
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rich and creamy cottage cheese curry",
        thaliOffer: "Free Naan",
    },
    {
        id: 13,
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Loaded with fresh garden vegetables",
        thaliOffer: "Extra Toppings Free",
    },
];

export const categories: homeCategory[] = ["All Thalis", "Kitchens", "Specials"];