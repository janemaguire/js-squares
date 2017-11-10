// Select the input, button and where the result will go
var input = document.getElementById("wrong-letters");
var scramble = document.getElementById("scramble-button");
var newName = document.getElementById("new-name");
var result = [];

// Add event listener to button
scramble.addEventListener("focus", function () {
    // Turn the inputted string of letters into an array
    let letters = input.value.split("");
    // For each letter check if it is one of these characters
    letters.forEach(function(letter) {
        switch (letter) {
            case "a":
                letter = "@";
                break;
            case "e":
                letter = 3;
                break;
            case "g":
                letter = 9;
                break;
            case "i":
                letter = "!";
                break;
            case "o":
                letter = 0;
                break;
            case "s":
                letter = "$";
                break;
        };
        // Push letter into result array
        result.push(letter);
        // Clear input
        input.value = "";
    });
    // Turn the result array into a string and display
    newName.innerHTML = "Hi, " + result.join("") + "! 👋🏼";
});

// Add event listener to input
input.addEventListener("click", function() {
    // Remove any result text
    newName.innerHTML = "";
    // Clear the result array so it doesn't display more than one name at a time
    result = [];
})
