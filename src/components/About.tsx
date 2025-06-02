function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-purple-900 text-white p-8 flex items-center justify-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12">
                    About <span className="text-purple-500">Smart ChatBot</span>
                </h1>

                <div className="space-y-8 text-center">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">What is Smart ChatBot?</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Smart ChatBot is an advanced AI-powered conversational platform designed to revolutionize 
                            the way people interact with technology. Our chatbot combines cutting-edge artificial 
                            intelligence with natural language processing to provide human-like conversations and 
                            assistance.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Our Purpose</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We believe in making AI technology accessible to everyone. Our purpose is to simplify 
                            complex interactions and provide instant, accurate assistance to users across various 
                            domains. Whether you need help with customer service, technical support, or general 
                            information, Smart ChatBot is here to help.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                        <ul className="text-gray-300 space-y-2 list-none">
                            <li>Natural Language Understanding</li>
                            <li>24/7 Availability</li>
                            <li>Multi-language Support</li>
                            <li>Contextual Responses</li>
                            <li>Customizable Solutions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;