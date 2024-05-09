import {test} from '@oclif/test'

// Ensure to set SNYK_TOKEN & environment variables for SNYK_API_URL if using non US-MT
describe('sync:group', () => {
  test
  .command(['sync:group'])
  .it('[+] sync group successfully')
})