
const {readFileSync, writeFileSync} = require('fs')
const second = readFileSync('./content/second.txt','utf-8')
const first = readFileSync('./content/first.txt','utf-8')
console.log(first, second)

writeFileSync(
    './content/result-synch.txt',
    `Here is the result:${first},${second}`,
    {flag:'a'}
)