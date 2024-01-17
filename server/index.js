require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDatabase = require("./config/db");
const routes = require("./routes/books");
const cors = require("cors");

const app = express();

// use the cors middleware with the
// origin and credentials options
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as a middleware
// for the /api path
app.use("/api", routes);

// Connect Database
connectDatabase();

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
