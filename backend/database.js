require("dotenv").config();
const mongoose = require("mongoose");

const connection = `mongodb+srv://${process.env.MONGO_DB_CLOUD_USERNAME}:${process.env.MONGO_DB_CLOUD_PASSWORD}@${process.env.MONGO_DB_CLUSTER}.pizxlt2.mongodb.net/${process.env.MONGO_DB_CLOUD_DATABASE}?retryWrites=true&w=majority`;
mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log(err));
