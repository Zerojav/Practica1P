import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const crearPedido = async () => { //Create
    const PedidoCreado = await prisma.pedido.create({
        data:{
            cliente:{
                create:{
                    nombre: "Javier Mero",
                    telefono: 939436825,
                    direccion: "Enrique Segoviano",
                    email: "javiermero8@gmail.com",
                }
            },
            repartidor:{
                create:{
                    nombre: "Javier Mero",
                    telefono: 939436825,
                    email: "javiermero8@gmail.com"
                }
            },
        }
    });
    console.log(PedidoCreado)
}

const leerPedido = async () =>{ // Read
    const pedido = await prisma.pedido.findMany({
        include:{
            cliente:true,
            repartidor:true,
        }, 
        where:{
            numPedido:1,
        }
    });
    console.log(pedido)
}

const actualizarPedido = async () =>{ // Update
    const pedido= await prisma.pedido.update({
        data:{
            fechaPedido: new Date("2004-11-21")
        },
        where:{
            numPedido: 1
        }
    });
    console.log("El pedido ha sido actualizado")
}

const eliminarPedido = async () =>{ //delete
    const pedido = await prisma.pedido.delete({
        where:{
            numPedido:1
        }
    });

    const cliente = await prisma.cliente.delete({
        where:{
            id:1
        }
    });

    const repartidor = await prisma.repartidor.delete({
        where:{
            id:1
        }
    });
    console.log("Se ha eliminado el pedido")
}

(async ()=>{ // Panel de opciones
    //await crearPedido()
    await leerPedido()
    //await actualizarPedido()
    //await eliminarPedido()
})()