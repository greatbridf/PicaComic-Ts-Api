import PicaResult from '@src/result/result'

class PicaLoginResult extends PicaResult {
  private token: string

  constructor(responseJson: any) {
    super(responseJson)
    var data = this.getData('data')
    if (data.token) {
      this.token = data.token
    } else {
      throw new Error('authorization token not found')
    }
  }

  getToken(): string {
    return this.token
  }
}

export default PicaLoginResult