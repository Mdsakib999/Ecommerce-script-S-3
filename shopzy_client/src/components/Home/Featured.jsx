import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Countup from "../shared/Countup";

const Featured = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const categories = [
    {
      id: 1,
      name: "Smartphones",
      items: 24,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 2,
      name: "Audio & Headphones",
      items: 18,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 3,
      name: "Cameras",
      items: 12,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 4,
      name: "Smart Watches",
      items: 16,
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 5,
      name: "Speakers",
      items: 14,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 6,
      name: "Gaming Accessories",
      items: 22,
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 7,
      name: "Laptops & PCs",
      items: 20,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 8,
      name: "Tablets",
      items: 15,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150&h=150&fit=crop&crop=center",
      featured: false,
    },
  ];

  const updateScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth * 0.7;
      scrollRef.current.scrollBy({
        left: direction === "next" ? width : -width,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScroll);
      updateScroll();
      return () => container.removeEventListener("scroll", updateScroll);
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Featured Categories
        </h2>
        <p className="text-gray-600 sm:text-lg max-w-xl mx-auto">
          Discover trending products and top gadgets
        </p>
      </div>

      <div className="relative">
        {/* Side Arrows */}
        <button
          onClick={() => scroll("prev")}
          disabled={!canScrollLeft}
          className={`absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center transition-all duration-300 ${
            !canScrollLeft ? "opacity-40 cursor-not-allowed" : "hover:scale-110"
          }`}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("next")}
          disabled={!canScrollRight}
          className={`absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center transition-all duration-300 ${
            !canScrollRight
              ? "opacity-40 cursor-not-allowed"
              : "hover:scale-110"
          }`}
        >
          <ChevronRight size={20} />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-none py-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="flex-shrink-0 w-40 h-36 cursor-pointer rounded-xl overflow-hidden relative shadow-lg group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 sm:h-44 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {cat.featured && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse"></div>
              )}
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent p-2 text-white">
                <h3 className="font-semibold text-sm sm:text-base">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm">{cat.items} Products</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4 shadow">
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-gray-900">
            <Countup>150</Countup>+
          </div>
          <div className="text-gray-600 text-sm">Total Products</div>
        </div>
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-purple-600">
            <Countup>8</Countup>
          </div>
          <div className="text-gray-600 text-sm">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-pink-600">
            <Countup>50</Countup>+
          </div>
          <div className="text-gray-600 text-sm">Top Brands</div>
        </div>
        <div className="text-center">
          <div className="text-xl lg:text-2xl font-bold text-emerald-600">
            <Countup>4.8</Countup>★
          </div>
          <div className="text-gray-600 text-sm">Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
