let express = require('express');
let app = express();

app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', (req, res) => {
   
    res.send(console.log("Hello Word"))
})































module.exports = app;