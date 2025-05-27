import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-purple-900 text-white flex items-center justify-center">
            {/* Hero Section */}
            <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-purple-500">Transform Your Real Chats With</span>
                    <br />
                    <span className="text-white">SMART CHATBOT</span>
                </h1>

                <div className="max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-300 mb-4">
                        Streamline Your Chats With Tailored Advice From Specialized
                        <span className="text-purple-500"> AI Chatbots</span>
                    </p>
                    <p className="text-md md:text-lg text-gray-400 mb-8">
                        Unlock Smarter, Faster Interactions Today!
                    </p>
                </div>

                <Link 
                    to="/signup" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                    GET STARTED
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;