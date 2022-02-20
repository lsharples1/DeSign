import http from '../http-common'

class SmartContractService {
  getSignedTX(data) {
    return http.post('/getSignedTX', data);
  }
  
  getTXHash(data) {
    return http.post('/getTXHash', data);
  }
}

export default new SmartContractService()