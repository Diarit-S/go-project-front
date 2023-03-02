import { Appointment } from '@/models/Appointment';
import React from 'react';

interface Props {
  appointment: Appointment;
}

export const AppointmentCard = ({appointment}: Props) => {
  return <div>
    <div>{appointment.id}</div>
    <div>{appointment.title}</div>
  </div>;
};
