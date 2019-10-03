import client from '../api/api'

export default {
  getCompanies (data) {
    console.log('getCompanies', client.get('empresas', data))
    return client.get('empresas', data)
  }
}