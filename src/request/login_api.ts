import PicaRequest from '@src/request/request'
import PicaApi from '@src/request/api'
import PicaLoginResult from '@src/result/login_result'

class PicaLoginApi extends PicaApi {
  private username: string
  private password: string

  constructor(username: string, password: string) {
    var req = new PicaRequest()
    req.setHost('https://picaapi.picacomic.com/auth/sign-in')
    req.setMethod('POST')
    super(req)

    this.username = username
    this.password = password
  }

  async login(): Promise<PicaLoginResult> {
    var resp = await this.postData({
      email: this.username,
      password: this.password,
    })
    return new PicaLoginResult(resp)
  }
}

export default PicaLoginApi