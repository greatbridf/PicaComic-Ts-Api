import PicaResult from '@src/result/result'

interface PicaCategory {
  title: string,
  thumb: PicaThumb,
  isWeb: boolean,
  active: boolean,
  link: string,
}

interface PicaThumb {
  originalName: string,
  path: string,
  fileServer: string,
}

class PicaCategoriesResult extends PicaResult {
  categories: PicaCategory[]

  constructor(response: any) {
    super(response)
    this.categories = this.getData('categories')
  }
}

export default PicaCategoriesResult