import test from 'ava'
import getSourceCode from '../index'

const sourceLocation = {
 start: { line: 8, column: 2 },
 end: { line: 8, column: 12 }
}

test('work with unix line endings', t => {
  t.is(getSourceCode(`function foo() {
  var a = 10
  a = 5
  a++
  a--
  --a
  ++a
  return a+1
}`, sourceLocation), 'return a+1')
})

test('works with windows line endings', t => {
  t.is(getSourceCode(`function foo() {\r\n  var a = 10\r\n  a = 5\r\n  a++\r\n  a--\r\n  --a\r\n  ++a\r\n  return a+1\r\n}`, sourceLocation), 'return a+1')
})

test('throws if parameters are empty or null', (t) => {
  t.throws(() => {
    getSourceCode('', null)
  }, 'source parameter is falsy')
})

test('throws if location is outside the file', (t) => {
  t.throws(() => {
    getSourceCode('function(){}', {
     start: { line: 8, column: 2 },
     end: { line: 8, column: 12 }
    })
  }, 'source location is outside the file')
})
