/*import{add,subtract}from './math';
let result = add(20,10);
console.log(result)

result= subtract(10,40)
console.log(result)*/

const _=require('lodash')
const items =[1,[2,[4]]];
const newItem = _.flattenDeep(items)
console.log(newItem)