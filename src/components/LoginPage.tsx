// LoginPage.tsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from "../utils/supabaseClient";

function LoginPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg(null);

        const { email, password } = formData;

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            setErrorMsg(error.message);
        } else {
            // ✅ Store login status to restrict direct access without login
            localStorage.setItem("isAuthenticated", "true");

            navigate('/messages');
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if (error) throw error;
        } catch (error: any) {
            console.error('Google sign-in error:', error.message);
        }
    };

    const handleAppleSignIn = async () => {
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'apple',
            });
            if (error) throw error;
        } catch (error: any) {
            console.error('Apple sign-in error:', error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A1A2E] to-purple-900 p-4">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Smart ChatBot</h1>
                    <p className="text-gray-300">Enter your Credentials to access your account</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {errorMsg && (
                        <div className="bg-red-500 text-white p-2 rounded mb-4">{errorMsg}</div>
                    )}

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
                        <div className="text-right mt-2">
                            <Link to="/forgot-password" className="text-sm text-gray-300 hover:text-purple-400">
                                forgot password
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                        />
                        <label className="ml-2 text-sm text-gray-300">Remember for 30 days</label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-purple-700 transition-colors"
                        >
                            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>
                        <button
                            type="button"
                            onClick={handleAppleSignIn}
                            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-white hover:bg-purple-700 transition-colors"
                        >
                            <img src="https://www.apple.com/favicon.ico" alt="Apple" className="w-5 h-5 mr-2" />
                            Sign in with Apple
                        </button>
                    </div>

                    <p className="text-center text-gray-300 mt-4">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-red-500 hover:text-red-400">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
