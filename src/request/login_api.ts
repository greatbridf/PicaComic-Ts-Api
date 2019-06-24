import { Method, PicaHeader } from '@src/header'
import PicaApi from '@src/request/api'
import PicaLoginResult from '@src/result/login_result'

class PicaLoginApi extends PicaApi {
  constructor(header: PicaHeader) {
    header = header.copy()
    header.host = 'https://picaapi.picacomic.com/auth/sign-in'
    header.method = Method.POST
    super(header)
  }

  async login(username: string, password: string): Promise<PicaLoginResult> {
    var response = await this.postData({
      email: username,
      password: password,
    })
    return new PicaLoginResult(response)
  }
}

export default PicaLoginApi