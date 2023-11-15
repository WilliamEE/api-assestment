import { Request, Response} from 'express'

const routes = (app:any) => {
    app.use(function(req:Request, res:Response, next: ()=>void) {
        console.log(`Se hizo una peticion ${ req.method } a la url:${ req.url }`)
        next()
    })

    // siempre se inicializa la ruta
    app.get('/', function(req:Request, res:Response) {
        res.json({
            'message': 'Mi primer api'
        })
    })
}

module.exports = routes