const express= require('express')
const app= express()

const PORT= process.env.PORT || 9999

app. get("/",(req,res)=>{
    res.send(" Response from Railway server")
})
app. listen(PORT)