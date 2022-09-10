import Card from './components/Card';
import { useEffect, useState, useRef } from 'react';
import { BusService } from './utils/types';
import { getAllBusTimes } from './utils/apiService';

interface Props {}

const App: React.FC<Props> = () => {
  const [busSchedule, setBusSchedule] = useState([] as BusService[]);
  const apiCallInProgress = useRef(false);

  const getBusSchedule = async () => {
    //Api will not be called until previous call has resolved to prevent overload if a slow connection
    if (!apiCallInProgress.current) {
      apiCallInProgress.current = true;
      let busDataResponse = await getAllBusTimes();
      apiCallInProgress.current = false;

      //filter for buses running on current day
      const currentDay = new Date().getDay();
      busDataResponse = busDataResponse.filter(
        (bus) => !bus.nonOperationalDays.includes(currentDay)
      );

      //sorting schedule for buses departing soonest
      busDataResponse = busDataResponse.sort(
        (bus1, bus2) => bus1.minutesUntilArrival - bus2.minutesUntilArrival
      );

      setBusSchedule(busDataResponse);
    }
  };

  useEffect(() => {
    //Initial fetch data on mount and then interval refetching at 10s intervals
    getBusSchedule();
    const intervalId = setInterval(getBusSchedule, 10000);
    //clean-up interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='App'>
      <div>
        <div className='LocationHeader'>
          Live bus times for <b>Park Road</b>
        </div>
        {busSchedule.map((bus) => (
          <Card bus={bus} key={bus.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
