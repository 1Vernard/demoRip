const path = require('path')
console.log(path)
console.log(path.basename('./os.js/1-Global.js/2nd mod.js'))
console.log(path.dirname('/1st mod.js'))
const result =path.format({dir: 'public_thml/home/js',
base:'app.js'})

console.log(result)
//const pathisabsoluute= path.isAbusolute('./os.js')
//console.log(pathisabsoluute)

const pathToDir = path.join('/1-Global.js','os.js','2nd mod.js')
console.log(pathToDir)
path.parse()
path.normalize();
/*path.relative(from, to)=> accepts two arguments and returns the 
relative path between them based on the current working dir*/
/*path.resolve()method accepts a sequence of paths segment and resolve it into an 
absolute path. if you don't pass any arguments into the path.resolve() it will return the working dir*/