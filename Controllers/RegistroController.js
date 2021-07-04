const Registro = require("../Models/Registro");


//req = son todos los parametros que se reciben
//res= Es la respuesta que se devuelve

function create(req, res){
    var persona = new Registro();
    var params = req.body;

    persona.Nombre = params.Nombre
    persona.Apellido = params.Apellido
    persona.Email = params.Email
    persona.Contacto = params.Contacto
    persona.Mascota = params.Mascota
    persona.Ayuda = params.Ayuda

    persona.save( (error, personaCreate) =>{
        if (error){
            res.status(500).send({   //segun el codigo de estado de respuesta el 500 es de error de los servidores
                statusCode : 500,
                message: "Error en el servidor"
            })
        }
        else{
            if (!personaCreate){
                res.status(400).send({   //segun el codigo de estado de respuesta el 400 es error de usuario
                    statusCode : 400,
                    message: "Error al insertar el usuario"
                })   
             
            }
            else{
                res.status(200).send({   //segun el codigo de estado de respuesta el 200 es de error 
                    statusCode : 200,
                    message: "Usuario almacenado correctamente",
                    dataUser: personaCreate
                }) 
            }
        }
        
    })
}

module.exports ={
    create
}