// Import libraries
const express = require('express');
const expHbs = require('express-handlebars');

// Produce server instance
const app = express();
    app.listen(3000, ()=>{
        console.log("I'm listening.  Go ahead");
    });

// Set views engine
    app.set("view engine", "handlebars");
    app.engine("handlebars", expHbs.engine({layoutsDir:__dirname + "/views",
        })
    );

// Middlewares
    app.use("/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
    app.use("/popper", express.static(__dirname + "/node_modules/@popperjs/core/dist/umd"));

// Define routs
    app.get("/", function (req, res){
        res.render("dashboard", {
            products: [
                "banana",
                "cebollas",
                "lechuga",
                "papas",
                "pimenton",
                "tomate"
            ]
        });
    });

    // app.get("/", (req, res)=>{})