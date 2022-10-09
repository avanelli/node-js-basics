
const fsUtils = require('./fs-utils')
const t = require('tap')

t.test('when existing file readFileContentBuffer return content', async t => {
  const contents = 'test contents'
  const fileName = 'test-file'

  const dir = t.testdir({
    [fileName]: contents,
    link: t.fixture('symlink', fileName)
  })

  const data = await fsUtils.readFileContentBuffer(dir + '/' + fileName)
  t.equal(data, contents)
  t.end()
})

t.test('when non existing file readFileContentBuffer async call throws error', async t => {
  t.plan(1)
  try {
    await fsUtils.readFileContentBuffer('/test-file')
  } catch (error) {
    t.ok('error thrown')
    t.end()
  }
})

t.test('when non existing file readFileContentBuffer thenable call throws error', t => {
  t.plan(1)
  fsUtils.readFileContentBuffer('/test-file')
    .catch(() => {
      t.ok('error thrown')
      t.end()
    })
})

t.test('when existing dir scanDir return files', async t => {
  const dir = t.testdir({
    file1test: '',
    file2test: '',
    file3: ''
  })

  const data = await fsUtils.scanDir(dir, 'test')
  t.same(data, ['file1test', 'file2test'].map((val) => {
    return dir + '/' + val
  }))
})

t.test('when not existing dir scanDir throws error', async t => {
  t.plan(1)
  try {
    await fsUtils.scanDir('/test-dir')
  } catch (error) {
    t.ok('error thrown')
  }
  t.end()
})
