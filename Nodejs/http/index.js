const http = require("http");

const server = http.createServer((req,res)=>{
    const pathName = req.url;
    if(pathName === '/')
    res.end("hello from other sides server");
    else if(pathName ==='/about')
    res.end("hello from about");
    else if(pathName==='/payment')
    res.end("Pay us");
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end("<h1>File not found</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening")
})

