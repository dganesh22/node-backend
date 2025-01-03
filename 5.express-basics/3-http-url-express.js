const express = require('express')

const port = 4532

// instance 
const app = express()

//app.request(path,controller)

app.get(`/`, function (req, res) {
    res.send(`<div>
                  <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/login">Login</a>
                        </nav>

                    <h1>Home Page</h1>
            </div>`)
})
app.get(`/about`, function (req, res) {
    res.send(`<div>
                  <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/login">Login</a>
                        </nav>

                    <h1>About Page</h1>
            </div>`)
})


app.all(`/*`, function (req, res) {
    res.send(`<div>
        <nav>
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/contact">Contact</a>
                  <a href="/login">Login</a>
              </nav>

          <h1>Requested path not found</h1>
  </div>`)
})

app.listen(port, () => {
    console.log(`server is running @ http://localhost:${port}`)
})


/* 
    app.use() => controller / router / middleware

    app.set() => configuration settings

    app.get() => http get request - read
    app.post() => http post request - create
    app.put()  => http put request - to update all values
    app.patch() => http patch request - to update single value
    app.delete() => http delete request - to delete single value
    app.all() => default route
*/