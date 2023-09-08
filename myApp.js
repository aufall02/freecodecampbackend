let express = require('express');
let app = express();
// console.log("Hello World");
app.use('/public', express.static(process.cwd() + '/public'));


app.route('/')
    .get(function(req, res) {
		//   res.sendFile(process.cwd() + '/views/index.html');
        res.send('Hello Express')
    })

app.route('/_api/hello-console')
  .get(function(req, res, next) {
    console.log('Hello Word');
  });































module.exports = app;