import { useState } from 'react';
import { BarChart3, Calendar, MessageSquare, PieChart, Settings, LineChart } from 'lucide-react';
import { Line, Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');

  // Pie Chart Data
  const pieData = {
    labels: ['Usage', 'Remaining', 'Active'],
    datasets: [
      {
        data: [81, 22, 62],
        backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
        borderWidth: 0,
      },
    ],
  };

  // Line Chart Data
  const lineData = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Orders',
        data: [30, 45, 25, 55, 20, 35, 45],
        borderColor: '#45B7D1',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // Yearly Comparison Data
  const yearlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: '2020',
        data: [20, 25, 15, 30, 20, 35, 25, 30, 20, 25, 20, 25],
        borderColor: '#45B7D1',
        tension: 0.4,
        fill: false,
      },
      {
        label: '2021',
        data: [15, 30, 25, 35, 20, 25, 30, 25, 30, 20, 35, 30],
        borderColor: '#FF6B6B',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  // Chat Map Data
  const chatMapData = {
    labels: ['Sun', 'Sun', 'Sun', 'Sun', 'Sun', 'Sun', 'Sun'],
    datasets: [
      {
        label: 'Chats',
        data: [50, 80, 40, 60, 50, 30, 60],
        backgroundColor: ['#FF6B6B', '#FFD93D', '#FF6B6B', '#FFD93D', '#FF6B6B', '#FFD93D', '#FF6B6B'],
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="flex min-h-screen bg-[#1A1A2E]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D2D64] p-6">
        <h1 className="text-2xl font-bold text-white mb-10">Smart Chatbot</h1>
        <nav className="space-y-6">
          <a href="#" className="flex items-center gap-3 text-white">
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white">
            <PieChart size={20} />
            <span>Analytics</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white">
            <LineChart size={20} />
            <span>Reviews</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white">
            <Calendar size={20} />
            <span>Calendar</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white">
            <MessageSquare size={20} />
            <span>Chat</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
            <p className="text-gray-400">Hi, Samantha. Welcome back to Sedap Admin!</p>
          </div>
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#2D2D64] text-white rounded-full px-4 py-2 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-white">
                <Settings size={20} />
              </button>
              <img
                src="https://ui-avatars.com/api/?name=Samantha&background=random"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Pie Charts */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Pie Chart</h3>
              <div className="flex items-center gap-2">
                <input type="checkbox" /> Chart
                <input type="checkbox" /> Show Value
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
              <Pie data={pieData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-xl p-6">
            <Line data={lineData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Yearly Comparison */}
          <div className="col-span-2 bg-white rounded-xl p-6 h-[300px]">
            <Line data={yearlyData} options={{ 
              maintainAspectRatio: false,
              responsive: true
            }} />
          </div>

          {/* Chat Map */}
          <div className="bg-white rounded-xl p-6 h-[300px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Chat Map</h3>
              <select className="bg-gray-100 rounded px-2 py-1">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <Bar data={chatMapData} options={{ 
              maintainAspectRatio: false,
              responsive: true
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;