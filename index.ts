export{}
const inquirer = require('inquirer');
let winning_no = Math.floor(Math.random() * 101);
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:"input",
        name:"user_no",
        message:"Enter the no you want to guess?"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    let user = answers.user_no;
    if (user == winning_no){
        console.log("CONGRATULATIONS!!! You win...")
    }else if (user <= winning_no){
        console.log("Ooops! that's wrong you should Try a bigger no...")
    }else if (user >= winning_no){
        console.log("Ooops! that's wrong you should Try a smaller no...")
    }else{
        console.log("Please run the program again there's some problem")
    }
})
