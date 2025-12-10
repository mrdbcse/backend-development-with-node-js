const divide = (num1, num2) =>
  new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Can't perform division by 0");
    } else {
      resolve(num1 / num2);
    }
  });

divide(10, 0)
  .then((result) => console.log("Result:", result))
  .catch((err) => console.log("Error:", err));
