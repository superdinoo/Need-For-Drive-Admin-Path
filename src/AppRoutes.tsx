import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminOrder from './pages/adminOrderPages/AdminOrder'
import AuthorizationForm from './pages/authorizationForm/AuthorizationForm'
import AdminCartPages from './pages/adminCartPages/AdminCartPages'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthorizationForm />} />
      <Route path="/Admin" element={<AdminOrder />} />
      <Route path="/ListCar" element={<AdminOrder />} />
      <Route path="/AdminOrders" element={<AdminOrder />} />
      <Route path="/AdminCart" element={<AdminCartPages />} />
      <Route path="/AdminCart/:id" element={<AdminCartPages />} />
    </Routes>
  )
}

export default AppRoutes
