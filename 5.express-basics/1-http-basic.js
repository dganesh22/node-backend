const http = require('http')

const server = http.createServer(function (req, res) {
    // req - incoming data , res - outgoing response

    // req.url -> read the url path of frontend 
    // req.method  -> read the input http request

    let url = req.url;
    let method = req.method;

    return res.end(JSON.stringify({ method, url }))
})

// start the server
server.listen(4262, () => {
    console.log(`server is connected and running @ http://localhost:${4262}`)
})