const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error while reading the file: ", err);
    return;
  }
  const modifiedFileContents = data.toUpperCase();
  fs.writeFile("output.txt", modifiedFileContents, "utf-8", (err) => {
    if (err) {
      console.log("Error while writing the file: ", err);
      return;
    }
    console.log("Data written to the file");

    fs.readFile("output.txt", "utf-8", (err, data) => {
      if (err) {
        console.error("Error while reading the file: ", err);
        return;
      }
      console.log(data);
    });
  });
});
