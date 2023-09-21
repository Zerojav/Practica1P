const {clientes} = require('/clientes')


function buscarIdCliente(id, callback){
    const clienteEncontrado = clientes.find((element)=>{ return element.id===id})
    if(!clienteEncontrado){
        return callback("No se ha encontrado el cliente");
    }
    return callback(null, clienteEncontrado);
}



function clientesForEach(){
    clientes.forEach(datoCliente => {
        console.table(datoCliente)
    });
}

function clientesForIn(){
    for(const datoCliente in clientes){
        console.table(clientes[datoCliente]);
    }
}

function clientesForOf(){
    for(const cliente of clientes){
        console.table(cliente)
    }
}



module.exports={clientesForEach, clientesForIn, clientesForOf, buscarIdCliente}

