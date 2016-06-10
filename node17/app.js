var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 8 * 1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);
