import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ progress, className = '', variant = 'green', size = 'medium' }) => {
  return (
    <div className={`progress-container ${size} ${className}`}>
      <div className={`progress-bar ${variant}`} style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}></div>
    </div>
  )
}

export default ProgressBar
