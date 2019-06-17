class PicaResult {
  protected responseJson: any

  constructor(responseJson: any) {
    if (typeof(responseJson) === 'string') {
      this.responseJson = JSON.parse(responseJson)
    } else {
      this.responseJson = responseJson
    }
  }

  getData(name: string): any {
    if (this.responseJson[name]) {
      return this.responseJson[name]
    } else {
      throw new Error('data not found')
    }
  }
}

export default PicaResult