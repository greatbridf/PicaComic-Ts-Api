import PicaApi from '@src/request/api'
import { Method, PicaHeader } from '@src/header'
import PicaCategoriesResult from '@src/result/index/categories_result'

class PicaIndexApi extends PicaApi {
  constructor(auth: string) {
    var req = new PicaHeader()
    req.method = Method.GET
    req.authorization = auth
    super(req)
  }

  async getCategories(): Promise<PicaCategoriesResult> {
    this.req.host = 'https://picaapi.picacomic.com/categories'
    var resp = await this.get()
    return new PicaCategoriesResult(resp)
  }
}

export default PicaIndexApi