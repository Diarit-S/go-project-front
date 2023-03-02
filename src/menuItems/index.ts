import appointmentsMenuItem from './Appointments'
import { customerHomeMenuItem } from './CustomerHome'
import {companyHomeMenuItem} from './CompanyHome'
import {companyServicesMenuItem} from './CompanyServices'

import type { MenuItem } from './models'

// ==============================|| MENU ITEMS ||============================== //

export const menuItems: MenuItem[] = [
  customerHomeMenuItem,
  appointmentsMenuItem,

  companyHomeMenuItem,
  companyServicesMenuItem
]
