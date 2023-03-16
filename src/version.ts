import { VERSION } from './environment'

const getVersion = () => {
  // @ts-ignore
  return VERSION || '0.0.2'
}

export default getVersion()
