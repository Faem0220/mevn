const mongoose = require('mongoose');//Se crea un esquema para modelar los datos
const {Schema} = mongoose;//Se requiere solo la parte Schema de la biblioteca

const Task = new Schema({//se definen como se modelan los datos
    title: String,
    description:String
});

module.exports = mongoose.model('Task', Task);// Se le da nombre y Schema 



