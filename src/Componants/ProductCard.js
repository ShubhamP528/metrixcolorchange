import React from "react";
// import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  //   const navigate = useNavigate();

  // Function to handle navigation to product detail page
  const goToProductDetail = () => {
    // navigate(`/product/${product._id}`);
  };

  return (
    <div
      className=" w-full rounded-lg overflow-hidden shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      onClick={goToProductDetail}
    >
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={product?.img || "https://via.placeholder.com/300"}
        alt={product?.name}
      />

      {/* Product Details */}
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">
          {product?.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {product?.desc?.substring(0, 60)}...
        </p>
      </div>

      {/* Product Price */}
      <div className="px-6 py-2">
        <span className="font-bold text-xl text-indigo-600">
          ₹{product?.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
