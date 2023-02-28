import { UserRole } from "./user-role-enum";

export interface User {
  id: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role: UserRole;
}

export interface CustomerUser extends User {
  role: UserRole.USER;
}

export interface CompanyUser extends User {
  role: UserRole.EMPLOYEE | UserRole.ADMIN;
  companyId: string;
}

/**
 * isValidUserMail
 */
export function isValidUserMail(email: string): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * isValidPassword
 */
export function isValidPassword(password: string): boolean {
  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  return passwordRegex.test(password);
}
