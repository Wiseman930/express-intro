let express = require('express');
let app = express();


app.get("/", function(req, res){
  res.send("Wiseman");
});

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});


