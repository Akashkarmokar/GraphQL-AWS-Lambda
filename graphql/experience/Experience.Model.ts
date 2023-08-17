import { Schema, model } from 'mongoose'


interface ISkill{
    type: string,
    name: string
}


const skillSchema = new Schema<ISkill>({
    type: { type: String, default:''},
    name: { type: String, default:''}
},{
    _id: false
})

interface IExperience {
    company_name: string
    location: string
    designation: string
    skills: [ISkill]
}


const experienceSchema = new Schema<IExperience>({
    company_name: { type: String, default: ''},
    location: { type: String, default: ''},
    designation: { type: String, default:''},
    skills:[
        skillSchema
    ]
})

let Experience;
export default Experience = model<IExperience>('Experience', experienceSchema)
