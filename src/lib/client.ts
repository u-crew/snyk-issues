import got from 'got';
import { getSnykToken, getSnykApiUrl } from './env.js'

const snykApiClient = got.extend({
  prefixUrl: getSnykApiUrl(),
  headers: {
    'Authorization': getSnykToken(),
    'Content-Type': 'application/vnd.api+json'
  },
});

export default snykApiClient;