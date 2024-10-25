import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    images: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x401",
      "https://via.placeholder.com/600x402",
    ],
    price: "₹14,999",
    originalPrice: "₹19,999",
    rating: 4.5,
    reviews: 20,
    description: "A powerful smartphone with the latest technology.",
    highlights: ["4GB RAM", "128GB Storage", "5000mAh Battery", "Dual SIM"],
    features: [
      "Octa-core Processor",
      "Super AMOLED Display",
      "Fast Charging",
      "5G Support",
    ],
    comments: [
      {
        user: "Alice",
        comment: "Great phone, very smooth performance!",
        rating: 5,
      },
      { user: "Bob", comment: "Decent phone for the price.", rating: 4 },
    ],
  },
];

const suggestedProducts = [
  {
    id: 2,
    name: "Bluetooth Headphones ABC",
    image: "https://via.placeholder.com/600x403",
    price: "₹1,999",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Laptop 123",
    image: "https://via.placeholder.com/600x404",
    price: "₹34,999",
    rating: 4.6,
  },
];

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-40 rounded-lg mb-4"></div>
      <div className="bg-gray-300 h-6 rounded mb-2 w-3/4"></div>
      <div className="bg-gray-300 h-4 rounded mb-1 w-1/2"></div>
      <div className="bg-gray-300 h-4 rounded mb-1 w-1/3"></div>
      <div className="bg-gray-300 h-4 rounded mb-4 w-full"></div>
      <div className="flex space-x-2 mb-4">
        <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
        <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
        <div className="bg-gray-300 h-8 w-8 rounded-full"></div>
      </div>
      <div className="bg-gray-300 h-10 rounded mb-2 w-full"></div>
      <div className="bg-gray-300 h-10 rounded mb-2 w-full"></div>
    </div>
  );
};

const Temp = () => {
  //   const { productId } = useParams();
  const productId = 1;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const fetchedProduct = products.find((p) => p.id === parseInt(productId));
      setProduct(fetchedProduct);
      setLoading(false);
      if (fetchedProduct) {
        setSelectedImage(fetchedProduct.images[0]);
        setComments(fetchedProduct.comments);
      }
    };
    const timer = setTimeout(fetchData, 1500); // Simulating a delay
    return () => clearTimeout(timer);
  }, [productId]);

  const handleAddComment = () => {
    if (newComment.trim() && newRating) {
      const newCommentObj = {
        user: "New User",
        comment: newComment,
        rating: newRating,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setNewRating(0);
    }
  };

  const renderStars = (rating, isInteractive = false) => {
    return (
      <div className="flex items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <FaStar
              key={i}
              size={24}
              color={
                (isInteractive ? hoverRating || newRating : rating) > i
                  ? "#ffc107"
                  : "#e4e5e9"
              }
              onMouseEnter={() => isInteractive && setHoverRating(i + 1)}
              onMouseLeave={() => isInteractive && setHoverRating(0)}
              onClick={() => isInteractive && setNewRating(i + 1)}
              className={isInteractive ? "cursor-pointer" : ""}
            />
          ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <Shimmer />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 text-2xl">
        Product not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg mb-4"
            />
            <div className="flex space-x-4">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-20 h-20 cursor-pointer rounded-lg ${
                    selectedImage === image ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              {renderStars(Math.floor(product.rating))}
              <span className="ml-2 text-lg text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-800 mb-2">
              {product.price}
            </div>
            <div className="text-lg text-gray-500 line-through">
              {product.originalPrice}
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700">{product.description}</p>

            {/* Highlights */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Highlights
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {product.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Features
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            User Comments
          </h2>
          {comments.map((comment, index) => (
            <div key={index} className="mb-4 border-b pb-2">
              <div className="flex items-center">
                {renderStars(comment.rating)}
                <span className="ml-2 font-semibold text-gray-800">
                  {comment.user}
                </span>
              </div>
              <p className="text-gray-700">{comment.comment}</p>
            </div>
          ))}

          {/* Add Comment */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Leave a Comment
            </h3>
            <textarea
              className="w-full p-2 border border-gray-300 rounded mb-2"
              rows="3"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your comment here..."
            />
            <div className="flex items-center mb-4">
              {renderStars(newRating, true)}
            </div>
            <button
              onClick={handleAddComment}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Suggested Products */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Suggested Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {suggestedProducts.map((suggestedProduct) => (
              <div
                key={suggestedProduct.id}
                className="bg-white p-4 rounded-lg shadow-lg"
              >
                <img
                  src={suggestedProduct.image}
                  alt={suggestedProduct.name}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {suggestedProduct.name}
                </h3>
                <div className="flex items-center mb-2">
                  {renderStars(Math.floor(suggestedProduct.rating))}
                  <span className="ml-2 text-lg text-gray-500">
                    ({suggestedProduct.reviews} reviews)
                  </span>
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {suggestedProduct.price}
                </div>
                <button className="bg-blue-600 text-white w-full py-2 rounded mt-2 hover:bg-blue-700">
                  View Product
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
