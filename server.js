 const http = require('http');
const server = http.createServer((req,res)=>
{
    res.write("hello, How are you doing,do you like pizz")
    res.end();
});
server.listen(8888, () =>{                               //8888 it is address of server 
    console.log("server is running on port 8888")
});

