import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const ProductCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust scroll value based on card size
    } else {
      current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
        <FaArrowLeft />
      </button>

      {/* Scrollable Container */}
      <div
        className="flex overflow-x-hidden space-x-4 scrollbar-hide"
        ref={scrollRef}
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-white shadow-lg p-4 rounded-lg"
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-40 object-cover w-full"
            />
            <h3 className="mt-2 font-semibold text-sm truncate">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-300 rounded-full p-2 z-10"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProductCarousel;
