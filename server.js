const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./utility/config.env" });
const app = require("./app");

const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((val) => {
    console.log("DB Connected");
  });

app.listen(process.env.PORT || 3000, () => {
  console.log(`App running on port :${process.env.PORT || 3000}`);
});
