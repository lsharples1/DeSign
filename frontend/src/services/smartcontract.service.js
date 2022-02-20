import http from '../http-common'

class SmartContractService {
  getSignedTX(public_key, private_key) {
    return http.get(`/getSignedTX?private_key=${private_key}}&public_key=${public_key}`, data);
  }
  
  getTXHash(signed_tx) {
    return http.get(`/getTXHash?signed_tx=${signed_tx}`);
  }
}

export default new SmartContractService()