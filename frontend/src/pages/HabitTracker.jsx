import { useState } from 'react';
import { Plus, Target, Sparkles, TrendingUp } from 'lucide-react';
import './HabitTracker.css';

const HabitTracker = () => {
  const [habits, setHabits] = useState([]);

  return (
    <div className="habit-tracker-container fade-in">
      {/* Header */}
      <div className="habit-header">
        <div className="habit-header-content">
          <div className="habit-header-icon">
            <Target size={24} />
          </div>
          <div>
            <h1 className="habit-header-title">Theo Dõi Thói Quen</h1>
            <p className="habit-header-subtitle">
              Xây dựng và duy trì thói quen học tập tốt
            </p>
          </div>
        </div>
        <button className="habit-add-button">
          <Plus size={20} />
          <span>Thêm Thói Quen</span>
        </button>
      </div>

      {habits.length === 0 ? (
        <div className="habit-empty-state">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/50 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
          
          <div className="habit-empty-icon-wrapper">
            <div className="habit-empty-icon-glow"></div>
            <div className="habit-empty-icon">
              <Target size={64} />
              <Sparkles size={24} className="habit-empty-sparkle" />
            </div>
          </div>
          <h3 className="habit-empty-title">Chưa có thói quen nào</h3>
          <p className="habit-empty-description">
            Bắt đầu xây dựng thói quen học tập tốt ngay hôm nay và theo dõi tiến trình của bạn!
          </p>
          <button className="habit-empty-button">
            <Target size={20} />
            <span>Tạo Thói Quen Đầu Tiên</span>
          </button>
        </div>
      ) : (
        <div className="habits-grid">
          {/* Habits will be displayed here */}
        </div>
      )}
    </div>
  );
};

export default HabitTracker;

