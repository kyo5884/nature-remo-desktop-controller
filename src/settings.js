import Store from 'electron-store'

const schema = {
  api_token: { type: 'string', default: '' },
}

export default new Store({ schema })
