var app = require('express')();
var http = require('http').createServer(app);
const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile('index.html',{ root: './public/view' });
});

http.listen(port, function(){
  console.log(`listening on *:3000`);
});