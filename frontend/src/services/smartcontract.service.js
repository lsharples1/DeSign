import http from '../http-common'

class SmartContractService {
  getSignedTX(public_key, private_key, isTxHash) {
    return http.get(`/getSignedTX?private_key=${private_key}&public_key=${public_key}&isTxHash=${isTxHash}`);
  }
  
  getTXHash(signed_tx) {
    return http.get(`/getTXHash?signed_tx=${signed_tx}`);
  }
}

export default new SmartContractService()