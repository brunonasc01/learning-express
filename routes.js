const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
   
    if(url === '/'){
        res.write('<html><head><body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></head></html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile('message.txt', message, (err) => { //melhor usar writeFile no lugar de writeFileSync
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); 
        });     
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><body><h1>Hello from my node-js server</h1></body></head></html>')
    res.end();
};

//expoe a funcao globalmente
// module.exports = requestHandler;

//expondo como objeto
module.exports = {
    handler: requestHandler
}