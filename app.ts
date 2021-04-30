import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'

import apiRouter from './router/api'

const app = new Koa()
const router = new Router()

router.use('/api', apiRouter.routes())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5000, () => {
    console.log('Koa is Running')
})