const express = require('express');


const app = express();


app.get('/', (req, res)=> {
    res.send('this is wokring')
})

app.listen(3000, ()=> {
    console.log('app is running on port 3000')
})