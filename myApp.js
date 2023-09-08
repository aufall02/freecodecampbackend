let express = require('express');
let app = express();

app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', (req, res) => {
    console.log("Hello word");
    res.sendFile(process.cwd() + '/views/index.html');
})































module.exports = app;