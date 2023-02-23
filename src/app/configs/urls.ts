import {environment} from '../../environments/environment';

const {API,APIKEY} = environment;

const urls = {
  convert: `${API}/convert`,
  apiKey: `?apikey=${APIKEY}`
}

export {urls}
