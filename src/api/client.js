//configuración de Axios
import axios from "axios";
window.config =JSON.stringify(process.env)

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.response.use((response) => response.data);
//el cliente pone en todas las cabeceras el authorization
export const setAuthorizationHeader = (token) =>
  (client.defaults.headers.common['Authorization'] = `Bearer ${token}`);


export const removeAutorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

export default client;
