import mongoose from 'mongoose'

export default (autoIncrement: any) => {
    const memoSchema = new mongoose.Schema({
        id: {
            type: Number
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps: true
    })

    memoSchema.plugin(autoIncrement.plugin, {
        model: 'Memo',
        field: 'id',
        startAt: 1,
        increment: 1
    })

    const Memo = mongoose.model('Memo', memoSchema)

    return {
        Memo
    }
}