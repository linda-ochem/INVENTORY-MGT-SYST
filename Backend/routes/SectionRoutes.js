const express = require('express')

const Router = express.Router()

const {getSection,
       getSections,
       createSection,
       updateSection,
       deletesection
                    } = require ('../Controllers/SectionControllers')

// get one section
Router.get('/:id', getSection)

// get all sections
Router.get('/', getSections)

//create one section
Router.post('/', createSection)

//update one section
Router.patch('/:id', updateSection)

//delete one section
Router.delete('/:id', deletesection)

module.exports = Router