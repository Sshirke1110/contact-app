import axios from "axios";
const baseURL = 'http://localhost:3000/api/contacts/'


export const getAllContacts = () => axios.get(baseURL)
