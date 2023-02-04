/*const { create } = require('domain');
const http=require('http');
const sever =http.createServer((req, res) =>{if (req.url==='/1st mod.js'){res.write('<h1>Hello, Node.js!</h1>');}
res.end();});

//createServer() accepts callback 
sever.listen(5000);
console.log('The HTTP sever is running on port 5000')
*/


const http =require('http');

const sever =http.createServer((req, res)=>{if(req ==='/'){res.write('<h1> Hello Node.js<h1>')}
res.end()});
Server.listen(5000);
console.log("The HTTP server is running on port 5000")
