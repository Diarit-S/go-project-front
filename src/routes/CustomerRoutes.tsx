import CustomerLayout from '@/Layouts/CustomerLayout'
import { RequireRole } from '@/Layouts/RequireRole'
import { UserRole } from '@/models/User/user-role-enum'
import Home from '@/views/Home'
import { Appointment } from '@/views/Appointment'
import { Appointments } from '@/views/Appointments'

export const CustomerRoutes = {
  path: '/customer',
  element: (
    <RequireRole role={UserRole.USER}>
      <CustomerLayout />
    </RequireRole>
  ),
  children: [
    { path: '/customer/home', element: <Home /> },
    { path: '/customer/appointments', element: <Appointments /> },
    { path: '/customer/appointment/:id', element: <Appointment /> },
  ]
}

