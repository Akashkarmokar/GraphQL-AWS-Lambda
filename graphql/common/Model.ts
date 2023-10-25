import nid from 'nid'
import mongoose, { Schema } from 'mongoose'


export const Id = new Schema({
    _id: {
        type: String,
        immutable: true
    }
})


Id.pre('save', function (next) {
    this._id = nid(17)
    next()
})


