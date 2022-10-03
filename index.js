// alert("hello World")

var randomNumber1 = Math.floor(Math.random() *6) + 1; // create a random number between 1 - 6

var randomNumber2 = Math.floor(Math.random() *6) + 1; // create a random number between 1 - 6

var Winner ; //create a variable for the winner

var randomDiceImageSelected = "./images/"+"dice" + randomNumber1 +".png" // create avariable to hold a  random dice image 1

var randomDiceImage2Selected = "./images/"+"dice" + randomNumber2 +".png" // create avariable to hold a  random dice image 2


 document.querySelectorAll('img')[0].setAttribute("src",randomDiceImageSelected);

 document.querySelectorAll('img')[1].setAttribute("src",randomDiceImage2Selected);



if(randomNumber1 > randomNumber2)
        {
        Winner = "The Winner is player 1"
        } 
else if (randomNumber1 < randomNumber2)
        {
            Winner = "The Winner is player 2"
        }
    else { Winner = "It's a draw"}

document.querySelector('h1').innerText = Winner ; 
