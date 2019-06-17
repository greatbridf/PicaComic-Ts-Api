import PicaRequest from '@src/request/request'

import request from 'request-promise-native'

class PicaApi {
  protected req: PicaRequest = null

  constructor(req: PicaRequest) {
    this.req = req
  }

  async post(): Promise<request.FullResponse> {
    return await request(this.req.getHost(), {
      method: this.req.getMethod(),
      headers: JSON.parse(this.req.getRequest().json()),
    })
  }

  async postData(data: object): Promise<request.FullResponse> {
    return await request(this.req.getHost(), {
      method: this.req.getMethod(),
      headers: JSON.parse(this.req.getRequest().json()),
      body: data,
      json: true,
    })
  }

  async get(): Promise<request.FullResponse> {
    return await request(this.req.getHost(), {
      method: this.req.getMethod(),
      headers: JSON.parse(this.req.getRequest().json()),
    })
  }
}

export default PicaApi