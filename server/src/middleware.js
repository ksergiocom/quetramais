import {io} from './app.js'
import {insert_req, select_req} from './sql.js'

export default async function (req,_res,next){
    const {url, method, ip} = req

    if(url==='/' || url.includes('/public') || url==='/favicon.ico') return next()


    await insert_req(url,method,ip)
    const requests = await select_req()
    io.emit('update', requests)


    return next()
}