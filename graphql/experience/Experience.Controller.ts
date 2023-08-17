import Experience  from './Experience.Model.js';

export const addExperience = async (parent, args, context) {
    const { inputData } = args;
    const { company_name, location, designation, skills } = inputData;
    const newExperience = new Experience({
        company_name,
        location,
        designation,
        skills
    })
    console.log({ newExperience })
    const res = await newExperience.save()
    console.log({ res: res })
    return res
}