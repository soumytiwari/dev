const express = require("express");
const path = require("path");
const app = express();                  //  now "app" has all the properties of express
const hbs = require("hbs");

require("./src/db/conn");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public/");
const template_path = path.join(__dirname, "../menBackend/templates/views");
const partials_path = path.join(__dirname, "../menBackend/templates/partials");

// console.log(path.join(__dirname, "../public"))
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    // res.send("hello from the lalala")
    res.render("index.hbs")
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})