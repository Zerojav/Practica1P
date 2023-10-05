import { PrismaClient } from '@prisma/client';
import { create } from 'domain'; 

const prisma = new PrismaClient();

const crearPedido = async () => {
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

const LeerPedido = async () =>{
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

const ActualizarPedido = async () =>{
    const pedido= await prisma.pedido.update({
        data:{
            fechaPedido: new Date("2004-11-21")
        },
        where:{
            numPedido: 1
        }
    });
}

const EliminarPedido = async () =>{
    const pedido = await prisma.pedido.delete({
        where:{
            numPedido:1
        }
    });
}

(async () =>{
    await crearPedido
})