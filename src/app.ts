import express, { Request, Response} from 'express'
const routes = require('@/routes')
var app = express()

var port:number|string = process.env.PORT || 3000
// var routes = express.routes()
routes(app)

app.use('/api', routes)

app.listen(port)