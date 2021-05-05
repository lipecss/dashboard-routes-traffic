import axios from 'axios'

const apiBase = process.env.VUE_APP_API

const api = axios.create({
  baseURL: apiBase
})

// Pega todas os Pots sem paginação
export async function getRoutes () {
  return api.get('/routes').then(response => {
    return response.data
  }).catch(error => {
    return {
      status: 'error',
      data: error
    }
  })
}
