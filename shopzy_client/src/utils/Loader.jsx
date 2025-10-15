import { ShoppingCart } from "lucide-react";

export default function Loader() {
  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="flex flex-col items-center space-y-8">
        {/* Animated shopping journey */}
        <div className="relative w-24 h-24">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-blue-100 opacity-30"></div>

          {/* Rotating outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-300 animate-spin"></div>

          {/* Inner rotating ring */}
          <div
            className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-400 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>

          {/* Center icon with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <ShoppingCart className="w-10 h-10 text-blue-600" />
              <div className="absolute inset-0 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Main loading text */}
        <div className="text-center space-y-2">
          <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Preparing your Shop
          </p>
          <p className="text-sm text-blue-600 font-medium">
            Finding the best deals for you...
          </p>
        </div>

        {/* Animated progress steps */}
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-white rounded-full shadow-sm border border-blue-200">
            <ShoppingCart
              className="w-4 h-4 text-blue-600 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <span className="text-xs text-blue-700 font-medium">Loading</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
