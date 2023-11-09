import { clientes } from '../plugins/clientesT';


function clientesForEach() {
    clientes.forEach((datoCliente) => {
        console.table(datoCliente);
    });
}

function clientesForIn() {
    for (const datoCliente in clientes) {
        if (clientes.hasOwnProperty(datoCliente)) {
            console.table(clientes[datoCliente]);
        }
    }
}

function clientesForOf() {
    for (const cliente of clientes) {
        console.table(cliente);
    }
}

export { clientesForEach, clientesForIn, clientesForOf };