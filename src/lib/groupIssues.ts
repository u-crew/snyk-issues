import got from 'got';
import { getSnykToken, getSnykApiUrl, getSnykApiVersion, getSnykGroup } from './env.js'


const options = {
  headers: {
    'Authorization': getSnykToken(),
    'Content-Type': 'application/vnd.api+json'
  },
};


export const initiateGroupIssuesCall = async () => {
  const client = got.extend(options);
  const response =  await client.get(
    `${getSnykApiUrl()}/groups/${getSnykGroup()}/issues?version=${getSnykApiVersion()}`
  );
  const body = JSON.parse(response.body);
  return body
}