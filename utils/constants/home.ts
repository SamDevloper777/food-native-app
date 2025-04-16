export const thalis = [
    {
        title: "Pepperoni Pizza",
        cost: "10.00",
        rating: "4.5",
        time: "20min",
        url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=75&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        title: "Margherita Pizza",
        cost: "8.00",
        rating: "4.6",
        time: "30min",
        url: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        title: "Shahi Paneer",
        cost: "12.00",
        rating: "4.1",
        time: "25min",
        url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
        title: "Veg Farmhouse",
        cost: "13.00",
        rating: "4.2",
        time: "20min",
        url: "https://images.unsplash.com/photo-1668665771757-4d42737d295a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "A delicious pizza with pepperoni and cheese lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
];

export const kitchens = [
    { title: "Biryani Blues", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
    { title: "Pizza Palace", cost: "10.00", rating: "4.5", time: "20min", url: thalis[0].url },
    { title: "Indian Spice", cost: "8.00", rating: "4.6", time: "30min", url: thalis[1].url },
    { title: "Chettinad", cost: "12.00", rating: "4.1", time: "25min", url: thalis[2].url },
    { title: "Kebab Corner", cost: "13.00", rating: "4.2", time: "20min", url: thalis[3].url },
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

export type Category = "All Thalis" | "Kitchens" | "Specials";

export const categories: Category[] = ["All Thalis", "Kitchens", "Specials"];