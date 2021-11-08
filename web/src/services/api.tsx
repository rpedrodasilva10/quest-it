import axios from 'axios';

console.log('API base URL', process.env.REACT_APP_QUEST_IT_API_URL);

const api = axios.create({
  baseURL: process.env.REACT_APP_QUEST_IT_API_URL || 'http://localhost:8080/api/v1/',
});

export default api;
