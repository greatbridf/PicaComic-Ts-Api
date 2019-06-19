import PicaResult from '@src/result/result'

class PicaLoginResult extends PicaResult {
  token: string

  constructor(response: any) {
    super(response)
    this.token = this.getData('token')
  }
}

export default PicaLoginResult