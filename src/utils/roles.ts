import { User } from "@/models/User/user";

export const doesUserHavePermission = (user: User, role: UserRole): boolean => {
  return ['test'].includes(user.role)
}
