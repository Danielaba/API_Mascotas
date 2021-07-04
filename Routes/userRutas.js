const express = require("express");
const adoptaController = require("../Controllers/AdoptaController");
const registroController = require("../Controllers/RegistroController");
const anunciosController = require("../Controllers/AnunciosController");

const api = express.Router();
/**
 * POST: Para instalar datos y enviar datos sensibles
 * GET: Para obtener datos
 * PUT: Para modificar informacion o actuallizar
 * DELETE:  Para eliminar informacion 
 */
//MVC

//Ruta Adopta

api.get("/adopta", adoptaController.listadopta );
api.post("/adopta", adoptaController.create );

//Ruta Registro

api.post("/registro", registroController.create );

//Ruta Anuncios

api.get("/anuncios", anunciosController.listanuncios );
api.post("/anuncios", anunciosController.create );



module.exports = api;

