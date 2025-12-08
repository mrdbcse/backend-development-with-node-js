const path = require("path");

console.log("Directory Name: ", path.dirname(__dirname));
console.log("File Name: ", path.basename(__filename));
console.log("File Extension: ", path.extname(__filename));

const joinedPath = path.join("user", "documents", "node", "project");
console.log("Joined Path: ", joinedPath);

const resolvedPath = path.resolve("user", "documents", "node", "project");
console.log("Resolved Path: ", resolvedPath);

const normalizePath = path.normalize("/user/documents/../node/project");
console.log("Normalize Path: ", normalizePath);
