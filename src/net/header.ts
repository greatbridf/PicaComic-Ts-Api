class Header {
  private header: object = {}

  set(key: string, value: string) {
    this.header[key] = value
  }

  get(key: string): string {
    return this.header[key]
  }

  json(): string {
    console.log(JSON.stringify(this.header))
    return JSON.stringify(this.header)
  }
}

export default Header