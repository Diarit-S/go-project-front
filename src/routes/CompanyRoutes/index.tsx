import CompanyLayout from "@/Layouts/CompanyLayout";
import { RequireRole } from "@/Layouts/RequireRole";
import { UserRole } from "@/models/User/user-role-enum";
import Home from "@/views/Home";

export const CompanyRoutes = {
  path: '/company',
  element: (
    <CompanyLayout />
  ),
  children: [
    { path: '/company/home', element: <Home /> }
  ]
}
