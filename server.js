var express = require ('express');
var app = express();
const bodyParser = require('body-parser');


app
//.use(express.static('public'))
//.use(express.urlencoded({extended: false}))
.use(bodyParser.json())
.use((req, res, next) => {
 res.setHeader('Access-Control-Allow-Origin', '*');
 next();
})
.use ('/', require('./routes/contacts'))
.use ('/', require('./routes/index'))
.use('/api-docs', require('./routes/swagger_route'));

const port = process.env.PORT|| 8080;
app.listen(port, ()=>{console.log(`Server is running on port ${port}`)});