const randomColor = function() {
    // Define a string containing hexadecimal digits
    const hex = "0123456789ABCDEF";

    // Initialize the color string with a #
    let color = "#";

    // Loop to generate six random hex digits
    for (let i = 0; i < 6; i++) {
        // Generate a random index to pick a hex digit
        color += hex[Math.floor(Math.random() * 16)];
        
    }

    // Return the final color string after the loop completes
    return color;
}
let intervalID;
const startChangingColor = function() {
    if(!intervalID){
        intervalID = setInterval(changeBG,1000);
    }
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
            }    
}

const stopChangingColor = function (){
    clearInterval(intervalID);
    intervalID = null;

} 

const clearColor = function () {
    return document.body.style.backgroundColor = "transparent";
    clearColor;
}


document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

document.querySelector('#clear').addEventListener('click',clearColor);
