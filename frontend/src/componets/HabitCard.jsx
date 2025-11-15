import React from 'react'

const ProgressBar = ({ progress, className = '' }) => {
  return (
    <div className={`progress-container ${className}`}>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  )
}

export default ProgressBar