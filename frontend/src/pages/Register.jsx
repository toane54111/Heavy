import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, User, Mail, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement register logic
    console.log('Register:', formData);
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setFormData({ ...formData, password });
    
    // Calculate password strength
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^a-zA-Z\d]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength <= 2) return 'bg-red-400';
    if (passwordStrength === 3) return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <div className="register-container">
      <div className="register-bg-decoration">
        <div className="register-bg-circle register-bg-circle-1"></div>
        <div className="register-bg-circle register-bg-circle-2"></div>
        <div className="register-bg-circle register-bg-circle-3"></div>
      </div>

      <div className="register-form-container">
        <div className="register-header">
          <div className="register-icon-wrapper">
            <div className="register-icon-glow"></div>
            <div className="register-icon">
              <UserPlus size={40} />
              <Sparkles size={16} className="register-sparkle" />
            </div>
          </div>
          <h2 className="register-title">Tạo tài khoản</h2>
          <p className="register-subtitle">
            Bắt đầu hành trình học tập của bạn ngay hôm nay!
          </p>
          <p className="register-subtitle" style={{ fontSize: '0.875rem', marginTop: '16px' }}>
            Đã có tài khoản?{' '}
            <Link to="/login" className="register-link">
              Đăng nhập ngay
            </Link>
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label htmlFor="name" className="register-form-label">Họ và tên</label>
            <div className="register-input-wrapper">
              <User className={`register-input-icon ${focusedField === 'name' ? 'focused' : ''}`} size={20} />
              <input
                id="name"
                name="name"
                type="text"
                required
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="register-input"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          </div>

          <div className="register-form-group">
            <label htmlFor="email" className="register-form-label">Email</label>
            <div className="register-input-wrapper">
              <Mail className={`register-input-icon ${focusedField === 'email' ? 'focused' : ''}`} size={20} />
              <input
                id="email"
                name="email"
                type="email"
                required
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="register-input"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="register-form-group">
            <label htmlFor="password" className="register-form-label">Mật khẩu</label>
            <div className="register-input-wrapper">
              <Lock className={`register-input-icon ${focusedField === 'password' ? 'focused' : ''}`} size={20} />
              <input
                id="password"
                name="password"
                type="password"
                required
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                className="register-input"
                placeholder="Tối thiểu 8 ký tự"
                value={formData.password}
                onChange={handlePasswordChange}
              />
            </div>
            {formData.password && (
              <div className="register-password-strength">
                <div className="register-strength-bars">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`register-strength-bar ${
                        level <= passwordStrength 
                          ? passwordStrength <= 2 ? 'weak' : passwordStrength === 3 ? 'medium' : 'strong'
                          : 'empty'
                      }`}
                    />
                  ))}
                </div>
                <p className="register-strength-text">
                  {passwordStrength === 0 && 'Nhập mật khẩu để kiểm tra độ mạnh'}
                  {passwordStrength <= 2 && 'Mật khẩu yếu'}
                  {passwordStrength === 3 && 'Mật khẩu trung bình'}
                  {passwordStrength === 4 && 'Mật khẩu mạnh'}
                </p>
              </div>
            )}
          </div>

          <div className="register-form-group">
            <label htmlFor="confirmPassword" className="register-form-label">Xác nhận mật khẩu</label>
            <div className="register-input-wrapper">
              <Lock className={`register-input-icon ${focusedField === 'confirmPassword' ? 'focused' : ''}`} size={20} />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                onFocus={() => setFocusedField('confirmPassword')}
                onBlur={() => setFocusedField(null)}
                className="register-input"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
              {formData.confirmPassword && formData.password === formData.confirmPassword && (
                <CheckCircle2 className="register-check-icon" size={20} />
              )}
            </div>
            {formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="register-error-text">Mật khẩu không khớp</p>
            )}
          </div>

          <div className="register-terms">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="register-terms-checkbox"
            />
            <label htmlFor="terms" className="register-terms-label">
              Tôi đồng ý với{' '}
              <Link to="#" className="register-terms-link">
                Điều khoản sử dụng
              </Link>{' '}
              và{' '}
              <Link to="#" className="register-terms-link">
                Chính sách bảo mật
              </Link>
            </label>
          </div>

          <button type="submit" className="register-submit-button">
            <UserPlus size={20} />
            <span>Tạo tài khoản</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

