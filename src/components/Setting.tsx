import { useState } from 'react';
import { Bell, User2, Volume2, CreditCard, MessageSquare, ShieldAlert, Home, Settings as SettingsIcon, LogOut, Menu } from 'lucide-react';

function Setting() {
    const [searchQuery, setSearchQuery] = useState('');
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [notificationOffTime, setNotificationOffTime] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#0A0A1B] relative">
            {/* Mobile Menu Button */}
            <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden fixed top-4 left-4 z-50 text-white p-2 rounded-lg bg-purple-600"
            >
                <Menu size={24} />
            </button>

            {/* Icons Bar */}
            <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative w-[70px] bg-[#1E1E3F] flex flex-col items-center py-6 border-r border-purple-900/30 min-h-screen sticky top-0 transition-transform duration-300 z-40`}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 mb-10 flex items-center justify-center">
                    <SettingsIcon size={24} className="text-white" />
                </div>
                <div className="flex flex-col items-center space-y-8">
                    <Home size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <Bell size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <User2 size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                    <MessageSquare size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
                <div className="mt-auto">
                    <LogOut size={24} className="text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>

            {/* Left Sidebar */}
            <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0  md:relative w-[260px] bg-[#1E1E3F] p-6 min-h-screen sticky top-0 overflow-y-auto transition-transform duration-300 z-30`}>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600"></div>
                    <h1 className="text-white text-xl font-semibold">Settings</h1>
                </div>

                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Settings name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-[#2D2D64] text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                </div>

                <div className="space-y-6">
                    {/* Account Section */}
                    <div>
                        <h2 className="text-gray-400 text-xs uppercase mb-2">ACCOUNT</h2>
                        <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                            <img src="https://ui-avatars.com/api/?name=Leslie+Alexander&background=random" 
                                 alt="Leslie Alexander" 
                                 className="w-10 h-10 rounded-full" 
                            />
                            <div>
                                <p className="text-white">Leslie Alexander</p>
                                <p className="text-sm text-gray-400">View profile detail</p>
                            </div>
                        </div>
                    </div>

                    {/* Notification Section */}
                    <div>
                        <h2 className="text-gray-400 text-xs uppercase mb-2">NOTIFICATION</h2>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <Bell size={20} className="text-white" />
                                <span className="text-white">Notification</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <Volume2 size={20} className="text-white" />
                                <span className="text-white">Sound</span>
                            </div>
                        </div>
                    </div>

                    {/* Others Section */}
                    <div>
                        <h2 className="text-gray-400 text-xs uppercase mb-2">OTHERS</h2>
                        <div className="space-y-1">
                            <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <CreditCard size={20} className="text-white" />
                                <span className="text-white">Payment Method</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <MessageSquare size={20} className="text-white" />
                                <span className="text-white">Message Control Hub</span>
                            </div>
                            <div className="flex items-center gap-3 p-2 hover:bg-[#2D2D64] rounded-lg cursor-pointer">
                                <ShieldAlert size={20} className="text-white" />
                                <span className="text-white">Block Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10 bg-[#0A0A1B] ml-0 md:ml-[330px]">
                <div className="max-w-4xl">
                    <div className="mb-10">
                        <h2 className="text-2xl text-white font-semibold mb-1">Notification</h2>
                        <p className="text-gray-400">Last update 5 months ago</p>
                    </div>

                    <div>
                        <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6">TAB NAME</h3>
                        
                        <div className="space-y-6">
                            {/* Sound Notification Toggle */}
                            <div className="bg-[#1E1E3F] p-6 rounded-2xl">
                                <div className="flex justify-between items-start gap-8">
                                    <div>
                                        <h4 className="text-white text-lg font-medium mb-3">Sound Notification</h4>
                                        <p className="text-gray-400 leading-relaxed">
                                            Dolor semper sit vel pretium ut dictum massa egestas. Egestas nibh tristique commodo nec suscipit morbi interdum semper cursus. In at egestas feugiat et.
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                        <input
                                            type="checkbox"
                                            checked={soundEnabled}
                                            onChange={() => setSoundEnabled(!soundEnabled)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-14 h-7 bg-gray-700 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all"></div>
                                    </label>
                                </div>
                            </div>

                            {/* Notification Off Time Toggle */}
                            <div className="bg-[#1E1E3F] p-4 md:p-6 rounded-xl">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h4 className="text-white text-lg mb-2">Notification off time</h4>
                                        <p className="text-gray-400 text-sm md:text-base max-w-2xl">
                                            Dolor semper sit vel pretium ut dictum massa egestas. Egestas nibh tristique commodo nec suscipit morbi interdum semper cursus. In at egestas feugiat et.
                                        </p>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={notificationOffTime}
                                            onChange={() => setNotificationOffTime(!notificationOffTime)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-purple-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
}

export default Setting;