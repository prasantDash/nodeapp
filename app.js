require('dotenv').config()
let express = require('express');
let app = express();
let PORT  = process.env.PORT || 5000;
console.log(process.env.PORT);

app.get('/', (req, res) => {
    res.sendFile('template/index.html', { root: __dirname });    
});

app.get('/name', (req, res) => {
    res.sendFile('template/name.html', { root: __dirname }); 
});

let server = app.listen(PORT, () => {
    console.log(`Express App running at http://127.0.0.1:${PORT}/`);
}); 