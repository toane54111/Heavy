import { Link } from 'react-router-dom';
import { Calendar, Target, BookOpen, MessageSquare, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-4 md:space-y-6 fade-in">
      {/* Header - Compact */}
      <div className="mb-4">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="p-1.5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
        </div>
        <p className="text-sm md:text-base text-gray-600 ml-11">Tổng quan về hoạt động học tập của bạn</p>
      </div>

      {/* Quick Stats - Compact Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200 hover:border-blue-400 group p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-blue-200/20 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="relative flex flex-col">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Tiết học tuần này</p>
            <div className="flex items-end justify-between">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">0</p>
              <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200 hover:border-green-400 group p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-green-200/20 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="relative flex flex-col">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Thói quen đang theo</p>
            <div className="flex items-end justify-between">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">0</p>
              <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm">
                <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200 hover:border-purple-400 group p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-purple-200/20 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="relative flex flex-col">
            <p className="text-xs font-medium text-gray-600 mb-1.5">Kế hoạch học tập</p>
            <div className="flex items-end justify-between">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">0</p>
              <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-sm">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-br from-orange-50 to-orange-100/50 border border-orange-200 hover:border-orange-400 group p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200/20 rounded-full blur-xl -mr-8 -mt-8"></div>
          <div className="relative flex flex-col">
            <p className="text-xs font-medium text-gray-600 mb-1.5">XP Tổng cộng</p>
            <div className="flex items-end justify-between">
              <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">0</p>
              <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-sm">
                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Quick Actions */}
        <div className="lg:col-span-2 card p-4 md:p-5 bg-gradient-to-br from-white to-gray-50/50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              Thao tác nhanh
            </h2>
            <div className="hidden md:block w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/schedule"
              className="group flex items-center justify-between p-3.5 bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200 rounded-lg transition-all duration-200 hover:shadow-md border border-blue-200 hover:border-blue-400"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-sm">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-sm md:text-base text-gray-900">Thêm tiết học</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/habits"
              className="group flex items-center justify-between p-3.5 bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-200 rounded-lg transition-all duration-200 hover:shadow-md border border-green-200 hover:border-green-400"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-sm">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-sm md:text-base text-gray-900">Tạo thói quen</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/study-plan"
              className="group flex items-center justify-between p-3.5 bg-gradient-to-r from-purple-50 to-purple-100/50 hover:from-purple-100 hover:to-purple-200 rounded-lg transition-all duration-200 hover:shadow-md border border-purple-200 hover:border-purple-400"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-sm">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-sm md:text-base text-gray-900">Kế hoạch học</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/ai-questionnaire"
              className="group flex items-center justify-between p-3.5 bg-gradient-to-r from-orange-50 to-orange-100/50 hover:from-orange-100 hover:to-orange-200 rounded-lg transition-all duration-200 hover:shadow-md border border-orange-200 hover:border-orange-400"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-sm">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium text-sm md:text-base text-gray-900">AI Tư vấn</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="card p-4 md:p-5 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border border-indigo-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-200/15 rounded-full blur-2xl -mr-12 -mt-12"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-1.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Chào mừng!
              </h2>
            </div>
            <p className="text-xs md:text-sm text-gray-700 mb-3 font-medium">
              Từ đây bạn có thể quản lý:
            </p>
            <ul className="space-y-2 text-xs md:text-sm">
              {[
                { icon: '📅', text: 'Thời khóa biểu', color: 'text-blue-600' },
                { icon: '🎯', text: 'Thói quen học tập', color: 'text-green-600' },
                { icon: '📚', text: 'Kế hoạch cá nhân', color: 'text-purple-600' },
                { icon: '🤖', text: 'Tư vấn từ AI', color: 'text-orange-600' }
              ].map((item, index) => (
                <li key={index} className="flex items-center group">
                  <span className="text-base mr-2.5">{item.icon}</span>
                  <span className={`font-medium ${item.color}`}>{item.text}</span>
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

