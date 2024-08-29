import axios from 'axios'

const apiService = {
  getProducts() {
    return axios.get('https://fakestoreapi.com/products')
  },
  getProduct(id: any) {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
  }
}

export default apiService;