const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile("index.html");
});

const port = 3000;
app.listen(port, () =>
  console.log(`http://localhost:3000/ app listening on port ${port}`)
);
