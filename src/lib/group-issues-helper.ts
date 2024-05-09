import got from 'got';

import { getSnykApiUrl, getSnykApiVersion, getSnykGroup, getSnykToken } from './env.js'
import { appendableContentWriter, newFileContentWriter } from './file-manager.js';


const options = {
  headers: {
    'Authorization': getSnykToken(),
    'Content-Type': 'application/vnd.api+json'
  },
};

const nextUrlExists = (url: string ): boolean => url.startsWith("/rest");


const initiateGroupIssuesSync = async () => {
  const client = got.extend(options);
  const response =  await client.get(
    `${getSnykApiUrl()}/rest/groups/${getSnykGroup()}/issues?version=${getSnykApiVersion()}`
  );
  // To-Do: File logger
  // To-Do: Handle verbose
  console.log(`Group Issues Sync initiated for GroupID: ${getSnykGroup()}`);
  const body = JSON.parse(response.body);
  // Writing content to issues
  console.log(`Writing ${body.data.length} issues`);
  newFileContentWriter(body.data)
  // get Paginated data
  await paginateGroupIssuesSync(body.links.next);
  console.log(`Group Issues Sync completed for GroupID: ${getSnykGroup()}`);
};

const paginateGroupIssuesSync = async (url: string) => {
  const client = got.extend(options);
  const response =  await client.get(
    `${getSnykApiUrl()}${url}`
  );
  const body = JSON.parse(response.body);
  console.log(`Writing paginated data. Total: ${body.data.length} issues`);
  appendableContentWriter(body.data)
  // Check if pagination exists
  if (body.links.next && nextUrlExists(body.links.next)) {
    await paginateGroupIssuesSync(body.links.next);
  }

};

export default initiateGroupIssuesSync;