import React from 'react'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <a href="#" className="nav-item">
        <div className="nav-icon">
          <i className="fas fa-bell"></i>
        </div>
        <span>Thông báo</span>
      </a>
      <a href="#" className="nav-item water-count">
        <div className="nav-icon">
          <i className="fas fa-tint"></i>
          <div className="water-ripple"></div>
        </div>
        <span>Nhận nước</span>
        <div className="water-badge">3</div>
      </a>
      <a href="#" className="nav-item">
        <div className="nav-icon">
          <i className="fas fa-tasks"></i>
        </div>
        <span>Nhiệm vụ phụ</span>
      </a>
      <a href="#" className="nav-item active">
        <div className="nav-icon">
          <i className="fas fa-tint"></i>
        </div>
        <span>25</span>
      </a>
    </div>
  )
}

export default BottomNav