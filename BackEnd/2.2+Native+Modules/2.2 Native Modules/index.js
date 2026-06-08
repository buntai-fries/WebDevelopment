const fs = require("node:fs");

fs.readFile("ServerReq/msg.txt", "utf8", (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
    return;
  }
  // Data is now available as a string
  console.log(data);
});
