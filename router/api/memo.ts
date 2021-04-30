import Router from 'koa-router'

import { getAllMemo, createMemo, editMemo, deleteMemo } from '../../controller/memoController'

const router = new Router()

router.post('/', createMemo)
router.get('/', getAllMemo)
router.put('/:id', editMemo)
router.delete('/:id', deleteMemo)

export default router;