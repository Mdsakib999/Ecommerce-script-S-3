import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  CreditCard,
  Sparkles,
  Gift,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Trusted & Secure",
      desc: "Shop confidently with 100% genuine products and data protection.",
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Fast Delivery",
      desc: "Quick, reliable, and trackable deliveries right to your doorstep.",
      icon: <Truck className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "24/7 Support",
      desc: "Our team is always here to help — anytime, anywhere.",
      icon: <Headphones className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Easy Payments",
      desc: "Multiple secure payment options for a smooth checkout experience.",
      icon: <CreditCard className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Exclusive Offers",
      desc: "Enjoy member-only discounts and flash sales every week.",
      icon: <Gift className="w-7 h-7 text-blue-600" />,
    },
    {
      title: "Smart Shopping",
      desc: "AI-powered recommendations tailored to your taste.",
      icon: <Sparkles className="w-7 h-7 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Shop With <span className="text-blue-600">Shopzy</span>?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We don’t just sell products — we deliver happiness, trust, and
            convenience through every order.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-bl from-blue-300 via-blue-200 to-blue-100 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300 border border-blue-100 hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
