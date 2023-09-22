var express = require ('express');
var app = express();
const bodyParser = require('body-parser');

app
.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use ('/', require('./routes/contacts'))
.use ('/', require('./routes/index'));

const port = process.env.PORT|| 3000;
app.listen(port, ()=>{console.log(`Server is running on port ${port}`)});