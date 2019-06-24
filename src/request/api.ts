import PicaHeader from '@src/header'

import request from 'request-promise-native'

class PicaApi {
  protected header: PicaHeader = null

  constructor(header: PicaHeader) {
    this.header = header
  }

  async post(): Promise<request.FullResponse> {
    return await request(this.header.host, {
      method: this.header.method,
      headers: JSON.parse(this.header.getRequest().json()),
    })
  }

  async postData(data: object): Promise<request.FullResponse> {
    return await request(this.header.host, {
      method: this.header.method,
      headers: JSON.parse(this.header.getRequest().json()),
      body: data,
      json: true,
    })
  }

  async get(): Promise<request.FullResponse> {
    return await request(this.header.host, {
      method: this.header.method,
      headers: JSON.parse(this.header.getRequest().json()),
    })
  }
}

export default PicaApi