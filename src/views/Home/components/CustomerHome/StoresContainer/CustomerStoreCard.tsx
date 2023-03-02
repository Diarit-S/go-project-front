import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface Props {
  store: any
  onCardClick: () => void;
}

export const CustomerStoreCard = ({store, onCardClick}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onCardClick}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {store.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {store.adress} {store.postCode} {store.city}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
