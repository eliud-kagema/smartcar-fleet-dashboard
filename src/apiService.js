import axios from 'axios';

const API_BASE_URL = 'https://api.smartcar.com/v1';
const API_TOKEN = 'Y1fce94e7-4342-477a-b284-6052fae2f88a';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_TOKEN}`,
  },
});

export const fetchVehicles = async () => {
  try {
    const response = await apiClient.get('/vehicles');
    return response.data;
  } catch (error) {
    throw error;
  }
};