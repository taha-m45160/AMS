var express = require('express');
var app = express();
var cors = require('cors');
const path = require('path');

app.use(cors())
const PORT = process.env.PORT || 8000;
app.use(express.static(path.resolve(__dirname, '../client/build')));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}...`);
});