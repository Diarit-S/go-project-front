import { Outlet } from 'react-router-dom'

import React from 'react'

// ==============================|| MAIN LAYOUT ||============================== //

const AuthLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AuthLayout
