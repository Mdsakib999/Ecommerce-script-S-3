import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const Solution = () => {
  const solutions = [
    {
      text: "Seamless online and offline shopping experience",
      highlight: "Unified Experience",
    },
    {
      text: "Quality assurance across all product categories",
      highlight: "Premium Quality",
    },
    {
      text: "Fast delivery with real-time order tracking",
      highlight: "Lightning Fast",
    },
    {
      text: "User-friendly interface for all age groups",
      highlight: "Easy to Use",
    },
    {
      text: "24/7 customer support and assistance",
      highlight: "Always Available",
    },
    {
      text: "Personalized recommendations based on preferences",
      highlight: "Smart Shopping",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-500 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold uppercase tracking-wide">
              Our Solution
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need for a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              {" "}
              Perfect Shopping{" "}
            </span>
            Experience
          </h2>

          <p className="text-sm md:text-base lg:text-md text-gray-600 leading-relaxed">
            We've built a comprehensive platform that puts your needs first,
            combining cutting-edge technology with exceptional service to
            deliver an unmatched shopping journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-wide">
                    {solution.highlight}
                  </h3>
                  <p className="text-gray-700 font-medium text-xs md:text-sm lg:text-lg">
                    {solution.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative my-16 px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-8">
            {/* Stats Card with full overlay */}
            <div className="relative flex-1 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center p-10">
              {/* Background Image */}
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/054/435/607/small/shopping-cart-in-a-supermarket-aisle-photo.jpg"
                alt="E-commerce background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="relative z-10 w-full text-white text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      50K+
                    </div>
                    <div className="text-gray-200 text-lg">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      99.9%
                    </div>
                    <div className="text-gray-200 text-lg">
                      Uptime Guarantee
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl md:text-5xl font-bold mb-2">
                      24/7
                    </div>
                    <div className="text-gray-200 text-lg">
                      Customer Support
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex-1 bg-white rounded-3xl p-10 shadow-xl border border-gray-100 flex flex-col justify-between">
              <div className="text-center lg:text-left flex-1 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Shopping Experience?
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
                  Join thousands of satisfied customers who discovered a better,
                  faster, and smarter way to shop online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="text-sm md:text-base group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-2 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center">
                  Start Shopping Now
                  <ArrowRight className="hidden sm:block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="text-sm md:text-base bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-gray-200 hover:border-gray-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
