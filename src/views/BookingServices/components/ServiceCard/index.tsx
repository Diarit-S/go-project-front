import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface Props {
  onServiceClick: (serviceId: string) => void;
  service: any
}

export const ServiceCard = ({onServiceClick, service}: Props) => { 
   return (
    <Card sx={{ maxWidth: 345, marginBottom: '15px' }} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.price} €
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={() => onServiceClick(service.serviceUid)}>
        <Button size="small" color="primary">
          View Service
        </Button>
      </CardActions>
    </Card>
  );
}
