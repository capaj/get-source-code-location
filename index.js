module.exports = (source, sourceLocation) => {
  source = source.replace(new RegExp('\r?\n','g'), '\n')
  function nthIndexOf (pattern, n) {
    let i = -1

    while (n-- && i++ < source.length) {
      i = source.indexOf(pattern, i)
      if (i < 0) break
    }

    return i
  }
  start = nthIndexOf('\n', sourceLocation.start.line - 1) + sourceLocation.start.column + 1
  end = nthIndexOf('\n', sourceLocation.end.line - 1) + sourceLocation.end.column + 1

  return source.substring(start, end)
}
