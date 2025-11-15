import React from 'react'
import './HabitCard.css'

const HabitCard = ({ habit, onComplete, onDelete }) => {
  if (!habit) return null;

  return (
    <div className="habit-card">
      <div className="habit-card-header">
        <div className="habit-card-title">
          <div className={`habit-card-icon ${habit.color || 'green'}`}>
            {habit.icon || '🎯'}
          </div>
          <span>{habit.name || 'Thói quen mới'}</span>
        </div>
        <div className={`habit-card-status ${habit.completed ? 'active' : 'inactive'}`}>
          {habit.completed ? 'Hoàn thành' : 'Đang theo'}
        </div>
      </div>
      
      {habit.description && (
        <div className="habit-card-description">
          {habit.description}
        </div>
      )}
      
      <div className="habit-card-stats">
        <div className="habit-card-stat">
          <div className="habit-card-stat-label">Ngày liên tiếp</div>
          <div className="habit-card-stat-value">{habit.streak || 0}</div>
        </div>
        <div className="habit-card-stat">
          <div className="habit-card-stat-label">Hoàn thành</div>
          <div className="habit-card-stat-value">{habit.completedDays || 0}/{habit.totalDays || 30}</div>
        </div>
      </div>
      
      <div className="habit-card-actions">
        <button 
          className="habit-card-button primary"
          onClick={() => onComplete && onComplete(habit.id)}
        >
          Đánh dấu hoàn thành
        </button>
        <button 
          className="habit-card-button secondary"
          onClick={() => onDelete && onDelete(habit.id)}
        >
          Xóa
        </button>
      </div>
    </div>
  )
}

export default HabitCard