import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';
import { StoreService } from './StoreService';

interface Props {
  store: any;
}

export const StoreContainer = ({ store }: Props) => {

  const [services, setServices] = React.useState<any[]>([]);
  
  const getStoreServices = async () => {
    const headers = new Headers({ Authorization: `Bearer ${sessionStorage.getItem('jwt')}`, 'Content-Type': 'application/json' })
    const response = await fetch(`${import.meta.env.VITE_API_URL}/service/${store.storeUid}`, {
      method: 'GET',
      headers
    });
    const data = await response.json();
    console.log(data);
    data.services && setServices(data.services)
  }

  React.useEffect(() => {
    getStoreServices();
  }, []);


  return (
    <Card sx={{ maxWidth: 345, marginRight: '15px', marginBottom: '15px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.name}
          </Typography>
          
          <Typography gutterBottom variant="h3">
            Services :
          </Typography>
          {services.map((service) => {
            return <StoreService service={service} />
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );

};
