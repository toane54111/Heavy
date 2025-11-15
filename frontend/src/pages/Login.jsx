import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, Sparkles } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-bg-decoration">
        <div className="login-bg-circle login-bg-circle-1"></div>
        <div className="login-bg-circle login-bg-circle-2"></div>
        <div className="login-bg-circle login-bg-circle-3"></div>
      </div>

      <div className="login-form-container">
        <div className="login-header">
          <div className="login-icon-wrapper">
            <div className="login-icon-glow"></div>
            <div className="login-icon">
              <LogIn size={40} />
              <Sparkles size={16} className="login-sparkle" />
            </div>
          </div>
          <h2 className="login-title">Đăng nhập</h2>
          <p className="login-subtitle">
            Chào mừng trở lại! Vui lòng đăng nhập vào tài khoản của bạn
          </p>
          <p className="login-subtitle" style={{ fontSize: '0.875rem', marginTop: '16px' }}>
            Chưa có tài khoản?{' '}
            <Link to="/register" className="login-link">
              Đăng ký ngay
            </Link>
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-group">
            <label htmlFor="email" className="login-form-label">Email</label>
            <div className="login-input-wrapper">
              <Mail className={`login-input-icon ${focusedField === 'email' ? 'focused' : ''}`} size={20} />
              <input
                id="email"
                name="email"
                type="email"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="login-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="login-form-group">
            <label htmlFor="password" className="login-form-label">Mật khẩu</label>
            <div className="login-input-wrapper">
              <Lock className={`login-input-icon ${focusedField === 'password' ? 'focused' : ''}`} size={20} />
              <input
                id="password"
                name="password"
                type="password"
                required
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className="login-input"
                placeholder="Nhập mật khẩu của bạn"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="login-options">
            <div className="login-checkbox-wrapper">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="login-checkbox"
              />
              <label htmlFor="remember-me" className="login-checkbox-label">
                Ghi nhớ đăng nhập
              </label>
            </div>
            <Link to="#" className="login-forgot-link">
              Quên mật khẩu?
            </Link>
          </div>

          <button type="submit" className="login-submit-button">
            <LogIn size={20} />
            <span>Đăng nhập</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

