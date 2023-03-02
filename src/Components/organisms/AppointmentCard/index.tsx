import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface Props {
  appointment: any;
}

export const AppointmentCard = ({appointment}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {appointment.serviceName} - {appointment.storeName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {appointment.storeType}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {appointment.datetimeStart} - {appointment.datetimeEnd}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {appointment.address} {appointment.postCode} {appointment.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Annuler
        </Button>
      </CardActions>
    </Card>
  );
};
