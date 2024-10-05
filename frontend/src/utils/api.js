import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getIrrigationData = async () => {
  const response = await axios.get(`${API_URL}/irrigation`);
  return response.data;
};

export const createIrrigationData = async (data) => {
  const response = await axios.post(`${API_URL}/irrigation`, data);
  return response.data;
};

export const getCropHealthData = async () => {
  const response = await axios.get(`${API_URL}/crop_health`);
  return response.data;
};

export const createCropHealthData = async (data) => {
  const response = await axios.post(`${API_URL}/crop_health`, data);
  return response.data;
};

export const getSpatialData = async () => {
  const response = await axios.get(`${API_URL}/spatial`);
  return response.data;
};
