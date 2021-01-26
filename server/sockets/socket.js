const {io} = require('../server')

io.on('connection', (client) => {
  console.log('Usuario Conectado')

  client.emit('enviarMensaje',{
      usuario: 'Admin',
      mensaje: 'Bienvenido a esta aplicación'
  })

  client.on('disconnect', () => {
      console.log('Usuario desconectado')
  })

  //Escuhar el cliente
  client.on('enviarMensaje', (data, callback) => {
      console.log(data)

      client.broadcast.emit('enviarMensaje', data)

      // if(mensaje.usuario) {
      //     callback({
      //         resp: 'TODO SALIÓ BIEN!'
      //     })
      // } else {
      //     callback({
      //         resp: 'TODO SALIÓ MAl!!!'
      //     })
      // }
      

  })

})