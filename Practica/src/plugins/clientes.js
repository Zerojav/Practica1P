const {v4:uuid} = require("uuid")
const generarId =()=>{
    return uuid()
}

const clientes = [
    {
        id:1,
        cedula:"1351663917",
        nombre:"Javier Mero",
        telefono:"0939436825",
        direccion:"6 de diciembre",
        correo:"javiermero8@gmail.com",
    },
    {
        id:2,
        cedula:"1351665812",
        nombre:"Bryan Mero",
        telefono:"0939436825",
        direccion:"Alfonso Darquea",
        correo:"bryanmero@gmail.com",
    },
    {
        id:3,
        cedula:"1318959232",
        nombre:"Joao Rosado",
        telefono:"0939436825",
        direccion:"Barrio San Martin",
        correo:"joaorosado@gmail.com",
    },
]


module.exports = {clientes, generarId};