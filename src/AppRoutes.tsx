import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminOrder from './pages/adminOrderPages/AdminOrder'
import AuthorizationForm from './pages/authorizationForm/AuthorizationForm'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthorizationForm />} />
      <Route path="/Admin" element={<AdminOrder />} />
      <Route path="/ListCar" element={<AdminOrder />} />
      <Route path="/AdminOrders" element={<AdminOrder />} />
    </Routes>
  )
}

export default AppRoutes
