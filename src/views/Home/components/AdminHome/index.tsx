import React, { useEffect } from 'react';

import {AuthContext} from '@/contexts/AuthContext';
import { CompanyUser, User } from '@/models/User/user';
import { Appointment } from '@/models/Appointment';
import { Company } from '@/models/Company';
import { Box, Button, Typography } from '@mui/material';
import { StoreContainer } from './components/StoreContainer';


interface Props {
  companyUser: CompanyUser
}

export const AdminHome = ({ companyUser }: Props) => {

  const authContext = React.useContext(AuthContext);

  const [stores, setStores] = React.useState<any[]>([]);
  
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);

  const getCompanyAppointments = async () => {

    const headers: Headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' }) 

    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-store/:${companyUser.id}`, {
      method: 'GET',
      headers
    });
    const data = await response.json();

    console.log(data);
    setAppointments(data.appointments);
  };

  const getCompanyUserStores = async () => {

    const user = authContext.user as CompanyUser;

    const headers: Headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/store-user/${user.id}`, {
      method: 'GET',
      headers
    });
    const data = await response.json();

    console.log(data);

    setStores(data.stores)
  };

  const createStore = async () => {

    const headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' })

    const response = await fetch(`${import.meta.env.VITE_API_URL}/store`, {
      method: 'POST',
      headers,
      body: JSON.stringify(
        {
          name: "Coiffeur Paris",
          storeType: "Coiffeur",
          postCode: 75011,
          city: "Paris",
          address: "4 rue reaumur"
        }
      )
    });
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    getCompanyUserStores();
  }, [authContext.user]);


  // useEffect(() => {
  //   getCompanyAppointments();
  // }, [companyUser]);



  return <>
    <Typography gutterBottom variant="h2">
      Mes enseignes et leurs réservations :
    </Typography>
    <Box sx={{ display: 'flex' }}>
      <Button onClick={createStore}>
        Create store
      </Button>

      
      {stores.map((store) => {
        return <StoreContainer store={store} />
      })}


    </Box>;
  </>
};
