
// Defining the constant variables
const username = "test";
const password = "1234";

const userInput= document.getElementById("user");
const passInput = document.getElementById("pass");
const button = document.getElementById ('button');



//The happy paragraph makker function which is going to run when the login is successful
function happyPMaker (){
const happyP = document.createElement("p");
const happyText = document.createTextNode("Welcome to the dark side!");
happyP.appendChild(happyText);
const returnButton = document.createElement("button");
returnButton.innerText = "I don't want to be here!"
const happyDiv = document.createElement("div");
happyDiv.appendChild(happyP);
happyDiv.appendChild(returnButton);
document.body.appendChild(happyDiv);
returnButton.addEventListener ("click", function(){
    document.getElementById("login").style.visibility ="visible";
    happyP.style.visibility="hidden";
    returnButton.style.visibility="hidden";
    localStorage.removeItem("userInput.value");
})


}

//The sad paragraph maker function which is going to run when the login fails

function sadPMaker (){
    const sadP = document.createElement("p");
    const sadText = document.createTextNode("The entereted username and/or password are incorrect!");
    sadP.appendChild(sadText);
    const retryButton = document.createElement("button");
    retryButton.innerText = "Give me another chance!"
    const sadDiv = document.createElement("div")
    sadDiv.appendChild(sadP);
    sadDiv.appendChild(retryButton);
    document.body.appendChild(sadDiv);
    retryButton.addEventListener ("click", function(){
        document.getElementById("login").style.visibility ="visible";
        sadP.style.visibility="hidden";
        retryButton.style.visibility="hidden";

})
}

//The conditional function which executes either of the above functions based on the user input

button.addEventListener('click', function (){
    if (userInput.value == username && passInput.value == password){ // checkes if the user inputs the correct values
        happyPMaker();   
        document.getElementById("login").style.visibility ="hidden"; // to take away the login div
            }
            else {
            sadPMaker();
            document.getElementById("login").style.visibility ="hidden";
            }
});



