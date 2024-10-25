import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹14,999",
    originalPrice: "₹19,999",
    rating: 4.5,
    reviews: 20,
    offer: "25% off",
    highlights: ["4GB RAM", "128GB Storage", "5000mAh Battery", "Dual SIM"],
    isBestSeller: true,
    category: "Smartphones",
  },
  {
    id: 2,
    name: "Bluetooth Headphones ABC",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹1,999",
    originalPrice: "₹2,499",
    rating: 4.2,
    reviews: 15,
    offer: "20% off",
    highlights: ["Noise Cancellation", "20 Hours Playback", "Bluetooth 5.0"],
    isBestSeller: false,
    category: "Audio",
  },
  {
    id: 3,
    name: "Laptop DEF",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹49,999",
    originalPrice: "₹59,999",
    rating: 4.7,
    reviews: 50,
    offer: "17% off",
    highlights: [
      "8GB RAM",
      "512GB SSD",
      "Intel i5 11th Gen",
      "15.6-inch Display",
    ],
    isBestSeller: true,
    category: "Laptops",
  },
  {
    id: 4,
    name: "Smartwatch GHI",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹5,499",
    originalPrice: "₹6,999",
    rating: 4.3,
    reviews: 10,
    offer: "21% off",
    highlights: ["Heart Rate Monitor", "GPS", "Water Resistant"],
    isBestSeller: false,
    category: "Wearables",
  },
  {
    id: 5,
    name: "Tablet JKL",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹21,999",
    originalPrice: "₹24,999",
    rating: 4.6,
    reviews: 30,
    offer: "12% off",
    highlights: ["10-inch Display", "4GB RAM", "64GB Storage"],
    isBestSeller: true,
    category: "Tablets",
  },
  {
    id: 6,
    name: "Wireless Earbuds MNO",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹2,999",
    originalPrice: "₹3,499",
    rating: 4.0,
    reviews: 25,
    offer: "15% off",
    highlights: ["Touch Controls", "20 Hours Playback", "Bluetooth 5.1"],
    isBestSeller: false,
    category: "Audio",
  },
  {
    id: 7,
    name: "Gaming Laptop PQR",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹79,999",
    originalPrice: "₹89,999",
    rating: 4.8,
    reviews: 60,
    offer: "11% off",
    highlights: ["16GB RAM", "1TB SSD", "RTX 3060", "Intel i7"],
    isBestSeller: true,
    category: "Laptops",
  },
  {
    id: 8,
    name: "Fitness Tracker STU",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹3,999",
    originalPrice: "₹4,999",
    rating: 4.2,
    reviews: 18,
    offer: "20% off",
    highlights: ["Step Counter", "Sleep Monitoring", "Waterproof"],
    isBestSeller: false,
    category: "Wearables",
  },
  {
    id: 9,
    name: "4K Smart TV VWX",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹29,999",
    originalPrice: "₹34,999",
    rating: 4.6,
    reviews: 40,
    offer: "14% off",
    highlights: ["55-inch Display", "HDR10", "Dolby Atmos", "Smart Features"],
    isBestSeller: true,
    category: "Televisions",
  },
  {
    id: 10,
    name: "DSLR Camera YZ",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹45,999",
    originalPrice: "₹49,999",
    rating: 4.4,
    reviews: 22,
    offer: "8% off",
    highlights: ["24MP", "4K Video", "Wi-Fi Connectivity"],
    isBestSeller: false,
    category: "Cameras",
  },
  {
    id: 11,
    name: "Portable Speaker ABC",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹2,499",
    originalPrice: "₹2,999",
    rating: 4.1,
    reviews: 35,
    offer: "16% off",
    highlights: ["10 Hours Battery", "Waterproof", "Bluetooth 4.2"],
    isBestSeller: true,
    category: "Audio",
  },
  {
    id: 12,
    name: "Action Camera DEF",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹14,999",
    originalPrice: "₹17,999",
    rating: 4.5,
    reviews: 20,
    offer: "17% off",
    highlights: ["4K Video", "Waterproof", "Wi-Fi Connectivity"],
    isBestSeller: false,
    category: "Cameras",
  },
  {
    id: 13,
    name: "Gaming Console GHI",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹34,999",
    originalPrice: "₹39,999",
    rating: 4.9,
    reviews: 100,
    offer: "12% off",
    highlights: ["8K Gaming", "1TB Storage", "Wireless Controller"],
    isBestSeller: true,
    category: "Gaming",
  },
  {
    id: 14,
    name: "Router JKL",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹1,499",
    originalPrice: "₹1,999",
    rating: 4.2,
    reviews: 50,
    offer: "25% off",
    highlights: ["Dual Band", "High Speed", "Wi-Fi 6"],
    isBestSeller: false,
    category: "Networking",
  },
  {
    id: 15,
    name: "Mechanical Keyboard MNO",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹3,999",
    originalPrice: "₹4,499",
    rating: 4.3,
    reviews: 10,
    offer: "11% off",
    highlights: ["RGB Lighting", "Tactile Feedback", "USB-C"],
    isBestSeller: true,
    category: "Peripherals",
  },
  {
    id: 16,
    name: "Wireless Mouse PQR",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹999",
    originalPrice: "₹1,499",
    rating: 4.1,
    reviews: 15,
    offer: "33% off",
    highlights: ["Bluetooth", "Ergonomic Design", "Long Battery Life"],
    isBestSeller: false,
    category: "Peripherals",
  },
  {
    id: 17,
    name: "Gaming Chair STU",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹14,999",
    originalPrice: "₹19,999",
    rating: 4.7,
    reviews: 30,
    offer: "25% off",
    highlights: ["Ergonomic Design", "Adjustable Height", "Lumbar Support"],
    isBestSeller: true,
    category: "Furniture",
  },
  {
    id: 18,
    name: "Drone VWX",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹29,999",
    originalPrice: "₹34,999",
    rating: 4.6,
    reviews: 20,
    offer: "14% off",
    highlights: ["4K Camera", "30 Minutes Flight Time", "GPS"],
    isBestSeller: false,
    category: "Drones",
  },
  {
    id: 19,
    name: "Coffee Maker XYZ",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹3,999",
    originalPrice: "₹4,999",
    rating: 4.4,
    reviews: 25,
    offer: "20% off",
    highlights: ["Programmable", "12 Cups", "Auto Shut-off"],
    isBestSeller: true,
    category: "Home Appliances",
  },
  {
    id: 20,
    name: "Microwave Oven ABC",
    imageSrc: "https://via.placeholder.com/300",
    price: "₹7,499",
    originalPrice: "₹8,999",
    rating: 4.3,
    reviews: 40,
    offer: "17% off",
    highlights: ["Convection", "Grill Function", "20L Capacity"],
    isBestSeller: false,
    category: "Kitchen Appliances",
  },
  // ... You can replicate the pattern for more products
];

// Continue adding up to 50 products using similar data format and adjusting the names, offers, and categories.

const ProductPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          Explore Top Deals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg relative hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={product.imageSrc}
                  alt={`${product.name}`}
                  className="h-64 w-full object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.offer}
                </div>
                {product.isBestSeller && (
                  <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded">
                    Best Seller
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                  {product.name}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-sm">
                    {"★".repeat(Math.floor(product.rating))}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="mt-2">
                  <span className="text-xl font-bold text-gray-800">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                </div>

                <ul className="mt-3 text-sm text-gray-600">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-green-600">✔</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* View Product Button */}
                <a
                  href={`/product/${product.id}`}
                  className="mt-4 w-full block bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
