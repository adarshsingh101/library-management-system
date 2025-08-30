const express = require('express');

const app = express();

const PORT = 8091;

app.use(express.json())

app.get('/', (req, res) =>{
    res.status(200).json({
         message: "Home Page"
    })
})




app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`);
    
})