# get-source-code-location

Made specifically for working with babylon SourceLocation objects to extract pieces of code from a source file.

### Usage

```javascript
const getSourceCodeLocation = require('get-source-code-location')

getSourceCode(source, {
  start: { line: 8, column: 2 },
  end: { line: 8, column: 12 }
})
// returns a string on 8th line between collumns 2 and 12
// if the file is shorter than 8 lines, it will throw an error
```
