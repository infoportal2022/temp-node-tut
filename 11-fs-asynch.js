
const {readFileSync, writeFileSync, readFile} = require('fs')

// asych way of reading a file 
readFile('./content/first.txt','utf-8',(err,result)=>{
    if (err){
        console.log(err)
        return err
    }
    //console.log(result)
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return err
        }
        const second = result
        console.log(second)
        writeFileSync('./content/result-asynch.txt',
        `Here is the reusult ${first} ${second}`,
        {flag:'a'},
        'utf-8',
        (err,result)=>{
            if(err){
                console.log(err)
                return err
            }
            const write = result
            console.log(write)
        })
    })
})