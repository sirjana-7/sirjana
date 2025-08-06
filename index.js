const http = require("http")
const app = require("./src/config/express.config.js")


const httpServer = http.createServer(app)
const HOST = '127.0.0.1'
const PORT = 9000

httpServer.listen(PORT,HOST,(error)=>{
    console.log("server is running on port",PORT);
    console.log("press CTRL+C to disconnect to server");
})

