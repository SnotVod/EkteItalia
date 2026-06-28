// data.js
const villasData = [
    {
        id: 1,
        name: "La Tanna: Chardonnay",
        region: "Tuscany",
        price: "€--- / week", // Replace with their price
        guests: 5, // Replace with their max guests
        beds: 3,   // Replace with their bed count
        bathrooms: 1,  // Replace with their bath count
        sqm: 64,   // NEW: Square meters from their website
        feature: "Ground Floor", 
        image: "Images/villas La Tanna/Appartamento Chardonnay/Agriturismo-la-tanna-appartamento-vacanze-chardonnay-01.jpg", // Replace with their main image
        gallery: [
            "Images/villas La Tanna/Appartamento Chardonnay/Agriturismo-la-tanna-appartamento-vacanze-chardonnay-02.jpg", 
            "Images/villas La Tanna/Appartamento Chardonnay/Agriturismo-la-tanna-appartamento-vacanze-chardonnay-03.jpg", 
            "Images/villas La Tanna/Appartamento Chardonnay/Agriturismo-la-tanna-appartamento-vacanze-chardonnay-04.jpg",
            "Images/villas La Tanna/Appartamento Chardonnay/Agriturismo-la-tanna-appartamento-vacanze-chardonnay-05.jpg"
        ],
        tag: "Popular",
        shortDesc: "[Paste their short 1-sentence summary here]",
        longDesc: "Chardonnay is your spacious retreat in Tuscany: a 64 m² three-room apartment, perfect for 5 people, located on the first floor. The apartment has two bedrooms, one double and one twin, with the possibility of adding an extra bed, making it ideal for families or groups of friends. The living area includes a fully equipped kitchen and a private bathroom, offering ample space for a comfortable stay. Air conditioning (available at an extra charge, based on consumption) ensures maximum comfort even on the hottest days, while the television and free Wi-Fi allow you to stay connected while enjoying the tranquillity of the countryside.",
        amenities: ["Wifi", "Air Conditioning", "mille is best", "Shared Pool", "BBQ Area", "Free Parking"]
    },
    {
        id: 2,
        name: "La Tanna: Malvisia",
        region: "Tuscany",
        price: "€--- / week", 
        guests: 2,
        beds: 1, 
        bathrooms: 1,
        sqm: 45,   // NEW: Square meters
        feature: "Panoramic Views",
        image: "Images/villas La Tanna/Appartamento Malvasia/05_Camera_01.jpg",
        gallery: [
            "Images/villas La Tanna/Appartamento Malvasia/05_Bagno_01.jpg",
            "Images/villas La Tanna/Appartamento Malvasia/05_Cucina_01.jpg"
            
        ],
        tag: "Family",
        shortDesc: "[Paste their short 1-sentence summary here]",
        longDesc: "[Paste their full paragraph description from the website here.]",
        amenities: ["Wifi", "Air Conditioning", "Full Kitchen", "Shared Pool", "Outdoor Dining Area", "Free Parking"]
    },
    {
        id: 3,
        name: "[Name of Apartment 3 - e.g., La Quercia]",
        region: "Tuscany",
        price: "€--- / week", 
        guests: 2,
        beds: 1,
        bathrooms: 1,
        sqm: 35,   // NEW: Square meters
        feature: "Romantic Retreat",
        image: "images/apartment3-main.jpg",
        gallery: [
            "images/apartment3-1.jpg",
            "images/apartment3-2.jpg",
            "images/apartment3-3.jpg"
        ],
        tag: "Couples", 
        shortDesc: "[Paste their short 1-sentence summary here]",
        longDesc: "[Paste their full paragraph description from the website here.]",
        amenities: ["Wifi", "Air Conditioning", "Kitchenette", "Shared Pool", "Garden Access", "Free Parking"]
    },
    {
        id: 4,
        name: "[Name of Apartment 4 - e.g., Il Gelso]",
        region: "Tuscany",
        price: "€--- / week", 
        guests: 6,
        beds: 3,
        bathrooms: 2,
        sqm: 75,   // NEW: Square meters
        feature: "Large & Spacious",
        image: "images/apartment4-main.jpg",
        gallery: [
            "images/apartment4-1.jpg",
            "images/apartment4-2.jpg",
            "images/apartment4-3.jpg",
            "images/apartment4-4.jpg"
        ],
        tag: "Groups", 
        shortDesc: "[Paste their short 1-sentence summary here]",
        longDesc: "[Paste their full paragraph description from the website here.]",
        amenities: ["Wifi", "Air Conditioning", "Large Kitchen", "Shared Pool", "BBQ Area", "Free Parking"]
    }
];