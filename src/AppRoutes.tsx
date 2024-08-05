import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthorizationForm from './pages/authorizationForm/AuthorizationForm'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthorizationForm />} />
    </Routes>
  )
}

export default AppRoutes
