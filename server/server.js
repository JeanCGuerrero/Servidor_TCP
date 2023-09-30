const net = require('net');

const server = net.createServer()

server.on('connection', (socket)=>{
    socket.on('data', (data)=>{
        console.log('\nEl cliente dice: ' + data)
        socket.write(' Recibido')
    })

    socket.on('close', ()=>{
        console.log('Comunicación finalizada')
    })

    socket.on('error', (err)=>{
        console.log(err.message)
    })
})

server.listen(4000, ()=>{
    console.log('servidor esta funcionando', server.address().port)
})