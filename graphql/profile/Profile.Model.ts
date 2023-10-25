import mongoose, { Schema } from 'mongoose'
import { Id } from '../common/Model.js'
import { SchemaMaker } from '../common/SchemaMaker.js'


interface IProfileSchema {
    _id: String,
    name: String
}

const schema = {
    name: {
        type: String,
        require: true
    },
    designation:{
        type: String,
        default: 'NGY' // Not Given yet
    },
    bio: {
        type: String,
        default: 'NGY' // Not Given yet
    }
}

const options = {}

const ProfileSchema = new Schema(
    SchemaMaker(schema,options)
)
let ProfileCollection;
export default ProfileCollection = mongoose.model<IProfileSchema>('profile', ProfileSchema)
