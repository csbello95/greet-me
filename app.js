const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const { nombre } = req.query;
  if (!nombre) {
    return res.send(`<h1>Hola desconocido!</h1>`);
  } else {
    return res.send(`<h1>Hola ${nombre}!</h1>`);
  }
});

app.listen(3000, () => console.log("Listening on port 3000!"));
