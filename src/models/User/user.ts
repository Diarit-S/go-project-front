export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: UserRole;
}

/**
 * isValidUserMail
 */
function isValidUserMail(User: User): boolean {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(User.email);
}

/**
 * isValidPassword
 */
function isValidPassword(User: User): boolean {
  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{10,}$/;
  return passwordRegex.test(User.password);
}
