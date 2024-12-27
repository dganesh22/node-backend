// http server 
const http = require('http')
const port = 4500

http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" })
    res.end(`
            <div>
                <h1>welcome to http server</h1>
                <p>This is an example text message</p>
                <img src="http://picsum.photos/600/600" alt="no text">
            </div>
            `)
}).listen(port)

console.log(`server is running @ http://localhost:${port}`)