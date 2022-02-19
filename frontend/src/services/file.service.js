import http from '../http-common'

class FileService {
  getAll() {
    return http.get('/files')
  }

  get(id) {
    return http.get(`/files/${id}`)
  }

  create(data) {
    return http.post('/files/', data)
  }

  update(id, data) {
    return http.put(`/files/${id}`, data)
  }

  delete(id) {
    return http.delete(`/files/${id}`)
  }

  deleteAll() {
    return http.delete(`/files`)
  }
}

export default new FileService()