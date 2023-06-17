const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require("./route/authRouter");
const cartRouter = require("./route/cartRouter");

const app = express();
const port = 5090;

app.use(bodyParser.json());

// Enable CORS and specify the allowed origin
app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);
app.use("/api", cartRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
