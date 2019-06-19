import PicaApi from '@src/request/api'
import PicaRequest from '@src/request/request'
import PicaResult from '@src/result/result'
import PicaCategoriesResult from '@src/result/index/categories_result'

class PicaIndexApi extends PicaApi {
  constructor(auth: string) {
    var req = new PicaRequest()
    req.setMethod('GET')
    req.setAuthorization(auth)
    super(req)
  }

  async getCategories(): Promise<PicaCategoriesResult> {
    this.req.setHost('https://picaapi.picacomic.com/categories')
    var resp = await this.get()
    return new PicaCategoriesResult(resp)
  }
}

export default PicaIndexApi