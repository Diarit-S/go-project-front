import { Dispatch } from 'react';

import { User } from './User/user';

export interface AuthContextType {
  user: User | null;
  setUser: Dispatch<User | null>;
}
