import MemoAPI from './memo'
import Router from 'koa-router'

const router = new Router()

router.use('/memo', MemoAPI.routes())

export default router;