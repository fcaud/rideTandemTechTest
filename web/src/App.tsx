import Card from './components/Card';
import { useEffect, useState } from 'react';
import { BusService } from './utils/types';
import { getAllBusTimes } from './utils/apiService';

interface Props {}

const App: React.FC<Props> = () => {
  const [busSchedule, setBusSchedule] = useState([] as BusService[]);

  useEffect(() => {
    getBusSchedule();
  }, []);

  const getBusSchedule = async () => {
    const busDataResponse = await getAllBusTimes();
    setBusSchedule(busDataResponse);
  };

  return (
    <div className='App'>
      <div>
        <div className='LocationHeader'>
          Live bus times for <b>Park Road</b>
        </div>
        {busSchedule.map((bus) => (
          <Card bus={bus} />
        ))}
      </div>
    </div>
  );
};

export default App;
