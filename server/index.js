const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const port = 3000; // Choose the port number you want to use
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
