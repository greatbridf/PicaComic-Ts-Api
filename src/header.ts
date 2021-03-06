import Header from '@src/net/header'
import generator from '@src/utils/generator'

enum Method {
  GET = 'GET',
  POST = 'POST',
}

class PicaHeader {
  private header: Header = new Header()
  private readonly secret_key = '~n}$S9$lGts=U)8zfL/R.PM9;4[3|@/CEsl~Kk!7?BYZ:BAa5zkkRBL7r|1/*Cr'

  host: string
  method: Method
  private auth: string

  constructor() {
    this.header.set('api-key', 'C69BAF41DA5ABD1FFEDC6D2FEA56B')
    this.header.set('accept', 'application/vnd.picacomic.com.v1+json')
    this.header.set('app-build-version', '41')
    this.header.set('app-channel', '1')
    this.header.set('app-version', '2.1.0.8')
    this.header.set('app-uuid', generator.uuid_gen())
    this.header.set('app-platform', 'android')
    this.header.set('Content-Type', 'application/json; charset=UTF-8')
    this.header.set('nonce', this.genNonce())
    this.header.set('User-Agent', 'okhttp/3.8.1')
  }

  setCustomHeader(key: string, value: string) {
    this.header.set(key, value)
  }

  set authorization(auth: string) {
    this.auth = auth
    this.header.set('authorization', auth)
  }

  get authorization(): string {
    return this.auth
  }

  getRequest(): Header {
    this.header.set('time', (Date.now() / 1000).toFixed(0))
    this.header.set('signature', this.genSignature())
    return this.header
  }

  copy(): PicaHeader {
    return Object.create(this)
  }

  private genNonce(): string {
    var uuid = generator.uuid_gen()
    while (uuid.indexOf('-') !== -1) {
      uuid = uuid.replace('-', '')
    }
    return uuid
  }

  private genSignature(): string {
    if (!this.host) {
      throw 'request host not given'
    }
    if (!this.method) {
      throw 'request method not given'
    }
    var url = this.host
    url = url.replace('https://picaapi.picacomic.com/', '')
    url = url + this.header.get('time') + this.header.get('nonce') + this.method + this.header.get('api-key')
    url = url.toLowerCase()
    return require('js-sha256').hmac(this.secret_key, url)
  }
}

export default PicaHeader
export {
  Method,
  PicaHeader,
}