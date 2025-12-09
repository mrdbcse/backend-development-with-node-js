const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("data folder created");
}

const filePath = path.join(dataFolder, "paragraph.txt");

// sync
fs.writeFileSync(
  filePath,
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ex magni omnis quasi id facere voluptates soluta inventore sit voluptatem quas quibusdam voluptas laudantium, dolorem placeat neque quod doloribus odio!"
);
console.log("File created successfully");

const readContentFromFile = fs.readFileSync(filePath, "utf-8");
console.log("File Content: ", readContentFromFile);

fs.appendFileSync(filePath, "\nThis is the last line after lorem ipsum");
console.log("New file content added");

// async

const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Async file content", (err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("Async file created successfully");
  fs.readFile(asyncFilePath, "utf-8", (err, data) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Async file content: ", data);
    fs.appendFile(asyncFilePath, "\nNew line appended", "utf-8", (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log("New line added to async file");

      fs.readFile(asyncFilePath, "utf-8", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        console.log("Updated file content: ", data);
      });
    });
  });
});
