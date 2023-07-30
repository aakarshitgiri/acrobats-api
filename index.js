const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();


const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pdfRoutes = require("./routes/routes.js");

app.get("/api", (req, res) => {
    return res.json({ message: "setting up the basic folder structure" });
});

app.use(pdfRoutes);

app.get("/api/test", (req, res) => {
    return res.json({ message: "This is a test Page" });
})

app.listen(5000, () => {
    console.log(`running on 5000`);
});