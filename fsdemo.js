// const fs = require('fs')
// fs.readFile('abc.txt',(err,data) => {
//     if(err)console.log(err)
//     else console.log(data.toString())
// })

// const fs = require('fs')
// fs.writeFile('ghi.txt',"i am happy",(err) => {
//     if(err)console.log(err);
//     else console.log("successfully updated")
// })

// const fs = require('fs')
// fs.appendFile('ghi.txt'," hola",(err) => {
//     if(err)console.log(err)
//     else console.log("successfully updated")
// })

// const fs = require('fs')
// fs.unlink('abc.txt',(err) => {
//     if(err)console.log(err)
//     else console.log("successfully deleted")
// })

const fs = require('fs')
fs.rename('ghi.txt','abc.txt',(err) => {
    if(err)console.log(err)
    else console.log("successfully renamed")
})