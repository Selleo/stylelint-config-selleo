import {expect, test} from '@oclif/test'

describe('fix-current', () => {
  test
  .stdout()
  .command(['fix-current'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['fix-current', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
