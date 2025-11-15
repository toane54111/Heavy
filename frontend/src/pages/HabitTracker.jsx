import { useState } from 'react';
import { Plus, Target } from 'lucide-react';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Theo Dõi Thói Quen</h1>
          <p className="text-gray-600 mt-2">Xây dựng và duy trì thói quen học tập tốt</p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Thêm Thói Quen</span>
        </button>
      </div>

      {habits.length === 0 ? (
        <div className="card text-center py-12">
          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Chưa có thói quen nào
          </h3>
          <p className="text-gray-600 mb-6">
            Bắt đầu xây dựng thói quen học tập tốt ngay hôm nay!
          </p>
          <button className="btn-primary">
            Tạo Thói Quen Đầu Tiên
          </button>
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

