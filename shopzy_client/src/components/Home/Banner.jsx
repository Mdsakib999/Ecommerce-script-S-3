import { ArrowUpRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Style, Redefined",
      subtitle: "Fashion",
      description: "Elevate your wardrobe with pieces that speak elegance.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
      accent: "from-rose-800/60 via-pink-700/50 to-orange-600/40",
      button: "Shop Now",
    },
    {
      id: 2,
      title: "Crafted For Living",
      subtitle: "Home & Living",
      description:
        "Bring timeless beauty and comfort into your everyday space.",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
      accent: "from-emerald-800/60 via-teal-700/50 to-lime-600/40",
      button: "Discover More",
    },
    {
      id: 3,
      title: "Innovation Meets Performance",
      subtitle: "Technology",
      description: "Experience cutting-edge tech that redefines the future.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      accent: "from-indigo-800/60 via-blue-700/50 to-cyan-600/40",
      button: "Explore Collection",
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const variants = {
    enter: { opacity: 0, scale: 1.05 },
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const textMotion = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div
      className="relative w-full h-[520px] sm:h-[620px] md:h-[700px] lg:h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient accent */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slides[current].accent}`}
          />
          {/* Dark overlay (this keeps it from flashing white) */}
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>
      </AnimatePresence>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 md:px-20 lg:px-28 max-w-7xl mx-auto text-left text-white">
        <motion.div
          key={slides[current].title}
          variants={textMotion}
          initial="hidden"
          animate="visible"
          className="space-y-5 sm:space-y-6"
        >
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm text-gray-200/90">
            {slides[current].subtitle}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-xl">
            {slides[current].title}
          </h1>
          <p className="max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg opacity-85">
            {slides[current].description}
          </p>

          <div className="pt-4">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 px-7 py-3 sm:px-8 sm:py-4 bg-white/10 border border-white/20 backdrop-blur-md rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-white/20 transition-all"
              >
                {slides[current].button}
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            className={`h-2 w-8 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
}
