import PicaRequest from 'src/pica_request'
import Header from 'src/net/header'

const base_url = 'https://picaapi.picacomic.com/'
const sign_in_url = base_url + 'auth/sign-in'

export {
  base_url,
  sign_in_url,
  PicaRequest,
  Header,
}