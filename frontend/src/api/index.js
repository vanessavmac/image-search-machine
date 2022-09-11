import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:8080',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
});

export default API;
