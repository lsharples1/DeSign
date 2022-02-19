import http from '../http-common'

class ExampleService {
  getAll() {
    return http.get('/examples')
  }

  get(id) {
    return http.get(`/examples/${id}`)
  }

  create(data) {
    return http.post('/examples/', data)
  }

  update(id, data) {
    return http.put(`/examples/${id}`, data)
  }

  delete(id) {
    return http.delete(`/examples/${id}`)
  }

  deleteAll() {
    return http.delete(`/examples`)
  }
}

export default new ExampleService()