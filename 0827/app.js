const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    const url = req
        .url
        .endsWith('/')
            ? `${req.url}index.html`
            : req.url
    const ext = url.split('.')[1]

    switch (ext) {
        case("html"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("css"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/css')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("js"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/javascript')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        case("json"):
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            fs
                .createReadStream(`.${url}`)
                .pipe(res)
            break;
        default:
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})