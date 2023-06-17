import axios from 'axios'

const baseURL = 'http://localhost:5090/api' // Adjust the URL to match your backend server

const apiClient = axios.create({
  baseURL,
  withCredentials: true // Enable cross-origin requests with credentials
})

export default apiClient
