//ROUTES
const express = require('express'), router = express.Router();

router.get('/users', (req, res) => {
    const ADODB = require('node-adodb');
    const connection = 
    connection
        .query('SELECT * FROM Tbl_Verus_Tickets')
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
            res.send(data);
        })
        .catch(error => {
            console.error(error);
        });
});