const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json())
const path = require("path");
const userRoute=require("./routes/userRoute")
app.use('/api/user',userRoute)
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
  }

app.listen(port, () => console.log(`Wolkus app listening on port ${port}!`));
