import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost:8000/api/v1/contact/`,
  headers: {
    Authorization: 'Bearer {token}'
   //ContentType: 'application/json'
  }
})