const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'))


app.get("/", function(req, res) {
    res.sendFile('/index.html' , { root : __dirname});
});

app.post('/api/users', (req, res) => {
    console.log(req);
    // console.log(req.body.password);
});

app.get('/api/users', (req, res) => res.json({name: 'Bob', profession: 'Builder'}));

app.listen(PORT, () => console.log(`Running on PORT ${PORT}`));