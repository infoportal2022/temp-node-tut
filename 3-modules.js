//in order to acess export from other modules(in node all files are module)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi= require('./5- utils')
sayHi(names.jhon)
sayHi(names.peter)

const data =  require('./6-alternativewaytoexport')
console.log(data)

//alternatively
// const {jhon, peter} = require('./4-names')
// sayHi(jhon)
// sayHi(peter)
require('./7-mindgrenade');
// even if we dont assing it to a variable and call it, if there is a function that is execusted in the module it will run . when we invoke it 
