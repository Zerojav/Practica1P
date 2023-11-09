const {clientesForEach, clientesForIn, clientesForOf, buscarIdCliente} = require("./functions/funciones")

clientesForEach();

clientesForIn();

clientesForOf();

buscarIdCliente(1, (error, cliente)=>{
    if (error){
        console.log("Ha ocurrido un error")
    }
    console.log(cliente)
});