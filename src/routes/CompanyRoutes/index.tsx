import CompanyLayout from "@/Layouts/CompanyLayout";
import { RequireRole } from "@/Layouts/RequireRole";
import { UserRole } from "@/models/User/user-role-enum";
import { BookingService } from "@/views/BookingService";
import { BookingServices } from "@/views/BookingServices";
import Home from "@/views/Home";

export const CompanyRoutes = {
  path: '/company',
  element: (
    <RequireRole role={UserRole.ADMIN}>
      <CompanyLayout />
    </RequireRole>
  ),
  children: [
    { path: '/company/home', element: <Home /> },
    { path: '/company/services', element: <BookingServices /> },
    { path: '/company/service/:id', element: <BookingService /> }
  ]
}
