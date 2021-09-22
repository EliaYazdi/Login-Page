const username = "test";
const password = "1234";

const userInput= document.getElementById("user");
const passInput = document.getElementById("pass");
const button = document.getElementById ('button');



//The happy paragraph
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

//The sad paragraph 

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



button.addEventListener('click', function (){
    if (userInput.value == username && passInput.value == password){
        happyPMaker();   
        document.getElementById("login").style.visibility ="hidden";
            }
            else {
            sadPMaker();
            document.getElementById("login").style.visibility ="hidden";
            }
});



