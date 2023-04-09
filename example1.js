/**
 * Description: This program is locked into an infinite loop. Your task is to run and debug the program. 
 * 
 * TODO: The program should exit the loop after counting down from 5 to 1. You should check to make sure the boolean statement
 * is being updated.
 */

function checkPoint1() {
    alert1();

    let array = [];
    let x = 0;

    // Fixed the while loop to update x inside the loop
    function getMultiples() {
        while (x <= 50){
            array.push(x * 2);
            x++; // update x inside the loop
        }
        return array;
    }
    console.log(getMultiples()); 

    // DO NOT CHANGE THE CODE BELOW
    alert2();
}



/************************************************ DON'T EDIT THE CODE BELOW ******************************************************/
function alert1() {
    alert("Oh no! It looks like you are trapped in an infinite loop. Go to the example1.js file and work on checkpoint 1.");
}

function alert2(){
    alert("Congratulations! You have passed checkpoint 1!");
}