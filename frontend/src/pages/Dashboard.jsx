import { Link } from 'react-router-dom';
import { Calendar, Target, BookOpen, MessageSquare, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Tổng quan về hoạt động học tập của bạn</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card bg-blue-50 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Tiết học tuần này</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </div>
            <Calendar className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="card bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Thói quen đang theo</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </div>
            <Target className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <div className="card bg-purple-50 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Kế hoạch học tập</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </div>
            <BookOpen className="w-10 h-10 text-purple-600" />
          </div>
        </div>

        <div className="card bg-orange-50 border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">XP Tổng cộng</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">0</p>
            </div>
            <TrendingUp className="w-10 h-10 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Thao tác nhanh</h2>
          <div className="space-y-3">
            <Link
              to="/schedule"
              className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-900">Thêm tiết học mới</span>
            </Link>
            <Link
              to="/habits"
              className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
            >
              <Target className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-900">Tạo thói quen mới</span>
            </Link>
            <Link
              to="/study-plan"
              className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
            >
              <BookOpen className="w-5 h-5 text-purple-600" />
              <span className="font-medium text-gray-900">Xem kế hoạch học tập</span>
            </Link>
            <Link
              to="/ai-questionnaire"
              className="flex items-center space-x-3 p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
            >
              <MessageSquare className="w-5 h-5 text-orange-600" />
              <span className="font-medium text-gray-900">Nhận tư vấn từ AI</span>
            </Link>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Chào mừng!</h2>
          <p className="text-gray-600 mb-4">
            Đây là trang Dashboard của bạn. Từ đây bạn có thể quản lý:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✅ Thời khóa biểu và lịch học</li>
            <li>✅ Thói quen học tập hàng ngày</li>
            <li>✅ Kế hoạch học tập cá nhân</li>
            <li>✅ Nhận tư vấn từ AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

