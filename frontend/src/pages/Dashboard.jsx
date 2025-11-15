import { Link } from 'react-router-dom';
import { Calendar, Target, BookOpen, MessageSquare, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6 md:space-y-8 fade-in">
      {/* Header - Enhanced */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>
        <p className="text-base md:text-lg text-gray-600 ml-14">Tổng quan về hoạt động học tập của bạn</p>
      </div>

      {/* Quick Stats - Enhanced Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <div className="card bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-2 border-blue-200 hover:border-blue-400 group p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors truncate mb-1">Tiết học tuần này</p>
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">0</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 ml-3">
              <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-2 border-green-200 hover:border-green-400 group p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-200/30 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors truncate mb-1">Thói quen đang theo</p>
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">0</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 ml-3">
              <Target className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 via-purple-100 to-purple-50 border-2 border-purple-200 hover:border-purple-400 group p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200/30 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors truncate mb-1">Kế hoạch học tập</p>
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">0</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 ml-3">
              <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 border-2 border-orange-200 hover:border-orange-400 group p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200/30 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="relative flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 transition-colors truncate mb-1">XP Tổng cộng</p>
              <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">0</p>
            </div>
            <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex-shrink-0 ml-3">
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions - Enhanced Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions - Takes 2 columns on large screens */}
        <div className="lg:col-span-2 card p-5 md:p-6 bg-gradient-to-br from-white to-gray-50/50">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Thao tác nhanh
            </h2>
            <div className="hidden md:block w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/schedule"
              className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 hover:from-blue-100 hover:via-blue-200 hover:to-blue-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border-2 border-blue-200 hover:border-blue-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/10 to-blue-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-blue-700 transition-colors">Thêm tiết học</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <Link
              to="/habits"
              className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-green-50 via-green-100 to-green-50 hover:from-green-100 hover:via-green-200 hover:to-green-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border-2 border-green-200 hover:border-green-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-green-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-green-700 transition-colors">Tạo thói quen</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <Link
              to="/study-plan"
              className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 hover:from-purple-100 hover:via-purple-200 hover:to-purple-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border-2 border-purple-200 hover:border-purple-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/10 to-purple-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-purple-700 transition-colors">Kế hoạch học</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
            <Link
              to="/ai-questionnaire"
              className="group relative flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 hover:from-orange-100 hover:via-orange-200 hover:to-orange-100 rounded-xl transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-1 border-2 border-orange-200 hover:border-orange-400 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/10 to-orange-400/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center space-x-3">
                <div className="p-2.5 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-sm md:text-base text-gray-900 group-hover:text-orange-700 transition-colors">AI Tư vấn</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Welcome Card - Enhanced */}
        <div className="card p-5 md:p-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-2 border-indigo-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Chào mừng!
              </h2>
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-4 font-medium">
              Từ đây bạn có thể quản lý:
            </p>
            <ul className="space-y-3 text-sm md:text-base">
              {[
                { icon: '📅', text: 'Thời khóa biểu', color: 'text-blue-600' },
                { icon: '🎯', text: 'Thói quen học tập', color: 'text-green-600' },
                { icon: '📚', text: 'Kế hoạch cá nhân', color: 'text-purple-600' },
                { icon: '🤖', text: 'Tư vấn từ AI', color: 'text-orange-600' }
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-xl mr-3 group-hover:scale-125 transition-transform duration-200">{item.icon}</span>
                  <span className={`font-medium ${item.color} group-hover:translate-x-1 transition-transform duration-200`}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

