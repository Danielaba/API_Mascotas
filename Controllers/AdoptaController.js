const Adopta = require("../Models/Adopta");


//req = son todos los parametros que se reciben
//res= Es la respuesta que se devuelve

function listadopta(req, res) {
    Adopta.find({}, function (err, docs) { //para obtener y devolver informacions
        if (err) {
            return res.send("Error en la busqueda")
        }
        res.send({
            anuncios: docs
        })
    });
}


function create(req, res) {
    var mascotas = new Adopta();
    var params = req.body;

    mascotas.Imagen = params.Imagen
    mascotas.Nombre = params.Nombre
    mascotas.Descripcion = params.Descripcion
    mascotas.Edad = params.Edad

    mascotas.save((error, mascotasCreate) => {
        if (error) {
            res.status(500).send({   //segun el codigo de estado de respuesta el 500 es de error de los servidores
                statusCode: 500,
                message: "Error en el servidor"
            })
        }
        else {
            if (!mascotasCreate) {
                res.status(400).send({   //segun el codigo de estado de respuesta el 400 es error de usuario
                    statusCode: 400,
                    message: "Error al insertar el usuario"
                })

            }
            else {
                res.status(200).send({   //segun el codigo de estado de respuesta el 200 es de error 
                    statusCode: 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: mascotasCreate
                })
            }
        }

    })
}

module.exports = {
    create,
    listadopta

}

