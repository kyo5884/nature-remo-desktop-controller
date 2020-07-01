import { Cloud } from 'nature-remo'
import Settings from './settings'
const Remo = new Cloud(Settings.get('api_token'))

export default Remo
