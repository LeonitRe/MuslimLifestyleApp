import axios from 'axios'

const baseURL = 'http://localhost:5090/api'

const apiClient = axios.create({
  baseURL,
  withCredentials: true
})

export default apiClient
