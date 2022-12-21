import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://127.0.0.1:4001/base-81589/us-central1/api'
   
});

export default instance;

