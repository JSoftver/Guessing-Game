function start() {
    function guess(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var number = guess(1, 100);
    
    var guessedNumber = prompt("I thought of a number between 1 and 100. Try to figure out what it is!");
    
    
    var end = true;
    var guessing = 0;
    var storedScores = localStorage.getItem("guessingGameScore");
    var score;
    if (storedScores != null) {
        score = Number(storedScores);
    } else {
        score = 0;
    }
    document.getElementById("score").innerHTML = score;
    
    while (end) {
        document.getElementById("score").innerHTML = score;
        if (number == guessedNumber) {
            alert("Correct!");
	        alert("You guessed with " + guessing + " guessing.")
	        if (guessing < 11) {
                score = score + 1;
                localStorage.setItem("guessingGameScore", JSON.stringify(score));
                document.getElementById("score").innerHTML = score;
                end = false;
            }
                end = false;
            } else if (guessedNumber < number) {
                alert("Too small!");
                guessing = guessing + 1;
                guessedNumber = prompt("Please try again!");
            } else if (guessedNumber > number) {
                alert("Too high!");
	        guessing = guessing + 1;
                guessedNumber = prompt("Please try again!");
            } else if (guessedNumber == "McDumfly") {
                console.log(number);
                guessedNumber = prompt("Please write in the code!!!! (" + number + ")");
            } else if (guessedNumber == "exit") {
            } else {
                guessedNumber = prompt("Please try again!");
	        guessing = guessing + 1;
            }
    }   
}
