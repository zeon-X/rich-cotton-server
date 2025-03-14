const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5001;
const app = express();

env.config();

// Route Config
const clientRoute = require("./routes/Client");
const productRoute = require("./routes/Product");
const teamRoute = require("./routes/Team");
const appBasicRoute = require("./routes/AppBasic");

// Database Config
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@richcotton.eswbm7h.mongodb.net/?retryWrites=true&w=majority`,
    { dbName: process.env.DB_NAME }
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

mongoose.set("strictQuery", true);

// Server Config
app.use(cors({ origin: "*" }));
app.options("*", cors());
app.use(express.json());

// Serve static files from `public_html/uploads`
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../../public_html/uploads"))
);

// API Config
app.use("/api/v1/client", clientRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/team", teamRoute);
app.use("/api/v1/app-basic", appBasicRoute);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

module.exports = app;
