import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  Target, 
  BookOpen, 
  MessageSquare,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/schedule', icon: Calendar, label: 'Thời Khóa Biểu' },
    { path: '/habits', icon: Target, label: 'Thói Quen' },
    { path: '/study-plan', icon: BookOpen, label: 'Kế Hoạch Học' },
    { path: '/ai-questionnaire', icon: MessageSquare, label: 'AI Tư Vấn' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className={`sidebar-mobile-button ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <Menu className="sidebar-mobile-icon" size={24} />
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-gradient"></div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`sidebar-menu-item ${active ? 'active' : ''}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {active && (
                  <div className="sidebar-menu-item-shimmer"></div>
                )}
                <div className="sidebar-menu-icon-wrapper">
                  <Icon className="sidebar-menu-icon" size={20} />
                </div>
                <span className="sidebar-menu-label">{item.label}</span>
                {active && (
                  <div className="sidebar-active-indicator"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

