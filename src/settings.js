import Store from 'electron-store'

const schema = {
  api_token: { type: 'string' },
}

export default new Store({ schema })
