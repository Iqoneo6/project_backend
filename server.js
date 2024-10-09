const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());
app.get("/api/dummy", (req, res) => {
  res.status(200).json({
    message:
      "Hello developer this is my  your server is currently running,Kindly navigate to client side of the application.",
  });
});
const {PORT, NODE_ENV } = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} in ${NODE_ENV} mode`);
  });
};

const dbConnection =async()=> {
  try {
    await mongoose.connect(
      "mongodb+srv://wizinoa_site:5h7fPti0txF9lvqY@cluster0.pevnj2b.mongodb.net/school_rehabilitation?retryWrites=true&w=majority&appName=school_rehabilitation"
    );
    console.log(`Db is Connected`);
    
  } catch (error) {
    console.log(err);
    process.exit(1);
  };
};
dbConnection.then(startServer);