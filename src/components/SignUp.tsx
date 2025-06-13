import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase_client } from "../utils/supabase.ts";
import toast from "react-hot-toast";
function SignUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from reloading the page

    const form = e.currentTarget; // `e.currentTarget` is better typed than `e.target`
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const { data, error } = await supabase_client.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Signup error:", error.message);
      toast.error(error.message); // Optional: show error toast
    } else {
      setShowPopup(true);
      console.log("Signup success:", data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A2E] to-purple-900 p-4">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Smart ChatBot</h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="text-white block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-white block mb-2">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              required
            />
            <label className="ml-2 text-sm text-gray-300">
               to the terms & policy
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Signup
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#1A1A2E] text-gray-300">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-purple-700 transition-colors"
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-purple-700 transition-colors"
            >
              <img
                src="https://www.apple.com/favicon.ico"
                alt="Apple"
                className="w-5 h-5 mr-2"
              />
              Sign in with Apple
            </button>
          </div>

          <p className="text-center text-gray-300">
            Have an account?{" "}
            <Link to="/login" className="text-red-500 hover:text-red-400">
              Login
            </Link>
          </p>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Confirmation Sent
            </h2>
            <p className="text-gray-600 mb-4">
              Please check your email and click the link to confirm your
              account.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
