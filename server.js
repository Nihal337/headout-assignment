const express = require("express");
const fs = require("fs");
const app = express();
const port = 8080;

// Import and execute create-files.js to create random text files
require("./create-files");

app.get("/data", (req, res) => {
  const { n, m } = req.query;

  if (!n) {
    res.status(400).send("Error: n parameter is required");
    return;
  }

  const filePath = `/tmp/data/${n}.txt`;
  const content = fs.readFileSync(filePath, "utf-8");

  if (m) {
    const lines = content.split("\n");
    const line = lines[m - 1];
    res.send(line);
  } else {
    res.send(content);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
