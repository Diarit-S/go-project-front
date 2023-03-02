// assets
import { UserRole } from '@/models/User/user-role-enum'
import type { MenuItem } from './models'

// ==============================|| PLANNING MENU ITEMS ||============================== //

export const appointmentsMenuItem: MenuItem = {
  id: 'appointments',
  title: 'Mes Reservations',
  type: 'group',
  requiredRole: UserRole.USER,
  children: [
    {
      id: 'manage-appointments',
      title: 'Mes Reservations',
      type: 'item',
      url: '/customer/appointments',
    }
  ]
}

export default appointmentsMenuItem
