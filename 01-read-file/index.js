const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream(
  //   `${path.dirname(__filename)}\\text.txt`
  `${__dirname}\\text.txt`,
  'utf-8'
);

readableStream.on('data', (chunk) => console.log(chunk));
