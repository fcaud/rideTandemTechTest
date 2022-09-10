export type BusService = {
  id: number;
  busId: number;
  destination: string;
  minutesUntilArrival: number;
  nonOperationalDays: number[];
};
