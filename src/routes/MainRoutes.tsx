import { lazy } from 'react'

// project imports
import MainLayout from '../Layouts/MainLayout'
import Loadable from '../Components/organisms/Loadable'

import { RequireAuth } from '../Layouts/RequireAuth'

// dashboard routing
const Home = Loadable(lazy(() => import('../views/Home')))

import React from 'react'
import { RequireRole } from '@/Layouts/RequireRole'
import { UserRole } from '@/models/User/user-role-enum'

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/customer',
      element: (
        <RequireRole role={UserRole.USER}>
          <Home />
        </RequireRole>
      )
    },
  ]
}

export default MainRoutes
