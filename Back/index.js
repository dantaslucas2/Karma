const  express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(4000,'0.0.0.0',()=>{
    console.log("API RODANDO");
})

app.get('/', (req, res) => {
    try {
        res.send('Server running');
    } catch {

    }
});