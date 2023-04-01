const express= require('express')
const app= express()

const PORT= process.env.PORT || 9999

app. get("/",(req,res)=>{
    res.send(" Response from Remote server")
})
app. listen(PORT)