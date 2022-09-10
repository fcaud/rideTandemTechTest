import React from 'react';

interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <div className='Card'>
      <div className='Card__Header'>
        <b>176</b>
      </div>
      <div className='Card__Details'>
        <div>To Newham Close</div>
        <div>2 mins</div>
      </div>
    </div>
  );
};

export default Card;
