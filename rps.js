let win = "0";
let loss = "0";
let ties = "0";
let computerChoices = ["R", "P", "S"]
let ask = window.confirm("Do you want to play the game?");

if(!ask){
    alert("see ya next time");
}

else(playGame())

function playGame(){

    let userInput = prompt("Enter R, P or S.");

    if(!userInput){
        alert("See ya next time")
    return}

        userInput= userInput.toUpperCase();
        let index = Math.floor(Math.random()*computerChoices.length);
        let computerOptions = computerChoices[index];
        if( (userInput ==="R" && computerOptions ==="S")||
            (userInput ==="P" && computerOptions ==="R")||
            (userInput ==="S" && computerOptions ==="P") )
            {
                console.log("Congratulations,you win, the computer choose"+computerOptions);
                window.alert("Congratulations, You win");
                win ++
            }
            else if( (userInput ==="R" && computerOptions ==="R")||
                     (userInput ==="P" && computerOptions ==="P")||
                     (userInput ==="S" && computerOptions ==="S"))
                     {
                         console.log("Its a tie");
                         window.alert("Seems like its a tie, the computer choose"+computerOptions)
                         ties++;
                     }
            else{
                loss++
                window.alert("Oh no, you loose, the computer choose"+computerOptions)
            }
    }
