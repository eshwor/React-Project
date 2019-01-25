import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-fcc18.firebaseio.com/'
});

export default instance;
