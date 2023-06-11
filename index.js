const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define initial price and step size for bargaining
let price = 100;
let userType="prime"
//const stepSize = 10;
let prodFeatures="Its precios and highly demanded product..."

function callAi(userInput,count){
    if(userType==="prime" && count===1){
        const discount=0.05*price
        price-=discount;
        if(userInput>=price)
        console.log("As you are prime member we can decrease price upto:",userInput)
        else 
        console.log("As you are prime member we can decrease price upto:",price)
    }else if(userType==="prime" && count >1 && count%3===0){
        console.log("We will discuss with our team and contact you later..")
    }
    else{
        console.log("Sorry we cant decrease the price of this item for you, reason is:",prodFeatures)
    }
}

// Function to handle user input
function handleInput(answer,count) {
  const userInput = answer.toLowerCase();

  if (userInput === 'exit') {
    // Exit the program if the user types 'exit'
    console.log('Exiting the program...');
    rl.close();
    process.exit();
  } else if (userInput === 'price') {
    // Display the current price if the user types 'price'
    console.log(`Current price: $${price}`);
  } 
  else if(userInput<price){
    
    callAi(userInput,count)
    
  }
  else {
    // Invalid input, ask the user to try again
    console.log("I'm sorry, I didn't understand. Please try again.");
    console.log(typeof userInput)
  }

  // Ask for the next input
  rl.question('What would you like to do? (Type "lower", "higher", "price", or "exit"): ', (answer) => handleInput(answer, count+1));
}

// Start the bargaining process
console.log('Welcome to the Bargaining Chatbot!');
console.log(`The starting price is $${price}.`);
//rl.question('What would you like to do? (Type "lower", "higher", "price", or "exit"): ', handleInput);
rl.question('What would you like to do? (Type the price you want): ', (answer) => handleInput(answer, 1));











/* const dateStr = '2023-06-10T10:03:30.726Z';

// Create a new Date object from the given date string
const dateObj = new Date();
console.log(dateObj)
// Get the time components (hours, minutes, seconds, milliseconds) from the Date object
const hours = dateObj.getUTCHours();
const minutes = dateObj.getUTCMinutes();
const seconds = dateObj.getUTCSeconds();
const milliseconds = dateObj.getUTCMilliseconds();

// Convert the time components to IST
const istMinutes = minutes + 60; 
const istHours = hours + 10;
console.log(istHours,istMinutes);

const istDateObj = new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate(), istHours, istMinutes, seconds, milliseconds);
console.log(istDateObj);



console.log(istDateObj);
 */