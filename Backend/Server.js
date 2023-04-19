require('dotenv').config()
const express = require('express')
const mongoose = require ('mongoose')
const Section = require('./routes/SectionRoutes')

const app = express()
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})


mongoose.connect(process.env.MONGOOSE_CONNECTION_URI).then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log(`MongoDb is connected at port ${process.env.PORT}
                        Press CTRL+C to stop the server.`)
    })
}).catch(err=>{
    console.log(err)
})

app.use('/api/section/',Section)

