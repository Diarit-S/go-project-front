import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import { StoreAppointment } from './StoreAppointment';

interface Props {
  store: any;
}

export const StoreContainer = ({ store }: Props) => {

  const [appointments, setAppointments] = React.useState<any[]>([]);
  
  const getStoreAppointment = async () => {
    const headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' })
    const response = await fetch(`${import.meta.env.VITE_API_URL}/appointments-store/${store.storeUid}`, {
      method: 'GET',
      headers
    });
    const data = await response.json();
    console.log(data);
    data.appointments && setAppointments(data.appointments)
  }

  React.useEffect(() => {
    getStoreAppointment();
  }, []);


  return (
    <Card sx={{ maxWidth: 345, marginRight: '15px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.name}
          </Typography>
          
          <Typography gutterBottom variant="h3">
            Réservations :
          </Typography>
          {appointments.map((appointment) => {
            return <StoreAppointment appointment={appointment} />
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );

};
