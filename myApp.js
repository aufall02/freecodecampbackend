let express = require('express');
let app = express();
// console.log("Hello World");
app.use('/public', express.static(process.cwd() + '/public'));
app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    })

const data = {
    "message" : "Hello json"
}

app.get('/json', (req, res) => {
    res.json(data)
})































module.exports = app;