import {expect, test} from '@oclif/test'

describe('sync:group', () => {
  test
  .stdout()
  .command(['sync:group'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['sync:group', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
