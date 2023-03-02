import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

interface Props {
  service: any;
 }

export const StoreService = ({service}: Props) => {
      return (
    <Card sx={{ maxWidth: 345, marginBottom: '15px' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.price} €
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {service.duration} minutes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
