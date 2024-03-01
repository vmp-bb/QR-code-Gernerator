import inquirer from "inquirer";

inquirer
  .prompt([{
    message: "Please enter",
    name:"URL",
  },])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTryError) {
    } else {
    }
  });
