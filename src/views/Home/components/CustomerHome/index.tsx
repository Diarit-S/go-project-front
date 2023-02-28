import React, { useEffect } from 'react';

import {AuthContext} from '@/contexts/AuthContext';
import { CustomerUser } from '@/models/User/user';
import { Appointment } from '@/models/Appointment';


interface Props {
  user: CustomerUser
}

export const CustomerHome = ({ user }: Props) => {
  
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);

  const getCustomerAppointments = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-user/:${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);
    setAppointments(data.appointments);
  };

  useEffect(() => {
    getCustomerAppointments();
  }, [user]);



  return <div>I'm the customer home page</div>;
};
