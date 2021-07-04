const mongoose = require("mongoose");
const schema = mongoose.Schema;

var adoptSchema = new mongoose.Schema({
    Imagen: String,
    Nombre: String,
    Descripcion: String,
    Edad: Number,
});

module.exports = mongoose.model("Adopta", adoptSchema);