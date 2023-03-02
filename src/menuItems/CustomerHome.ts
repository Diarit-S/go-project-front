// assets

import { UserRole } from '@/models/User/user-role-enum'
import type { MenuItem } from './models'

// ==============================|| PLANNING MENU ITEMS ||============================== //

export const customerHomeMenuItem: MenuItem = {
  id: 'customer-home-group',
  title: 'home',
  type: 'group',
  requiredRole: UserRole.USER,
  children: [
    {
      id: 'customer-home',
      title: 'Accueil',
      type: 'item',
      url: 'customer/home',
    }
  ]
}

export default customerHomeMenuItem
