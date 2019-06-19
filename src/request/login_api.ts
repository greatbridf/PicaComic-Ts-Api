import { Method, PicaHeader } from '@src/header'
import PicaApi from '@src/request/api'
import PicaLoginResult from '@src/result/login_result'

class PicaLoginApi extends PicaApi {
  constructor() {
    var req = new PicaHeader()
    req.host = 'https://picaapi.picacomic.com/auth/sign-in'
    req.method = Method.POST
    super(req)
  }

  async login(username: string, password: string): Promise<PicaLoginResult> {
    var resp = await this.postData({
      email: username,
      password: password,
    })
    return new PicaLoginResult(resp)
  }
}

export default PicaLoginApi