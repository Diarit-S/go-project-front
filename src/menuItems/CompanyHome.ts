// assets

import { UserRole } from '@/models/User/user-role-enum'
import type { MenuItem } from './models'

// ==============================|| PLANNING MENU ITEMS ||============================== //

export const companyHomeMenuItem: MenuItem = {
  id: 'company-home-group',
  title: 'home',
  type: 'group',
  requiredRole: UserRole.ADMIN,
  children: [
    {
      id: 'company-home',
      title: 'Accueil',
      type: 'item',
      url: 'company/home',
    }
  ]
}

export default companyHomeMenuItem
