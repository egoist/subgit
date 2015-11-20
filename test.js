import test from 'ava'
import pathExists from 'path-exists'
import Subgit from './'
const subgit = new Subgit()

test('init', t => {
  subgit.init()
  t.ok(subgit.rcExists())
  t.end()
})
