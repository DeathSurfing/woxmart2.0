'use client'

import React, { createContext, useState, useContext } from 'react'

type User = {
  id: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    // In a real app, you would validate credentials with your backend
    setUser({ id: '1', email })
  }

  const signup = async (email: string, password: string) => {
    // In a real app, you would send this data to your backend
    setUser({ id: '1', email })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}