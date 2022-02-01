/*
* Excercise 1
*/

const colorBlock = document.querySelector('#color-block');
colorBlock.addEventListener("click", changeColor);

// Create conditional variable
let clicked = false;

/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){

    //Write a condition determine what color it should be changed to
    if(clicked == false){
        //change the background color using JS
        colorBlock.style.background = '#80d9ff';

        //Change the text of the color using the span id color-name
        document.querySelector('#color-name').innerHTML = '#80d9ff';

        // change conditional variable to true
        clicked = true;

    }
    else{
        //change the background color using JS
        colorBlock.style.background = '#F08080'

        //Change the text of the color using the span id color-name
        document.querySelector('#color-name').style.color = 'black'

        // change conditional variable back to false to toggle between states
        clicked = false;


    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
const convertButton = document.querySelector('#convertbtn');
const input = document.querySelector('#f-input');
const output = document.querySelector('#c-output')
convertButton.addEventListener("click", convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
function convertTemp(){
    let tempFahrenheit = input.value;

    //Calculate the temperature here
    let tempCelsius = (tempFahrenheit - 32) * (5/9);

    //Send the calculated temperature to HTML
    output.innerHTML = tempCelsius;

}


