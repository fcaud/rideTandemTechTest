import Card from './components/Card';
import { useEffect, useState } from 'react';
import { BusService } from './utils/types';
import { getAllBusTimes } from './utils/apiService';

interface Props {}

const App: React.FC<Props> = () => {
  const [busSchedule, setBusSchedule] = useState([] as BusService[]);

  useEffect(() => {
    getBusSchedule();
    setInterval(getBusSchedule, 10000);
  }, []);

  const getBusSchedule = async () => {
    let busDataResponse = await getAllBusTimes();
    const currentDay = new Date().getDay();
    busDataResponse = busDataResponse.filter(
      (bus) => !bus.nonOperationalDays.includes(currentDay)
    );
    busDataResponse = busDataResponse.sort(
      (bus1, bus2) => bus1.minutesUntilArrival - bus2.minutesUntilArrival
    );
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
