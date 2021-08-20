const  express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 4000;
const appRoutes = require("./src/routes")

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.listen(port,'0.0.0.0',()=>{
    console.log("API RODANDO");
})

app.get('/', (req, res) => {
    try {
        res.send('Server running');
    } catch {

    }
});

app.use('/', appRoutes)