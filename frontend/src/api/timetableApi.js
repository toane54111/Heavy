import axios from 'axios';

const API_URL = '/api/timetable';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const timetableApi = {
  // Get all timetable events
  getTimetable: async () => {
    const response = await api.get('/');
    return response.data;
  },

  // Add new event
  addEvent: async (eventData) => {
    const response = await api.post('/', eventData);
    return response.data;
  },

  // Update event
  updateEvent: async (id, eventData) => {
    const response = await api.put(`/${id}`, eventData);
    return response.data;
  },

  // Delete event
  deleteEvent: async (id) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },

  // Get events by date range
  getEventsByDateRange: async (startDate, endDate) => {
    const response = await api.get('/range', {
      params: { startDate, endDate }
    });
    return response.data;
  }
};