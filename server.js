// require('dotenv').config();
// require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8000;


var corsOptions = {
    origin: ["http://localhost:3000"]
  };
  app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



  const db = require("./models");

  db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });



  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.json({ message: "Hi welcome" });
  });

  const router = require("./router/router.js")

app.use("/", router);
app.listen(PORT, () => {
    console.log(`server is running in ${PORT}`);
  });
  
