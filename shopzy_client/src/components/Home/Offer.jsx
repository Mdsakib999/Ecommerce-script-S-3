import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router";

const Offer = () => {
  const offers = [
    {
      id: 1,
      title: "Smartphones & Tablets",
      subtitle: "Save up to 40% on the latest devices",
      image:
        "https://images.unsplash.com/photo-1706169529392-8685eea83b98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXMlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      color: "from-blue-500/70 to-indigo-700/70",
    },
    {
      id: 2,
      title: "Modern Furniture",
      subtitle: "Redefine comfort — up to 25% off",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&auto=format&fit=crop&q=60",
      color: "from-rose-500/70 to-pink-600/70",
    },
    {
      id: 3,
      title: "Luxury Perfumes",
      subtitle: "Get up to 30% off on premium scents",
      image:
        "https://images.unsplash.com/photo-1610461888750-10bfc601b874?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      color: "from-black/20 to-emerald-600/50",
    },
    {
      id: 4,
      title: "Audio Essentials",
      subtitle: "Headphones & Speakers up to 50% off",
      image:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      color: "from-green-500/70 to-emerald-700/70",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="flex flex-col-reverse gap-y-2 sm:flex-row justify-between items-center mb-10">
        <h2 className="text-md md:text-xl lg:text-3xl font-bold text-gray-900">
          🔥 Exclusive Offers for You
        </h2>
        <Link to="/products">
          <p className="underline cursor-pointer text-xs md:text-md lg:text-lg font-semibold text-blue-600 hover:text-blue-800">
            View All Products
          </p>
        </Link>
      </div>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="overflow-hidden"
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              {/* Background Image */}
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${offer.color} opacity-80`}
              ></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="text-sm opacity-90 mb-4">{offer.subtitle}</p>
                <Link to="/products">
                  <button className="cursor-pointer bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Offer;
