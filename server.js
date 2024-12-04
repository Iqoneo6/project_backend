const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Hi All,I am server.",
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
    const db = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Db is Connected ${db.connection.host}`);
    
  } catch (error) {
    console.log(error);
    process.exit(1);
  };
};
dbConnection().then(startServer);
//this one is important for all
