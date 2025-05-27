import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle password reset logic here
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-purple-900 text-white flex items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">Forgot Password</h1>
                    <p className="text-gray-300">
                        {!isSubmitted 
                            ? "Enter your email and we'll send you instructions to reset your password"
                            : "Password reset instructions have been sent to your email"
                        }
                    </p>
                </div>

                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div>
                            <label className="text-white block mb-2">Email address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
                        >
                            Send Reset Instructions
                        </button>

                        <div className="text-center">
                            <Link 
                                to="/login" 
                                className="text-purple-500 hover:text-purple-400 transition-colors"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </form>
                ) : (
                    <div className="mt-8 text-center space-y-6">
                        <div className="text-green-500 text-xl">
                            ✓ Reset instructions sent successfully
                        </div>
                        <Link 
                            to="/login"
                            className="block bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-colors"
                        >
                            Return to Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;