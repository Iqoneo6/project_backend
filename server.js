const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/api/dummy", (req, res) => {
  res.status(200).json({
    message:
      "Hello Viewers your server is currently running,Kindly navigate to client side of the application.",
  });
});

mongoose
  .connect(
    "mongodb+srv://wizinoa_site:5h7fPti0txF9lvqY@cluster0.pevnj2b.mongodb.net/school_rehabilitation?retryWrites=true&w=majority&appName=school_rehabilitation"
  )
  .then(() => {
    app.listen(4050, () => {
      console.log(`server is running right now! http://localhost:4050 💥`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
