import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'Người dùng',
    level: 15,
    water: 25,
    experience: 750
  })

  const updateWater = (amount) => {
    setUser(prev => ({ ...prev, water: prev.water + amount }))
  }

  const value = {
    user,
    setUser,
    updateWater
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}