import React, { useEffect } from 'react';

import {AuthContext} from '@/contexts/AuthContext';
import { CompanyUser, User } from '@/models/User/user';
import { Appointment } from '@/models/Appointment';
import { Company } from '@/models/Company';


interface Props {
  companyUser: CompanyUser
}

export const AdminHome = ({ companyUser }: Props) => {
  
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);

  const getCompanyAppointments = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-store/:${companyUser.id}`, {
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
    getCompanyAppointments();
  }, [companyUser]);



  return <div>I'm the company home page</div>;
};
