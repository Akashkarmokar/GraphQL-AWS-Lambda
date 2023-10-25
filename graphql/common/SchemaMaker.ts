import { Id } from "./Model"

export const SchemaMaker = (schemaObject: any,options: any)=>{
    const finalSchema = [
        Id,
        schemaObject
    ]
    return finalSchema
}