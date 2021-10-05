var http = require('http'); 
var fs = require('fs');


const PORT= process.env.PORT||5000;
var server = http.createServer(function (req, res) {  
    if (req.url == '/') { 
            res.writeHead(200,{'Content-type':'text/html'});
            
            fs.readFile('./index.html',null,function(error,data){

                if(error){
                    res.writeHead(404);
                    res.write('File not Found!')
                }else{
                    res.write(data);
        
                }
        res.end();
            });
    }
    
    else if (req.url == "/successful.html") {
        res.writeHead(200,{'Content-type':'text/html'});
        fs.readFile('./successful.html',null,function(error,data){
            if(error){
                res.writeHead(404);
                res.write('File not Found!')
            }else{
                res.write(data);
    
            }
    res.end();
        });
    }
  
    else
    
        res.end('Invalid Request!');

});

server.listen(PORT,()=>{
    
console.log('Server running on port ' + PORT)
});
