import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface Props {
  service: any;
  onBookAppointment: () => void;
}


export const CustomerServiceCard = ({service, onBookAppointment}: Props) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: '15px' }}>
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
      <CardActions>
        <Button size="small" color="primary" onClick={onBookAppointment}>
          Réserver
        </Button>
      </CardActions>
    </Card>
  );
};

