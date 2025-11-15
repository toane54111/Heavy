import { useState } from 'react';
import { Plus, Target, Sparkles, TrendingUp } from 'lucide-react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  return (
    <div className="space-y-6 md:space-y-8 fade-in">
      {/* Header - Enhanced */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Theo Dõi Thói Quen
            </h1>
          </div>
          <p className="text-base md:text-lg text-gray-600 ml-14">
            Xây dựng và duy trì thói quen học tập tốt
          </p>
        </div>
        <button className="group relative flex items-center justify-center space-x-2 px-5 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
          <Plus className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-300" />
          <span className="relative z-10">Thêm Thói Quen</span>
        </button>
      </div>

      {habits.length === 0 ? (
        <div className="card text-center py-16 md:py-20 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative p-6 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full shadow-2xl">
                  <Target className="w-16 h-16 text-white" />
                  <Sparkles className="w-6 h-6 text-yellow-300 absolute -top-1 -right-1 animate-ping" />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              Chưa có thói quen nào
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-md mx-auto">
              Bắt đầu xây dựng thói quen học tập tốt ngay hôm nay và theo dõi tiến trình của bạn!
            </p>
            <button className="group relative inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <Target className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Tạo Thói Quen Đầu Tiên</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Habits will be displayed here */}
        </div>
      )}
    </div>
  );
};

export default HabitTracker;

