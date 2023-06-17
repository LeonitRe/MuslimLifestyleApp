const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./route/authRouter");
const cartRouter = require("./route/cartRouter");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/api", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
