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
        className="lg:hidden fixed top-16 left-4 z-50 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <Menu className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} />
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40
        w-64 bg-white/95 backdrop-blur-md shadow-xl border-r border-gray-200/50
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 ease-in-out
        pt-16 lg:pt-0 relative overflow-hidden
      `}>
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent pointer-events-none"></div>
        
        <nav className="p-4 space-y-2 relative z-10">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  group relative flex items-center space-x-3 px-4 py-3.5 rounded-xl
                  transition-all duration-300 ease-in-out overflow-hidden
                  ${active
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-md hover:transform hover:translate-x-1 border-2 border-transparent hover:border-gray-200'
                  }
                `}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {active && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                )}
                <div className={`p-2 rounded-lg transition-all duration-300 ${
                  active 
                    ? 'bg-white/20 shadow-md group-hover:scale-110 group-hover:rotate-6' 
                    : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-purple-100 group-hover:scale-110 group-hover:rotate-6'
                }`}>
                  <Icon className={`w-5 h-5 transition-all duration-300 ${active ? 'text-white scale-110' : 'text-gray-600 group-hover:text-blue-600'}`} />
                </div>
                <span className={`font-semibold transition-all duration-300 ${active ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>
                  {item.label}
                </span>
                {active && (
                  <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

