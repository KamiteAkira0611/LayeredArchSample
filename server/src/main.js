const express = require("express");
const app  = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.sendFile(`${process.cwd()}/public/index.html`);
});

app.get("/users", (req, res) =>{
  res.json([{
    id: 1, name: "maeda"
  }, {
    id: 2, name: "takada"
  }])
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
