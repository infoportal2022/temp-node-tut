const http= require('http')
const server = http.createServer((req,res)=>{
    //gives you all the properties of the  request 
    //console.log(req)
    //res.write('welcome to our home page')
    //res.end()
    if(req.url ==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }if(req.url != '/' || req.url != '/about'){
        res.end("sorry doesnt exist")
    }
 
})
server.listen(5000)