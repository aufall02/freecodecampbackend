let express = require('express');
let app = express();

app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', (req, res) => {
   
    res.send(console.log("Hello Word"))
})

app.route('/_api/hello-console')
  .get(function(req, res, next) {
    console.log('Hello Word');
  });































module.exports = app;