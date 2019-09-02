import { Service } from '..'
import { action } from 'mobx'

export class HomeService extends Service {

  constructor (path: string = '/api') {
    super(path)
  }

  @action public async traffic (data: any = {}): Promise<any> {
    return this.get('/index/traffic', data)
  }
}

export default new HomeService()