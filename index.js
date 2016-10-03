module.exports = (source, sourceLocation) => {
  if (!source) {
    throw new TypeError('source parameter is falsy')
  }
  source = source.replace(new RegExp('\r?\n','g'), '\n')
  function nthIndexOf (pattern, n) {
    let i = -1

    while (n-- && i++ < source.length) {
      i = source.indexOf(pattern, i)
      if (i < 0) break
    }

    return i
  }
  const startLineIndex = nthIndexOf('\n', sourceLocation.start.line - 1)
  const endLineIndex = nthIndexOf('\n', sourceLocation.end.line - 1)
  if (startLineIndex === -1 && endLineIndex === -1) {
    throw new Error('source location is outside the file')
  }
  start = startLineIndex + sourceLocation.start.column + 1
  end = endLineIndex + sourceLocation.end.column + 1
  if (start > source.length || end > source.length) {
    throw new Error('source location is outside the file')
  }
  return source.substring(start, end)
}
