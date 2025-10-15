// components/Product.jsx
import { ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../../redux/app/features/cart/cartSlice";
import toast from "react-hot-toast";

export default function Product({ product }) {
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item._id === product._id)
  );

  const hasReachedStock = cartItem && cartItem.cartQuantity >= product.quantity;
  const isInCart = !!cartItem;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (hasReachedStock) {
      toast.error("Out of stock — you’ve added all available items");
      return;
    }

    dispatch(addToCart(product));

    if (!isInCart) {
      toast.success(<h1 className="text-center font-serif">Added to cart</h1>, {
        position: "top-right",
      });
    } else {
      toast(<h3 className="text-center font-serif">Quantity increased</h3>, {
        icon: "🛒",
        position: "top-right",
      });
    }
  };

  return (
    <Link to={`/product/${product?._id}`} className="group">
      <div className="relative w-full max-w-xs mx-auto bg-white rounded-3xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        {/* Discount Badge */}
        {product?.discountPrice && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs md:text-sm px-3 py-1 rounded-full z-10 shadow">
            SALE
          </div>
        )}

        <div className="relative w-full h-56 flex items-center justify-center bg-gray-50 overflow-hidden">
          <img
            src={product?.images[0]}
            alt={product?.name}
            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-5 flex flex-col items-center text-center space-y-2">
          <p className="text-gray-400 text-sm md:text-base">
            {product?.category}
          </p>
          <h2 className="text-gray-900 text-sm md:text-md font-semibold truncate">
            {product?.name.slice(0, 25)}
          </h2>

          <div className="flex items-center space-x-2">
            {product?.discountPrice ? (
              <>
                <p className="text-blue-500 font-bold text-lg md:text-xl">
                  ${product?.discountPrice}
                </p>
                <p
                  className={`text-gray-400 ${
                    product?.discountPrice === product?.price && "hidden"
                  } line-through text-sm md:text-base`}
                >
                  {product?.price}
                </p>
              </>
            ) : (
              <p className="text-gray-900 font-bold text-lg md:text-xl">
                ${product?.price}
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(product);
            }}
            disabled={hasReachedStock}
            className={`cursor-pointer w-full py-2.5 px-4 rounded-full font-semibold text-sm md:text-base flex items-center justify-center space-x-2 transition-all duration-300
              ${
                hasReachedStock
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : isInCart
                  ? "bg-emerald-400 text-white hover:bg-emerald-600"
                  : "bg-gray-200 hover:bg-gray-800 hover:text-white"
              }`}
          >
            <ShoppingCart size={18} />
            <span>
              {hasReachedStock
                ? "Out of Stock"
                : isInCart
                ? "Added ✓"
                : "Add to Cart"}
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
