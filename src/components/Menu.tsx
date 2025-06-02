import { useState } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#1A1A2E] text-white p-4 fixed w-full top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    {/* <img 
                        src="/logo.png" 
                        alt="Smart ChatBot" 
                        className="w-10 h-10"
                    /> */}
                    <span className="text-xl font-bold tracking-wider">SMART CHATBOT</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-purple-500 hover:text-purple-400 transition">Home</Link>
                    <Link to="/about" className="text-white hover:text-purple-400 transition">About</Link>
                    <Link to="/contact" className="text-white hover:text-purple-400 transition">Contact Us</Link>
                    <Link to="/login" className="px-4 py-2 border border-purple-700 rounded-lg hover:bg-purple-700 transition">Log In</Link>
                    <Link to="/signup" className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">Sign Up</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#1A1A2E] p-4 space-y-4">
                    <Link to="/" className="block text-purple-500 hover:text-purple-400 py-2">Home</Link>
                    <Link to="/about" className="block text-white hover:text-purple-400 py-2">About</Link>
                    <Link to="/contact" className="block text-white hover:text-purple-400 py-2">Contact Us</Link>
                    <Link to="/login" className="block text-white hover:text-purple-400 py-2">Log In</Link>
                    <Link to="/signup" className="block text-white hover:text-purple-400 py-2">Sign Up</Link>
                </div>
            )}
        </nav>
    );
}

export default Menu;