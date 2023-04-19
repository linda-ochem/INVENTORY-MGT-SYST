const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Section = new Schema({
  Location_Id:{
    type: Number,
    required: true
  },
  Plant_section:{
    type: String,
    required: true
  },
  Common_name:{
    type: String,
    required: true
  },
  Name:{
    type: String,
    required: true
  },
  Type:{
    type: String,
    required: true
  },
  Vendor:{
    type: String,
    required: true
  },
  Model:{
    type: String,
    required: true
  },
  Spares_Id:{
    type: Number,
    required: true
  },
  Description:{
    type: String,
    required: true
  },
  Name_Tag:{
    type: String,
    required: true
  },
  Quantity:{
    type: Number,
    required: true
  },
  plant:{
    type: String,
    required: true
  }
},{timestamps: true})

module.exports = mongoose.model('section', Section)