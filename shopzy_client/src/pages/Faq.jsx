import {
  Minus,
  Plus,
  Package,
  Truck,
  MapPin,
  RotateCcw,
  Award,
  Headphones,
  Gift,
  CheckCircle,
  CreditCard,
  Clock,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What types of electronic accessories do you sell?",
      answer:
        "We offer a wide range of electronic accessories including headphones, chargers, phone cases, smartwatches, Bluetooth speakers, gaming accessories, and much more. All our products are from trusted brands with warranty support.",
      icon: Package,
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship our products worldwide. Shipping fees and delivery time may vary depending on your location. You can calculate shipping costs at checkout.",
      icon: Truck,
    },
    {
      question: "How can I track my order?",
      answer:
        "After placing an order, you will receive a tracking number via email. You can use this number on our tracking portal to see real-time updates on your shipment.",
      icon: MapPin,
    },
    {
      question: "What is your return and refund policy?",
      answer:
        "We offer a 30-day return policy on all electronic accessories. Products must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive the returned item.",
      icon: RotateCcw,
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, most of our electronic accessories come with a 6-month to 1-year warranty depending on the brand. Warranty details are provided with each product description.",
      icon: Award,
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team 24/7 via email, phone, or live chat on our website. We typically respond to inquiries within 2 hours during business hours.",
      icon: Headphones,
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer special pricing for bulk orders. Contact our sales team for a custom quote based on your requirements and quantity.",
      icon: Gift,
    },
    {
      question: "Are your products authentic?",
      answer:
        "100% authentic. We source all our products directly from authorized distributors and manufacturers to ensure quality and authenticity.",
      icon: CheckCircle,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, digital wallets, bank transfers, and buy-now-pay-later options for your convenience.",
      icon: CreditCard,
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        "Orders can be modified or cancelled within 2 hours of placement. After that, orders are processed and cannot be changed. Contact support immediately for assistance.",
      icon: Clock,
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const contentRefs = useRef({});

  useEffect(() => {
    const updateHeight = (index) => {
      if (contentRefs.current[index]) {
        contentRefs.current[index].style.maxHeight =
          contentRefs.current[index].scrollHeight + "px";
      }
    };

    // Update height for currently open item
    updateHeight(openIndex);

    const handleResize = () => {
      updateHeight(openIndex);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openIndex]);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-14 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Frequently Asked
            <span className="mt-1.5 block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
              Questions
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto">
            Find quick answers to common questions about our products, shipping,
            and services
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left Column - Image & Stats */}
          <div className="lg:col-span-2 flex flex-col justify-start">
            <div className="mb-8">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl blur-lg opacity-60"></div>
                <div className="relative bg-white rounded-2xl p-1 shadow-md overflow-hidden">
                  <img
                    src="https://t4.ftcdn.net/jpg/01/28/17/47/360_F_128174778_0XvhB1qi70yXNOPuUFzBNT85xKaWnVde.jpg"
                    alt="FAQ Illustration"
                    className="w-full h-auto object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                    <Package size={20} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Products Available
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      10K+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Happy Customers
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center text-white">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                      24/7
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Customer Support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-3 space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <button
                    className="w-full cursor-pointer flex justify-between items-start gap-4 px-5 sm:px-6 py-4 sm:py-5 font-semibold focus:outline-none transition-all duration-200 text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div
                        className={`flex-shrink-0 mt-0.5 p-2 rounded-lg transition-all duration-200 ${
                          isOpen
                            ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                            : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                        }`}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span
                        className={`text-sm sm:text-base font-medium transition-colors duration-200 ${
                          isOpen
                            ? "text-blue-600"
                            : "text-slate-800 group-hover:text-blue-600"
                        } break-words`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg transition-all duration-200 ${
                        isOpen
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white"
                          : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  <div
                    ref={(el) => {
                      if (el) contentRefs.current[index] = el;
                    }}
                    className="overflow-hidden transition-all duration-300 ease-in-out border-t border-blue-100"
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                    }}
                  >
                    <div className="px-5 sm:px-6 py-4 sm:py-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <p className="text-gray-700 mb-4 font-medium">
              Still have unanswered questions?
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
              Get In Touch With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
