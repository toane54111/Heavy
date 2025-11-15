import { Link } from 'react-router-dom';
import { Calendar, Target, BookOpen, MessageSquare, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container fade-in">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-header-icon">
          <Sparkles size={24} />
        </div>
        <div>
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Tổng quan về hoạt động học tập của bạn</p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card blue">
          <div className="stat-label">Tiết học tuần này</div>
          <div className="stat-value blue">
            <span>0</span>
            <div className="stat-icon blue">
              <Calendar size={24} />
            </div>
          </div>
        </div>

        <div className="stat-card green">
          <div className="stat-label">Thói quen đang theo</div>
          <div className="stat-value green">
            <span>0</span>
            <div className="stat-icon green">
              <Target size={24} />
            </div>
          </div>
        </div>

        <div className="stat-card purple">
          <div className="stat-label">Kế hoạch học tập</div>
          <div className="stat-value purple">
            <span>0</span>
            <div className="stat-icon purple">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        <div className="stat-card orange">
          <div className="stat-label">XP Tổng cộng</div>
          <div className="stat-value orange">
            <span>0</span>
            <div className="stat-icon orange">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="content-grid">
        {/* Quick Actions */}
        <div className="quick-actions-card">
          <div className="quick-actions-header">
            <h2 className="quick-actions-title">Thao tác nhanh</h2>
            <div className="quick-actions-divider"></div>
          </div>
          <div className="quick-actions-grid">
            <Link to="/schedule" className="quick-action-item blue">
              <div className="quick-action-content">
                <div className="quick-action-icon-wrapper blue">
                  <Calendar size={20} />
                </div>
                <span className="quick-action-text">Thêm tiết học</span>
              </div>
              <ArrowRight size={20} className="quick-action-arrow" />
            </Link>
            <Link to="/habits" className="quick-action-item green">
              <div className="quick-action-content">
                <div className="quick-action-icon-wrapper green">
                  <Target size={20} />
                </div>
                <span className="quick-action-text">Tạo thói quen</span>
              </div>
              <ArrowRight size={20} className="quick-action-arrow" />
            </Link>
            <Link to="/study-plan" className="quick-action-item purple">
              <div className="quick-action-content">
                <div className="quick-action-icon-wrapper purple">
                  <BookOpen size={20} />
                </div>
                <span className="quick-action-text">Kế hoạch học</span>
              </div>
              <ArrowRight size={20} className="quick-action-arrow" />
            </Link>
            <Link to="/ai-questionnaire" className="quick-action-item orange">
              <div className="quick-action-content">
                <div className="quick-action-icon-wrapper orange">
                  <MessageSquare size={20} />
                </div>
                <span className="quick-action-text">AI Tư vấn</span>
              </div>
              <ArrowRight size={20} className="quick-action-arrow" />
            </Link>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="welcome-card">
          <div className="welcome-header">
            <div className="welcome-icon">
              <Sparkles size={20} />
            </div>
            <h2 className="welcome-title">Chào mừng!</h2>
          </div>
          <p className="welcome-description">
            Từ đây bạn có thể quản lý:
          </p>
          <ul className="welcome-list">
            <li className="welcome-list-item blue">
              <span className="welcome-list-icon">📅</span>
              <span>Thời khóa biểu</span>
            </li>
            <li className="welcome-list-item green">
              <span className="welcome-list-icon">🎯</span>
              <span>Thói quen học tập</span>
            </li>
            <li className="welcome-list-item purple">
              <span className="welcome-list-icon">📚</span>
              <span>Kế hoạch cá nhân</span>
            </li>
            <li className="welcome-list-item orange">
              <span className="welcome-list-icon">🤖</span>
              <span>Tư vấn từ AI</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

