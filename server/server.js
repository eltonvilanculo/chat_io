var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile('index.html',{ root: './public/view' });
});

io.on('connection',(socket)=>{

  console.log("User is connected ");
  socket.on('disconnect' , ()=>{
    console.log('user is offline')
  })

})


http.listen(port, function(){
  console.log(`listening on *:3000`);
});