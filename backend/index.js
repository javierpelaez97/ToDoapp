const mongoose = require("mongoose")
const express = require ("express")
require('dotenv').config();


const app = express()

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('conexion con la base de datos existosa');
    
})
.catch((err)=>{
    console.log(`Error al conectar con la base de datos ${err} `);
    
})

app.use(express.json())

app.get('/', (req,res)=>{
    res.send ('API funcionando...')
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    
})