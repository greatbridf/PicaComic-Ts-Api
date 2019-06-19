import PicaHeader from '@src/header'

import request from 'request-promise-native'

class PicaApi {
  protected req: PicaHeader = null

  constructor(req: PicaHeader) {
    this.req = req
  }

  async post(): Promise<request.FullResponse> {
    return await request(this.req.host, {
      method: this.req.method,
      headers: JSON.parse(this.req.getRequest().json()),
    })
  }

  async postData(data: object): Promise<request.FullResponse> {
    return await request(this.req.host, {
      method: this.req.method,
      headers: JSON.parse(this.req.getRequest().json()),
      body: data,
      json: true,
    })
  }

  async get(): Promise<request.FullResponse> {
    return await request(this.req.host, {
      method: this.req.method,
      headers: JSON.parse(this.req.getRequest().json()),
    })
  }
}

export default PicaApi