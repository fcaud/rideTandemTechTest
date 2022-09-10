import React from 'react';
import { BusService } from '../utils/types';

interface Props {
  bus: BusService;
}

const Card: React.FC<Props> = ({ bus }) => {
  return (
    <div className='Card'>
      <div className='Card__Header'>
        <b>{bus.busId}</b>
      </div>
      <div className='Card__Details'>
        <div>{bus.destination}</div>
        <div>{bus.minutesUntilArrival} mins</div>
      </div>
    </div>
  );
};

export default Card;
