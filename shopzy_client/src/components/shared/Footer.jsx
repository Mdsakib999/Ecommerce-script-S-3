import {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/footerLogo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section - Takes more space */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <img src={logo} className="w-24" alt="zylocart logo" />
            </Link>
            <div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in online shopping since 2026. We deliver
                quality products with exceptional service.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <span>support@zylocart.com</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>123 Commerce Street, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h6 className="font-semibold mb-4 text-base uppercase tracking-wider text-gray-300">
              Shop
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-2">
            <h6 className="font-semibold mb-4 text-base uppercase tracking-wider text-gray-300">
              Customer Service
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h6 className="font-semibold mb-4 text-base uppercase tracking-wider text-gray-300">
              Company
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h6 className="font-semibold mb-4 text-base uppercase tracking-wider text-gray-300">
              Legal
            </h6>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-2xl w-full mx-auto">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for exclusive offers and latest
              updates.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium text-sm rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © 2025 ZyloCart Ltd. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-200 rounded-full p-2"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-red-600 text-gray-400 hover:text-white transition-all duration-200 rounded-full p-2"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-blue-400 text-gray-400 hover:text-white transition-all duration-200 rounded-full p-2"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-pink-600 text-gray-400 hover:text-white transition-all duration-200 rounded-full p-2"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Secure Payment:</span>
              <div className="flex gap-x-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-200 shadow-sm shadow-white">
                  VISA
                </div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-200 shadow-sm shadow-white">
                  MC
                </div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-200 shadow-sm shadow-white">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
