import Countup from "../components/shared/Countup";
import AboutSection from "../components/shared/AboutSection";
import { TrendingUp, Award, Users, MapPin, CheckCircle } from "lucide-react";
import salesImage from "../assets/about-image-2.jpg";
import bannerImage from "../assets/shop.jpg";

// eslint-disable-next-line no-unused-vars
function StatsCard({ icon: Icon, number, label, delay }) {
  return (
    <div
      className="group bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col gap-4">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white group-hover:shadow-lg transition-shadow">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
            <Countup>{number}</Countup>+
          </h3>
          <p className="text-gray-600 mt-2 font-medium">{label}</p>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mission Statement */}
      <div className="bg-gradient-to-b from-white to-blue-50">
        <div className="relative w-full">
          <img
            src={bannerImage}
            alt="Our Mission"
            className="w-full object-cover min-h-[50vh]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl px-4 sm:px-6 text-center text-white">
              <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-xs md:text-sm lg:text-lg leading-relaxed">
                At ZyloCart, we are committed to making online shopping simple,
                enjoyable, and trustworthy. Our mission is to deliver
                high-quality products directly to your doorstep while providing
                exceptional customer service. Every item is carefully selected
                for quality, value, and style. We aim to build a community where
                customers feel supported, valued, and inspired.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Why Choose ZyloCart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <StatsCard
              icon={TrendingUp}
              number={800}
              label="Product Types"
              delay={0}
            />
            <StatsCard
              icon={Award}
              number={12}
              label="Years Of Experience"
              delay={100}
            />
            <StatsCard
              icon={Users}
              number={2500}
              label="Trust Customers"
              delay={200}
            />
            <StatsCard
              icon={MapPin}
              number={15}
              label="Stores Nationwide"
              delay={300}
            />
          </div>
        </div>
      </div>

      {/* About Sections */}
      <div className="bg-gray-50">
        <AboutSection
          preHeading="OUR STORY"
          heading="Creative and Innovative Fashion Trends"
          normalText="We started with a simple vision: to make quality products accessible to everyone. Over the years, we've grown into a trusted name in e-commerce, serving thousands of customers across the nation. Our commitment to excellence remains unwavering, and we continue to innovate and improve every day."
          image={salesImage}
          reverse={false}
        />
      </div>

      {/* Vision Section */}
      <div className="bg-white">
        <AboutSection
          preHeading="OUR VISION"
          heading="Building the Future of E-Commerce"
          normalText="We envision a world where shopping is effortless, transparent, and enjoyable for everyone. We're not just selling products; we're building relationships with our customers. Through continuous innovation and customer-centric approach, we're shaping the future of online retail."
          image="https://www.shipscience.com/wp-content/uploads/2024/10/discover-the-benefits-of-next-day-delivery-services-2.png"
          reverse={true}
        />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-400 to-blue-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience UniMart?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of satisfied customers and discover why we're the
            choice for quality products
          </p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300">
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
