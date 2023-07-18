const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.listen(PORT, () => console.log("Servidor corriendo en http://localhost" + PORT));
app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "index.html")));

//rgba(38, 172, 255, 0.8);;