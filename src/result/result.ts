interface PicaResultData {
  token?: string,
  categories?: string[],
}

class PicaResult {
  protected response: any
  protected responseData: PicaResultData

  constructor(response: any) {
    if (typeof(response) === 'object') {
      this.response = response
    } else {
      this.response = JSON.parse(response)
    }
    if (this.response.data) {
      this.responseData = this.response.data
    } else {
      throw new Error('data not found')
    }
  }

  getData(name: string): any {
    if (this.responseData[name]) {
      return this.responseData[name]
    } else {
      throw new Error('data not found')
    }
  }
}

export default PicaResult