import React from 'react';

import {AuthContext} from '@/contexts/AuthContext';
import { CustomerHome } from './components/CustomerHome';
import { AdminHome } from './components/AdminHome';
import { UserRole } from '@/models/User/user-role-enum';
import { CompanyUser, CustomerUser } from '@/models/User/user';

const Home = () => {
  const { user } = React.useContext(AuthContext);
  
  if (user?.role === UserRole.USER) {
    return <CustomerHome user={user as CustomerUser} />;
  } else if (user?.role === UserRole.ADMIN) {
    return <AdminHome companyUser={user as CompanyUser} />;
  } else {
    return <div>Not logged in</div>;
  }
};

export default Home;
