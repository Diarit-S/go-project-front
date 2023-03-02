import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

interface Props {
  appointment: any;
 }


export const StoreAppointment = ({appointment}: Props) => {
      return (
    <Card sx={{ maxWidth: 345, marginBottom: '15px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {appointment.serviceName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {appointment.firstName} {appointment.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {appointment.datetimeStart} {appointment.datetimeEnd}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
