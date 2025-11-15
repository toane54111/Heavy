import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link 
            to="/dashboard" 
            className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative p-2 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all duration-300">
                <BookOpen className="w-6 h-6 text-white" />
                <Sparkles className="w-3 h-3 text-yellow-300 absolute -top-0.5 -right-0.5 animate-pulse" />
              </div>
            </div>
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700 transition-all duration-300">
              Student Tracker
            </span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-transparent hover:border-gray-200 relative overflow-hidden group"
            >
              <span className="relative z-10">Đăng nhập</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Link>
            <Link 
              to="/register" 
              className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 overflow-hidden group"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10">Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

