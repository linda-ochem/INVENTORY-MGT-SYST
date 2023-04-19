const Section = require('../Model/Section')
const mongoose = require('mongoose')

//to create a section
const createSection = async (req, res)=>{
    const {Location_Id, Plant_section, Common_name, Name, Type, 
        Vendor, Model, Spares_Id, Description, Name_Tag, Quantity, plant} = req.body

    let emptyFields = []
    if(!Location_Id){
        emptyFields.push('location_Id')
    }
    if(!Plant_section){
        emptyFields.push('Plant_section')
    }
    if(!Common_name){
        emptyFields.push('Common_name')
    }
    if(!Name){
        emptyFields.push('Name')
    }
    if(!Type){
        emptyFields.push('Type')
    }
    if(!Vendor){
        emptyFields.push('Vendor')
    }
    if(!Model){
        emptyFields.push('Model')
    }
    if(!Spares_Id){
        emptyFields.push('spares_Id')
    }
    if(!Description){
        emptyFields.push('Description')
    }
    if(!Name_Tag){
        emptyFields.push('Name_Tag')
    }
    if(!Quantity){
        emptyFields.push('Quantity')
    }
    if(!plant){
        emptyFields.push('plant')
    }

    if(emptyFields.length > 0){
        res.status(200).send('Some required fields are missing', [])
    }

    try {
        const section = await Section.create({Location_Id, Plant_section, Common_name, Name, Type, 
            Vendor, Model, Spares_Id, Description, Name_Tag, Quantity, plant})
        res.status(200).json(section)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//to get all sections
const getSections = async (req, res)=>{
    const section = await Section.find({}).sort({createdAt: -1})
    res.status(200).json(section)
}

//get one section
const getSection = async(req, res)=>{
    const {id} = req.params
const section = await Section.find({}).where({Name: id})

    if(!section){
        return res.status(404).json({error:'No such section'})
    }
    res.status(200).json(section)
    console.log(section)
}

//to update a section
const updateSection = async (req, res)=>{
    const {id} = req.params
    const section = await Section.findOneAndUpdate({Name: id}, {...req.body})
    if(!section){
        res.status(404).json({error: "No such workout session"})
    }
    res.status(200).json(section)
}

//to delete a section
const deletesection = async (req,res)=>{
    const {id} = req.params
    const section = await Section.findOneAndDelete({Name: id})
    if(!section){
        res.status(404).json({error: 'no such section'})
    }
    res.status(200).json(section)
}

module.exports = {
    getSection,
    createSection,
    getSections,
    updateSection,
    deletesection
}
