import { flatListResponse } from './mock-flat-list'

export default class ApiService {
  constructor(dto) {
    this.dto = dto
  }

  makeGetReuqest() {
    // making common get request...
  }

  makePostReuqest() {
    // making common post request...
  }

  async getFlatList() {
    this.makeGetReuqest()

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.dto.parseGetFlatListResponse(flatListResponse))
      }, 2000)
    })
  }
}
