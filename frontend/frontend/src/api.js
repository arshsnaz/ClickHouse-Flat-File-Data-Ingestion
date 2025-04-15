import axios from 'axios';

// API Base URL (Replace this with your backend URL)
const API_URL = 'http://localhost:8080/api';

// Setup axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API request methods

export const connectClickHouse = async (config) => {
  try {
    const response = await api.post('/clickhouse/connect', config);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getClickHouseTables = async () => {
  try {
    const response = await api.get('/clickhouse/tables');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getClickHouseColumns = async (tableName) => {
  try {
    const response = await api.get(`/clickhouse/columns?tableName=${tableName}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const uploadFlatFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const response = await api.post('/flatfile/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getFlatFileColumns = async () => {
  try {
    const response = await api.get('/flatfile/columns');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const startIngestion = async (data) => {
  try {
    const response = await api.post('/ingestion/start', data);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const previewData = async (source) => {
  try {
    const response = await api.post('/preview', { source });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
