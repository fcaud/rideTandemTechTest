import { BusService } from './types';

const baseUrl = 'http://localhost:3000';

export const getAllBusTimes = async () => {
  const response = await fetch(`${baseUrl}/bus-times`);
  const parsedResponse = (await response.json()) as BusService[];
  return parsedResponse;
};
