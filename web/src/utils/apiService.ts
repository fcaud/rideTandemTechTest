const baseUrl = 'http://localhost:3000';

const getAllBusTimes = async () => {
  let response = await fetch(`${baseUrl}/bus-times`);
  response = await response.json();
  return response;
};

export default { getAllBusTimes };
