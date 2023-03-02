import { UserRole } from "@/models/User/user-role-enum"

export type MenuItem = {
  id: string
  title: string
  type: 'group' | 'item'
  url?: string
  breadcrumbs?: boolean
  children?: MenuItem[]
  requiredRole?: UserRole
  color?: string
}
