const Anuncios = require("../Models/Anuncios");


//req = son todos los parametros que se reciben
//res= Es la respuesta que se devuelve

function listanuncios(req, res) {
    Anuncios.find({}, function (err, docs) { //para obtener y devolver informacions
        if (err) {
            return res.send("Error en la busqueda")
        }
        res.send({
            anuncios: docs
        })
    });
}


function create(req, res){
    var anuncios = new Anuncios();
    var params = req.body;

    anuncios.Imagen = params.Imagen
    anuncios.Titulo = params.Titulo
    anuncios.Parrafo = params.Parrafo


    anuncios.save( (error, anunciosCreate) =>{
        if (error){
            res.status(500).send({   //segun el codigo de estado de respuesta el 500 es de error de los servidores
                statusCode : 500,
                message: "Error en el servidor"
            })
        }
        else{
            if (!anunciosCreate){
                res.status(400).send({   //segun el codigo de estado de respuesta el 400 es error de usuario
                    statusCode : 400,
                    message: "Error al insertar el usuario"
                })   
             
            }
            else{
                res.status(200).send({   //segun el codigo de estado de respuesta el 200 es de error 
                    statusCode : 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: anunciosCreate
                }) 
            }
        }
        
    })
}

module.exports ={
    create,
    listanuncios
}