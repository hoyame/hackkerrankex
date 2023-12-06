const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});


server.listen(port, hostname, () => {
    var fffff = 5;

    let i = 0;
    let n = 0;
    let str = "";


    for (i = 0; i <= fffff; i++) {
        for (n = n; n <= i; n++) {


            str = str + "#";
        }
        
        console.log(str);
    }
});