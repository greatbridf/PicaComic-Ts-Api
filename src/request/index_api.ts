import PicaApi from '@src/request/api'
import { Method, PicaHeader } from '@src/header'
import PicaCategoriesResult from '@src/result/index/categories_result'

class PicaIndexApi extends PicaApi {
  constructor(header: PicaHeader) {
    header = header.copy()
    header.method = Method.GET
    super(header)
  }

  async getCategories(): Promise<PicaCategoriesResult> {
    this.header.host = 'https://picaapi.picacomic.com/categories'
    var response = await this.get()
    return new PicaCategoriesResult(response)
  }
}

export default PicaIndexApi