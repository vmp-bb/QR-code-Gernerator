import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{
    message: "Please enter: ",
    name:"URL",
  },])
  .then((answers) => {
    // console.log(answers);
    const url=answers.URL;
    var qr_svg=qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_npm.png"));
  })
  .catch((error) => {
    if (error.isTryError) {
    } else {
    }
  });
