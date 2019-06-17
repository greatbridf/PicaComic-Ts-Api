import PicaApi from '@src/request/api'
import PicaRequest from '@src/request/request';
import PicaResult from '@src/result/result';

class PicaIndexApi extends PicaApi {
  constructor(auth: string) {
    var req = new PicaRequest()
    req.setMethod('GET')
    req.setAuthorization(auth)
    super(req)
  }

  async getCategories(): Promise<PicaResult> {
    this.req.setHost('https://picaapi.picacomic.com/categories')
    var resp = await this.get()
    return new PicaResult(resp)
  }
}

export default PicaIndexApi