let greetings = [
    "You are amazing!",
    " You just made it!",
    "You have won!",
    "Great job!",
    " Its wonderful try",
]
let easyRandom = parseInt(Math.random() * 100);
let mediumRandom = parseInt(Math.random() * 1000);
let hardRandom = parseInt(Math.random() * 10000);
let count = 0;
//easy
function guessTheNumbereasyLevel() {
    let number;
    let getInputValue = document.querySelector("input").value;
    count ++;
    if (getInputValue == "") {
        alert("enter numbers in input");
    } else {


        if (getInputValue < easyRandom) {
            alert("too small :(");

        } else if (getInputValue > easyRandom) {
            alert("too big :(");


        } else if (getInputValue == easyRandom) {
            let winingCongrets = parseInt(Math.random() * greetings.length);
          


            // let button = querySelector("button"),
            //     count = 0;
            // button.onclick = function() {
            //     count += 1;
            // }

            alert("congratulations!" + " " + greetings[winingCongrets] + " you guess "+ easyRandom +" in " + count );
        }
    }
}



// medium
function guessTheNumberMediumLevel() {

    let number;
    let getInputValue = document.querySelector("input").value;
    count ++;
    if (getInputValue == "") {
        alert("enter numbers in input");
    } else {


        if (getInputValue < mediumRandom) {
            alert("too small :(");

        } else if (getInputValue > mediumRandom) {
            alert("too big :(");


        } else if (getInputValue == mediumRandom) {


            let winingCongrets = parseInt(Math.random() * greetings.length);
            //alert("congratulations!" + " " + greetings[winingCongrets]);
            alert("congratulations!" + " " + greetings[winingCongrets] + " you guess "+ mediumRandom +" in " + count );

        }

    }

}

//hard

function guessTheNumberHardLevel() {

    let number;
    let getInputValue = document.querySelector("input").value;
    count++;
    if (getInputValue == "") {
        alert("enter numbers in input");
    } else {


        if (getInputValue < hardRandom) {
            alert("too small :(");

        } else if (getInputValue > hardRandom) {
            alert("too big :(");


        } else if (getInputValue == hardRandom) {


            let winingCongrets = parseInt(Math.random() * greetings.length);
           // alert("congratulations!" + " " + greetings[winingCongrets]);
           alert("congratulations!" + " " + greetings[winingCongrets] + " you guess "+ hardRandom +" in " + count );
        }

    }

}