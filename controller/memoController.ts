import { Context } from 'koa'
import db from '../model'

export const getAllMemo = async (ctx: Context) => {
    ctx.response.body = await db.Memo.find({
        isDeleted: false
    })
}

export const createMemo = async (ctx: Context) => {
    const { title, content } = ctx.request.body

    await db.Memo.create({
        title,
        content
    })

    ctx.response.status = 201
    ctx.response.message = 'Created'
}

export const editMemo = async (ctx: Context) => {
    const update: Record<string, unknown> = {}
    if (ctx.request.body.title)
        update.title = ctx.request.body.title
    if (ctx.request.body.content)
        update.content = ctx.request.body.content

    await db.Memo.updateOne({
        id: ctx.params.id,
        isDeleted: false
    }, update)

    ctx.response.status = 200
    ctx.response.message = "Edited"
}

export const deleteMemo = async (ctx: Context) => {
    await db.Memo.updateOne({
        id: ctx.params.id,
        isDeleted: false
    }, {
        isDeleted: true
    })

    ctx.response.status = 200
    ctx.response.message = "Deleted"
}