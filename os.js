// os module performs operating system related activities
 const os = require('os')
 console.log(os) 
 let currentOS = {name: os.type(),
arch: os.arch(),
platform: os.platform(),
relese:os.release(),
versiion:os.version()};
console.log(currentOS)
 console.log(`the sever has been up for ${os.uptime()} seconds`)
 console.log(os.userInfo())
 console.log(os.totalmem())
 console.log(os.freemem())
 os.cpus()