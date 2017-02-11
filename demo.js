let express = require('express');
let app = express();
let path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/demo.html'));
});

app.use(express.static(__dirname));

app.listen(8888);
console.log("Server running on 8888.");