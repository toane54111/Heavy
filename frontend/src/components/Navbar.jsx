import { Link } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-bg-gradient"></div>
      
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/dashboard" className="navbar-brand">
            <div className="navbar-logo-wrapper">
              <div className="navbar-logo-glow"></div>
              <div className="navbar-logo">
                <BookOpen size={24} />
                <Sparkles size={12} className="navbar-logo-sparkle" />
              </div>
            </div>
            <span className="navbar-brand-text">Student Tracker</span>
          </Link>
          
          <div className="navbar-actions">
            <Link to="/login" className="navbar-link">
              <span>Đăng nhập</span>
              <span className="navbar-link-shimmer"></span>
            </Link>
            <Link to="/register" className="navbar-button">
              <span className="navbar-button-shimmer"></span>
              <span className="navbar-button-text">Đăng ký</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

