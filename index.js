var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImagesSource="./images/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" play 1 Wins!";

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 Wins";
}
else{
    document.querySelector("h1".innerHTML ="Draw!");
}

// Create a button element
const button = document.createElement("button");

// Set the button text
button.textContent = "Refresh me";

// Add a click event listener to refresh the page
button.addEventListener("click", () => {
  location.reload(); // Refreshes the page
});

// Style the button (optional)
button.style.cursor = "pointer";


// Append the button to the body or any other container
document.body.appendChild(button);


