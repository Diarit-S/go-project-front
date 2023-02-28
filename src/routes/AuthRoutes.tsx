import { lazy } from 'react';

// project imports
import AuthLayout from '../Layouts/AuthLayout';
import Loadable from '../Components/organisms/Loadable';

// auth routing
const Login = Loadable(lazy(() => import('../views/Login')));
const Register = Loadable(lazy(() => import('../views/Register')));

import React from 'react';

// ==============================|| AUTH ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ]
};

export default MainRoutes;
