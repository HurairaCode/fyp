import { useState } from 'react';
import { MessageSquare, Users, ClipboardList, ShoppingBag, Settings2, Search } from 'lucide-react';

interface Contact {
    id: number;
    name: string;
    lastConnected: string;
    avatar: string;
    isOnline: boolean;
    unreadCount?: number;
}

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [contacts] = useState<Contact[]>([
        {
            id: 1,
            name: "Ralph Edwards",
            lastConnected: "8 minutes ago",
            avatar: "https://ui-avatars.com/api/?name=Ralph+Edwards&background=random",
            isOnline: true
        },
        {
            id: 2,
            name: "Cody Fisher",
            lastConnected: "8 minutes ago",
            avatar: "https://ui-avatars.com/api/?name=Cody+Fisher&background=random",
            isOnline: true,
            unreadCount: 3
        },
        {
            id: 3,
            name: "Esther Howard",
            lastConnected: "8 minutes ago",
            avatar: "https://ui-avatars.com/api/?name=Esther+Howard&background=random",
            isOnline: false
        },
        {
            id: 4,
            name: "Annette Black",
            lastConnected: "8 minutes ago",
            avatar: "https://ui-avatars.com/api/?name=Annette+Black&background=random",
            isOnline: true
        },
        {
            id: 5,
            name: "Darrell Steward",
            lastConnected: "8 minutes ago",
            avatar: "https://ui-avatars.com/api/?name=Darrell+Steward&background=random",
            isOnline: false
        }
    ]);

    return (
        <div className="flex min-h-screen bg-[#0A0A1B]">
            {/* Left Icons Bar */}
            <div className="w-[70px] bg-[#1E1E3F] flex flex-col items-center py-6 border-r border-purple-900/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mb-10 flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                </div>
                <div className="flex flex-col items-center space-y-8">
                    <MessageSquare size={24} className="text-white" />
                    <Users size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <ClipboardList size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <ShoppingBag size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                <div className="mt-auto">
                    <Settings2 size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Contact List */}
            <div className="w-[300px] bg-[#1E1E3F] p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-white text-2xl font-semibold">Contact</h1>
                    <button className="text-white bg-purple-600/20 p-2 rounded-lg">
                        <MessageSquare size={20} />
                    </button>
                </div>

                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search username..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#2D2D64] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none"
                    />
                </div>

                <div>
                    <div className="flex items-center justify-between text-gray-400 mb-4">
                        <span className="text-xs uppercase">Contact</span>
                        <button className="hover:bg-purple-600/20 p-1 rounded">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-2">
                        {contacts.map(contact => (
                            <div key={contact.id} className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <div className="relative">
                                    <img 
                                        src={contact.avatar}
                                        alt={contact.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    {contact.isOnline && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1E1E3F]"></div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="text-white">{contact.name}</p>
                                    <p className="text-sm text-gray-400">Last connect {contact.lastConnected}</p>
                                </div>
                                {contact.unreadCount && (
                                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {contact.unreadCount}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0A0A1B]">
                {/* Your chat or content area will go here */}
            </div>
        </div>
    );
}

export default Home;