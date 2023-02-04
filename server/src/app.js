import express from "express"
import http from 'http'
import {Server} from 'socket.io'
import {router} from './routes.js'
import logginMiddleware from './middleware.js'

const PORT = process.env.PORT;
const app = express();
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('user: ',socket.id, ' connected')
    socket.on('disconnect', () => {
        console.log('user: ',socket.id, ' disconnected')
    })
});


app.set('view engine','pug')
app.set('views', 'src/views')
app.set('trust proxy',true)
app.disable("x-powered-by")

app.use('/public',express.static('src/public'))
app.use(logginMiddleware)
app.use(router)


const startServer = async () => {
    try{
        server.listen(PORT, () =>
          console.log("El servidor esta en escucha")
        )
    }catch(error){
        console.log('Se ha produccido un error al intentar iniciar el servidor: ',error)
    }
} 


export {startServer, io}