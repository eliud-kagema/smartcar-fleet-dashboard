import axios from 'axios';

const API_BASE_URL = '/api/v1';
const API_TOKEN = 'YOUR_SMARTCAR_API_TOKEN';

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