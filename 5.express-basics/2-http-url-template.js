const http = require('http')
const PORT = 3435

const server = http.createServer(function (req, res) {

    if (req.url === "/") {
        res.end(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/login">Login</a>
                        </nav>

                        <h1>Home Section</h1>
                </div>`)
    } else if (req.url === "/about") {
        res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </nav>

            <h1>About Section</h1>
    </div>`)
    } else if (req.url === "/contact") {
        res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </nav>

            <h1>Contact Section</h1>
    </div>`)
    } else {
        res.end(`<div>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </nav>

            <h1>Requested path not found</h1>
    </div>`)
    }
})

server.listen(PORT, () => {
    console.log(`server is running @ http://localhost:${PORT}`)
})