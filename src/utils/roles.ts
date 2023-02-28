import { User } from "@/models/User/user";
import { UserRole } from "@/models/User/user-role-enum";

export const doesUserHavePermission = (user: User, role: UserRole): boolean => {
  return [UserRole.USER].includes(user.role)
}
