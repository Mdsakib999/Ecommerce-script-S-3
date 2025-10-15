import loginImage from "../../assets/loginImage.jpg";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import googleLogo from "../../assets/googleLogo.png";
import { useLoginMutation } from "../../redux/app/services/auth/authApi";
import toast from "react-hot-toast";
import Logo from "../../components/shared/Logo";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    window.open(`${import.meta.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error) {
      toast.error(<h1 className="font-serif">{error}</h1>, {
        position: "bottom-right",
      });

      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.success) {
        toast.success(<p className="font-serif">Logged in successfully</p>, {
          position: "bottom-right",
        });
        navigate("/");
      }
    } catch (err) {
      const errorMessage =
        err?.data?.message || err?.message || "Something went wrong";

      if (errorMessage === "Password does not match") {
        toast.error(<h1 className="font-serif">Invalid credentials</h1>, {
          position: "bottom-right",
        });
      } else if (errorMessage === "User is not verified") {
        toast.error(
          <h1 className="font-serif">Your account is not verified</h1>,
          {
            position: "bottom-right",
          }
        );
      } else if (
        errorMessage === "You have authenticated through Google login!"
      ) {
        toast.error(
          <h1 className="font-serif">You are authenticated through Google!</h1>,
          {
            position: "bottom-right",
          }
        );
      } else {
        toast.error(<h1 className="font-serif">{errorMessage}</h1>, {
          position: "bottom-right",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12 px-4">
      <div className="hidden lg:block absolute inset-0">
        <img
          src={loginImage}
          alt="Shop background"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-slate-700/40"></div>
      </div>

      <div className="relative w-full max-w-xl mx-auto">
        <div className="py-16 rounded-2xl flex items-center justify-center bg-white">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-3 mb-6">
              <Logo w="14" />
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  Welcome back
                </h2>
                <p className="text-sm text-slate-500">
                  Sign in to continue to shopzy
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow shadow-sm"
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className="w-full border border-slate-200 rounded-lg p-3 pr-12 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-shadow shadow-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  <label htmlFor="remember" className="text-sm text-slate-600">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/"
                  className="text-sm text-emerald-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div> */}

              <div className="space-y-3">
                <button
                  disabled={isLoading || isGoogleLoading}
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold text-white transition-shadow ${
                    isLoading
                      ? "bg-emerald-300 cursor-not-allowed"
                      : "bg-emerald-600 hover:bg-emerald-700 shadow-md"
                  }`}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>

                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  disabled={isGoogleLoading || isLoading}
                  className={`flex items-center justify-center gap-3 w-full py-3 rounded-lg border transition-colors ${
                    isGoogleLoading
                      ? "bg-slate-100 cursor-not-allowed text-slate-400 border-slate-200"
                      : "bg-white text-slate-700 border-slate-200 hover:shadow-sm"
                  }`}
                >
                  <img src={googleLogo} alt="google" className="w-5 h-5" />
                  <span>
                    {isGoogleLoading ? "Processing..." : "Continue with Google"}
                  </span>
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-slate-600 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-emerald-600 font-semibold hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
