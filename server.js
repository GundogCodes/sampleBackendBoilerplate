const express = require('express')
const app = express()
const fs = require('fs')
const port  = 3000


app.get('/',(req,res) => {
    res.send('<h1>Hellloo World!! How are you!!</h1>')
})

app.listen(port,() => {
    console.log('Yes Im listening on port 3000')
})