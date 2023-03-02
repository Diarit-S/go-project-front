// assets

import { UserRole } from '@/models/User/user-role-enum'
import type { MenuItem } from './models'

// ==============================|| PLANNING MENU ITEMS ||============================== //

export const companyServicesMenuItem: MenuItem = {
  id: 'company-services-group',
  title: 'services',
  type: 'group',
  requiredRole: UserRole.ADMIN,
  children: [
    {
      id: 'company-services',
      title: 'Services',
      type: 'item',
      url: 'company/services',
    }
  ]
}

export default companyServicesMenuItem
