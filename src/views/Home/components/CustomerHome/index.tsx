import React, { useEffect } from 'react';

import { CustomerUser } from '@/models/User/user';
import { Appointment } from '@/models/Appointment';
import { CustomerServiceCard } from '@/Components/organisms/CustomerServiceCard';
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Typography } from '@mui/material';
import { StoresContainer } from './StoresContainer';

interface Props {
  user: CustomerUser
}

export const CustomerHome = ({ user }: Props) => {

  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [selectedStoreId, setSelectedStoreId] = React.useState<string | null>(null);

  const [stores, setStores] = React.useState<any[]>([]);
  const [services, setServices] = React.useState<any[]>([]);
  
  const [appointments, setAppointments] = React.useState<Appointment[]>([]);

  const getCustomerAppointments = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-user/${user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);
    setAppointments(data.appointments);
  };

   const getStores = async () => {
    const headers: Headers = new Headers({
      Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    })
     
    const queryParams = new URLSearchParams({
      postCode: "75011",
      city: "Paris",
      storeType: selectedService,
    })


    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/store?${queryParams.toString()}`,
      {
        method: "GET",
        headers,
      }
    )
    const data = await response.json()
    console.log(data)
    setStores(data.stores)
  }

  const getServices = async () => {

    console.log('getting services')
    const response = await fetch(`${import.meta.env.VITE_API_URL}/service/${selectedStoreId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    console.log(data);
    data.services && setServices(data.services)
  };

  const bookAppointment = async (serviceId: string, dateTimeStart: Date) => {
    const headers = new Headers({
      Authorization: `Bearer ${sessionStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    });

    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointment`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        ServiceUid: serviceId,
        DatetimeStart: dateTimeStart.toISOString(),
        UserUid: user.id,
      }),
    });
    const data = await response.json();

    console.log(data);
    setAppointments(data.appointments);
  };



  useEffect(() => {
    getCustomerAppointments();
  }, [user]);

  useEffect(() => {
    if (!selectedService) {
      return
    }
    getStores();
  }, [selectedService]);


  useEffect(() => {
    if (stores.length === 0 || !selectedStoreId) {
      return
    }
    getServices()
  }, [selectedStoreId]);

  const handleServiceChange = (e: SelectChangeEvent) => {
    setSelectedStoreId(null)
    setServices([])
    setSelectedService(e.target.value);
  };


  return <div>

    <Typography variant='h2'>
      Selectionnez un service :
    </Typography>

    <br />
    

    <FormControl fullWidth>
      <InputLabel id="service-label">Role</InputLabel>
      <Select
        labelId="service-label"
        id="service"
        value={selectedService}
        onChange={handleServiceChange}
      >
        <MenuItem value={'Coiffeur'}>Coiffeur</MenuItem>
        <MenuItem value={'Medecin'}>Medecin</MenuItem>
      </Select>
    </FormControl>

    <br />


    {selectedService && (
      <>
        <Typography variant='h2'>
          Liste des magasins proposant ce service : 
        </Typography>
        <br />
        <StoresContainer stores={stores} onStoreClick={setSelectedStoreId} />
        <br />
      </>
    )}
   

    {
      selectedStoreId && (
        <>
          <Typography variant='h2'>
            Liste des services proposés : 
          </Typography>

          <br />

          {
            services.length > 0 ? <> {services.map((service) => (
            <CustomerServiceCard
              key={service.serviceUid}
              service={service}
              onBookAppointment={() => bookAppointment(service.serviceUid, new Date())}
            />
          ))}</> : <Typography>Aucun service</Typography>
          }
    
         

          <br />
        </>
      )
    }

  </div>;
};
