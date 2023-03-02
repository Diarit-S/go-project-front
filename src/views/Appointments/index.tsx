import { AppointmentCard } from "@/Components/organisms/AppointmentCard";
import React from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { CustomerUser } from "@/models/User/user";

export const Appointments = () => {

  const authContext = React.useContext(AuthContext);

  const [appointments, setAppointments] = React.useState<any[]>([]);

  const getCustomerAppointments = async () => {

    const user = authContext.user as CustomerUser

    const headers = new Headers({
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    });


    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-user/${user.id}`, {
      method: 'GET',
      headers,
    });
    const data = await response.json();

    console.log(data);
    setAppointments(data.appointments);
  };

  React.useEffect(() => {
    getCustomerAppointments();
  }, [authContext.user]);



  return <div>
    {appointments.map((appointment) => (
      <AppointmentCard appointment={appointment} />
    ))}
  </div>;
};
