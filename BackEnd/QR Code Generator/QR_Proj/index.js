/* 
The steps followed are:
1. Use the inquirer npm package to get user input. 
2. Use the qr-image npm package to turn the user entered URL into a QR code image. (X)
3. Create a txt file to save the user input using the native fs node module. (X)
*/

import fs, { createWriteStream } from "fs";
import qr from "qr-image";
import { input } from "@inquirer/prompts";

userInput();

async function userInput() {
  let urlLink = await input({
    message: "Enter the url: ",
  });

  // write the data into file.
  fs.writeFile("URL/url.txt", urlLink, (err) => {
    if (err) {
      throw err;
    }
    console.log("The URL is saved successfully!");
  });

  // read the file
  fs.readFile("URL/url.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    // convert txt_info -> qr_code.
    streamData(data);
  });
}

// custom qr-code generator
function streamData(data) {
  // create the image
  const qrStream = qr.image(data, { type: "png" });
  // pipe the stream to the file destination (url.png).
  const outStream = createWriteStream("Image/url.png");
  qrStream.pipe(outStream);

  outStream.on("finish", () => {
    console.log("QR Code successfully generated and saved!");
  });
}
