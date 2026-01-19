import { MapPin } from "lucide-react";
import { Link, useLocation } from "react-router";

export default function SubHeader() {
  const { pathname } = useLocation();

  const links = [
    { to: "/products", label: "All Products" },
    { to: "/about", label: "About" },
    { to: "/track-order", label: "Track Order" },
    { to: "/faq", label: "Faq" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Deliver to</span>
            <span className="text-gray-800 font-semibold">Chattogram 4000</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-gray-600">
            {links.map((link) => {
              const isActive =
                pathname === link.to || pathname.startsWith(link.to + "/");
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`transition-colors duration-200 font-medium p-2 rounded-md ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
