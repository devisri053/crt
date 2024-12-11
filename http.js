const http = require('http')
const serv = http.createServer((req,res) => {
    res.write('hello world')
    res.end()
})
serv.listen(5055,() => {
    console.log("Server started")
})