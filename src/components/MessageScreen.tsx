import { useState, useEffect } from 'react';
import { MessageSquare, Search, MoreVertical, Send, Share, Image, Mic, Info, MapPin, Clock, Settings2, Users, ClipboardList, ShoppingBag, UserCircle2, Eye, FileText, Trash } from 'lucide-react';

function MessageScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [activeMessageMenu, setActiveMessageMenu] = useState<number | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (activeMessageMenu !== null) {
                setActiveMessageMenu(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeMessageMenu]);

    const handleLogout = () => {
        // Add your logout logic here
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <div className="flex h-screen bg-[#0A0A1B]">
            {/* Column 1: Navigation Icons */}
            <div className="w-[70px] bg-[#1E1E3F] flex flex-col items-center py-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mb-10 flex items-center justify-center">
                    <MessageSquare size={24} className="text-white" />
                </div>
                <div className="flex flex-col items-center space-y-8">
                    <MessageSquare size={24} className="text-white" />
                    <Users size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <ClipboardList size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <ShoppingBag size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    {/* Add profile toggle button */}
                    <UserCircle2 
                        size={24} 
                        className={`cursor-pointer transition-colors ${isProfileOpen ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    />
                </div>
                <div className="mt-auto">
                    <Settings2 size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Column 2: Contact List */}
            <div className="w-[280px] bg-[#1E1E3F] border-x border-purple-900/30">
                <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-white text-xl">Contact</h1>
                        <button className="p-2">
                            <MoreVertical className="text-white" size={20} />
                        </button>
                    </div>

                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search username..."
                            className="w-full bg-[#2D2D64] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2.5 focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-400 text-xs uppercase">Contact</span>
                        <button className="text-gray-400 hover:bg-[#2D2D64] p-1 rounded">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-2">
                        {['Ralph Edwards', 'Cody Fisher', 'Esther Howard', 'Annette Black', 'Darrell Steward'].map((name, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <img 
                                    src={`https://ui-avatars.com/api/?name=${name}&background=random`}
                                    alt={name}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <p className="text-white">{name}</p>
                                    <p className="text-sm text-gray-400">Last connect 8 minutes ago</p>
                                </div>
                                {index < 2 && (
                                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Column 3: Chat Area */}
            <div className="flex-1 flex flex-col bg-[#0A0A1B]">
                {/* Chat Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1E1E3F] border-b border-purple-900/30">
                    <div className="flex items-center gap-3">
                        <img 
                            src="https://ui-avatars.com/api/?name=Cody+Fisher&background=random"
                            alt="Cody Fisher"
                            className="w-10 h-10 rounded-full"
                        />
                        <span className="text-white">AbuHuraira</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button 
                            className="text-gray-400 hover:text-white"
                            onClick={handleLogout}
                        >
                            <Share size={20} />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <Image size={20} />
                        </button>
                        <button className="text-gray-400 hover:text-white">
                            <Mic size={20} />
                        </button>
                    </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    <div className="text-center">
                        <span className="text-gray-400 text-sm">09:32 YESTERDAY</span>
                    </div>

                    {/* User Message with Error */}
                    <div className="flex justify-end">
                        <div className="max-w-[60%] bg-blue-500 rounded-xl p-3 relative">
                            <p className="text-white">I got stuck on a logic problem and wasted the whole day</p>
                            <div className="flex items-center justify-end gap-2 mt-1">
                                <button 
                                    className="text-white/70 relative"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveMessageMenu(activeMessageMenu === 1 ? null : 1);
                                    }}
                                >
                                    <MoreVertical size={16} />
                                    {activeMessageMenu === 1 && (
                                        <div className="absolute bottom-full right-0 mb-1 bg-[#2D2D64] rounded-lg shadow-lg py-1 min-w-[120px]">
                                            <button className="w-full flex items-center gap-2 px-3 py-2 text-white hover:bg-[#3D3D74] text-sm text-left">
                                                <Eye size={16} /> Hide
                                            </button>
                                            <button className="w-full flex items-center gap-2 px-3 py-2 text-white hover:bg-[#3D3D74] text-sm text-left">
                                                <FileText size={16} /> Summarize
                                            </button>
                                            <button className="w-full flex items-center gap-2 px-3 py-2 text-red-400 hover:bg-[#3D3D74] text-sm text-left">
                                                <Trash size={16} /> Delete
                                            </button>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bot Messages */}
                    <div className="space-y-2">
                        <div className="flex justify-start">
                            <div className="max-w-[60%] bg-[#2D2D64] rounded-xl p-3">
                                <p className="text-white">Rhoncus risus purus cursus turpis in aliquet enim dui.</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className="max-w-[60%] bg-[#2D2D64] rounded-xl p-3">
                                <p className="text-white">Egestas nibh ut sem gravida risus. Leo mattis risus est odio ut leo amet ultricies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Location and Files */}
                    <div className="flex justify-start gap-2">
                        <div className="grid grid-cols-4 gap-2 max-w-[60%]">
                            <div className="bg-[#2D2D64] rounded-lg p-2 aspect-square"></div>
                            <div className="bg-[#2D2D64] rounded-lg p-2 aspect-square"></div>
                            <div className="bg-[#2D2D64] rounded-lg p-2 aspect-square"></div>
                            <div className="bg-[#2D2D64] rounded-lg p-2 aspect-square"></div>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#1E1E3F] border-t border-purple-900/30">
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Write a message"
                            value={messageInput}
                            onChange={(e) => setMessageInput(e.target.value)}
                            className="flex-1 bg-[#2D2D64] text-white placeholder-gray-400 rounded-lg px-4 py-2.5 focus:outline-none"
                        />
                        <button className="p-2 hover:bg-[#2D2D64] rounded-lg">
                            <Image className="text-gray-400" size={20} />
                        </button>
                        <button className="p-2 hover:bg-[#2D2D64] rounded-lg">
                            <Mic className="text-gray-400" size={20} />
                        </button>
                        <button className="bg-purple-600 p-2 rounded-lg">
                            <Send className="text-white" size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Column 4: User Info - Now toggleable */}
            <div className={`w-[300px] bg-[#1E1E3F] border-l border-purple-900/30 transition-all duration-300 ${isProfileOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-0 h-full overflow-y-auto`}>
                <div className="p-6">
                    <div className="flex flex-col items-center mb-8">
                        <img 
                            src="https://ui-avatars.com/api/?name=Cody+Fisher&size=128&background=random"
                            alt="Cody Fisher"
                            className="w-20 h-20 rounded-full mb-3"
                        />
                        <h3 className="text-white font-medium">Cody Fisher</h3>
                        <p className="text-sm text-gray-400">Last connect 8 minutes ago</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-gray-400 text-xs uppercase mb-3">ABOUT USER</h4>
                            <button className="w-full text-left text-white p-3 hover:bg-[#2D2D64] rounded-lg flex items-center justify-between">
                                <span>About conversation</span>
                                <Info size={18} className="text-gray-400" />
                            </button>
                        </div>

                        <div>
                            <h4 className="text-gray-400 text-xs uppercase mb-3">FILE AND MEDIA</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="aspect-square bg-[#2D2D64] rounded-lg"></div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                                    <Clock size={16} />
                                    <span>09:32 24 FEBRUARY</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin size={16} />
                                    <span>2464 Royal Ln. Mesa</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <button className="w-full text-left text-white p-3 hover:bg-[#2D2D64] rounded-lg">
                                Privacy and settings
                            </button>
                            <button className="w-full text-left text-white p-3 hover:bg-[#2D2D64] rounded-lg">
                                Report
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageScreen;
