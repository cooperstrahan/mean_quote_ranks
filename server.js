const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.listen(port, () => console.log(`Listening on port ${port}`));
require('./server/routes.js')(app);
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
