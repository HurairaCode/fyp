import { useState } from 'react';
import { Link } from 'react-router-dom';

function AiChat() {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        setMessages(prev => [...prev, { text: inputMessage, isUser: true }]);

        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "To Boost Your Property Sales, Focus On Enhancing Your Property Listings With High-Quality Images And Detailed Descriptions. Leverage Targeted Social Media Ads And Collaborate With Local Influencers To Reach Potential Buyers. Additionally, Host Virtual Tours To Attract Remote Buyers.",
                isUser: false
            }]);
        }, 1000);

        setInputMessage('');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#1A1A2E]">
            {/* Menu integrated directly in AiChat */}
            <nav className="bg-[#1A1A2E] p-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {/* <img 
                            src="/spiral-logo.png" 
                            alt="Smart ChatBot" 
                            className="w-10 h-10"
                        /> */}
                        <span className="text-white text-xl font-bold tracking-wider">
                            SMART CHATBOT
                        </span>
                    </div>
                    
                    <div className="flex items-center space-x-12">
                        <Link to="/" className="text-white hover:text-purple-400 text-lg">
                            Home
                        </Link>
                        <Link to="/about" className="text-white hover:text-purple-400 text-lg">
                            About
                        </Link>
                        <Link to="/services" className="text-purple-500 hover:text-purple-400 text-lg">
                            Services
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Chat Section */}
            <div className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-full max-w-4xl flex flex-col flex-1">
                    <div className="flex-1 overflow-y-auto mb-4 p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`max-w-[80%] ${message.isUser ? 'ml-auto bg-purple-600' : 'bg-purple-900/50'} rounded-2xl p-4`}
                            >
                                <p className="text-white">{message.text}</p>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="relative mb-8">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Message Chatbot..."
                            className="w-full bg-purple-900/20 text-white placeholder-gray-400 rounded-full py-4 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="submit"
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition-colors"
                        >
                            <svg 
                                className="w-5 h-5 text-white transform rotate-90" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AiChat;