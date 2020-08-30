import Store from 'electron-store'

const schema = {
  api_token: { type: 'string' },
  update_interval: { type: 'number' }, // in minutes
}

export default new Store({ schema })
