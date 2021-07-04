const mongoose = require("mongoose");
const schema = mongoose.Schema;

var anunciosSchema = new mongoose.Schema({
    Imagen: String,
    Titulo: String,
    Parrafo: String,
});

module.exports = mongoose.model("Anuncios", anunciosSchema);