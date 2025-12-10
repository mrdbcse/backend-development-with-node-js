const delay = (time) =>
  new Promise((resolve, reject) => setTimeout(resolve, time));

const greet = async (name) => {
  await delay(2000);
  console.log(name);
};

greet("Debjyoti");

const division = async (num1, num2) => {
  try {
    if (num2 === 0) throw new Error("Can't divide by zero");
    return num1 / num2;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const main = async () => {
  console.log(await division(10, 2));
  console.log(await division(10, 0));
};

main();
