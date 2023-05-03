const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

// const category = require("./data/category.json");
const chef = require("./data/chef.json");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server world?");
});
// app.get("/category", (req, res) => {
//   res.send(category);
// });
// app.get("/category/:id", (req, res) => {
//   const id = req.params.id;
//   const item = category?.find((pd) => pd.id == id);
//   res.send({ item });
// });
app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const item = chef?.find((pd) => pd.id == id);
  res.send({ item });
});

app.listen(port, () => {
  console.log(`server is runing port : ${port}`);
});
