/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Countup = ({ children }) => {
  const [count, setCount] = useState(0);
  const target = parseFloat(children);
  const duration = 2000;

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(progress * target);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{Math.floor(count)}</>;
};

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
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 2,
      name: "Audio & Headphones",
      items: 18,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      featured: true,
      color: "from-blue-900 to-blue-700",
    },
    {
      id: 3,
      name: "Cameras",
      items: 12,
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 4,
      name: "Smart Watches",
      items: 16,
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 5,
      name: "Speakers",
      items: 14,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 6,
      name: "Gaming Accessories",
      items: 22,
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 7,
      name: "Laptops & PCs",
      items: 20,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
    },
    {
      id: 8,
      name: "Tablets",
      items: 15,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      featured: false,
      color: "from-slate-900 to-slate-700",
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
      const width = scrollRef.current.clientWidth * 0.8;
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
    <div className="w-full bg-gradient-to-b from-white via-slate-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-500 px-5 py-2 rounded-full text-sm font-medium mb-6">
            <span>Explore Our Collection</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-slate-600 text-sm md:text-lg max-w-sm md:max-w-2xl mx-auto leading-relaxed">
            Find exactly what you need from our carefully curated selection of
            premium products
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                className="flex-shrink-0 w-72 group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative h-80 rounded-3xl overflow-hidden bg-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {cat.featured && (
                    <div className="absolute top-5 right-5 z-10">
                      <div className="bg-amber-400 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5">
                        <Award size={14} />
                        FEATURED
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium">
                        {cat.items} Products
                      </div>
                    </div>

                    <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {cat.name}
                      </h3>
                      <Link to="/products">
                        <button className="cursor-pointer bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors duration-300 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                          Explore More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {canScrollLeft && (
            <button
              onClick={() => scroll("prev")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-slate-50 text-slate-900 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("next")}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-slate-50 text-slate-900 w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          )}
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-4">
              <TrendingUp className="text-blue-600" size={28} />
            </div>
            <div className="text-xl md:text-4xl font-bold text-slate-900 mb-2">
              <Countup>150</Countup>+
            </div>
            <div className="text-slate-600 font-medium text-sm md:text-4xl">
              Premium Products
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4">
              <Sparkles className="text-emerald-600" size={28} />
            </div>
            <div className="text-xl md:text-4xl font-bold text-slate-900 mb-2">
              <Countup>8</Countup>
            </div>
            <div className="text-slate-600 font-medium text-sm md:text-4xl">
              Categories
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl mb-4">
              <Award className="text-amber-600" size={28} />
            </div>
            <div className="text-xl md:text-4xl font-bold text-slate-900 mb-2">
              <Countup>50</Countup>+
            </div>
            <div className="text-slate-600 font-medium text-sm md:text-4xl">
              Top Brands
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-2xl mb-4">
              <Users className="text-rose-600" size={28} />
            </div>
            <div className="text-xl md:text-4xl font-bold text-slate-900 mb-2">
              <Countup>4.8</Countup>★
            </div>
            <div className="text-slate-600 font-medium text-sm md:text-4xl">
              Customer Rating
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
