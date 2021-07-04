const mongoose = require("mongoose");
const schema = mongoose.Schema;

var registroSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Email: String,
    Contacto: Number,
    Mascota: String,
    Ayuda: String,
});

module.exports = mongoose.model("Registro", registroSchema);