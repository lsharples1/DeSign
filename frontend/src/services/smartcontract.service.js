import http from '../http-common'

class SmartContractService {
  async get() {
    return await http.get(`/smartcontract/`).then(response => {
      return response.data;
    }).catch(error => {
      console.error(error);
    })
  }
}

export default new SmartContractService()