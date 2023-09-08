let express = require('express');
let app = express();
// console.log("Hello World");
// console.log(process.env.MESSAGE_STYLE);
app.use('/public', express.static(process.cwd() + '/public'));
app.route('/')
    .get(function (req, res) {
        res.sendFile(process.cwd() + '/views/index.html');
    })

const data = {
    "message" : "Hello json"
}

app.get('/json', (req, res) => {

    const MESSAGE_STYLE = process.env.MESSAGE_STYLE
    if (MESSAGE_STYLE === 'uppercase') {
        res.json({
            "message" : "HELLO JSON"
        })
    }else{
        res.json(data)
    }
    
})































module.exports = app;