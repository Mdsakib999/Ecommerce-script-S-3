import { ArrowRight, CheckCircle } from "lucide-react";

// Info Points Component
function InfoPoints() {
  const points = [
    "Trusted by thousands of customers worldwide",
    "Premium quality products guaranteed",
    "Fast and reliable delivery service",
  ];

  return (
    <div className="space-y-3">
      {points.map((point, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <CheckCircle className="text-blue-500 flex-shrink-0" size={20} />
          <span className="text-gray-700">{point}</span>
        </div>
      ))}
    </div>
  );
}
export default function AboutSection({
  preHeading,
  heading,
  normalText,
  image,
  reverse,
}) {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className={`order-2 ${reverse ? "md:order-1" : "md:order-2"}`}>
            <div className="space-y-6">
              <div>
                <span className="text-blue-500 font-semibold text-sm tracking-widest uppercase">
                  {preHeading}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
                  {heading}
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                {normalText}
              </p>
              <div>
                <InfoPoints />
              </div>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 mt-4">
                Learn More <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className={`order-1 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src={image}
                alt="section"
                className="relative w-full rounded-2xl shadow-xl object-cover h-96 md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
