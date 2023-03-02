import { lazy } from 'react'

// project imports
import MainLayout from '../Layouts/MainLayout'
import Loadable from '../Components/organisms/Loadable'

import { RequireAuth } from '../Layouts/RequireAuth'

// dashboard routing
const Home = Loadable(lazy(() => import('../views/Home')))

import React from 'react'

import { CustomerRoutes } from './CustomerRoutes'
import { CompanyRoutes } from './CompanyRoutes'

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    CustomerRoutes, CompanyRoutes,
  ]
}

export default MainRoutes
