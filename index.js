const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();

env.config();

//Route Config
const clientRoute = require("./routes/Client");
const productRoute = require("./routes/Product");

//Database Config
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@richcotton.eswbm7h.mongodb.net/?retryWrites=true&w=majority`,
    { dbName: "RichCotton" }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
mongoose.set("strictQuery", true);

//Server Config
app.use(cors({ origin: "*" }));
app.options("*", cors());
app.use(express.json());

//API Config
app.use("/api/v1", clientRoute);
app.use("/api/v1", productRoute);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

module.exports = app;
