  
var io = require('socket.io-client')
module.exports = {
    get(req, res) {
        
        const socket = io.connect("http://localhost:3000")
        socket.emit("global_event",{message:"Global triggered"})
        res.send({message:"ok"})
    },
  };