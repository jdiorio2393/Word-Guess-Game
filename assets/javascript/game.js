var wordPool = ["words", "metal", "rocks"]

        var secretWord = wordPool[Math.floor(Math.random() * wordPool.length)];
        
        var userWins = 0;
        var guessesRemaining = 10;
        var userGuesses = [];
        var internalCorrectGuesses = []
        

        $(document).ready(function () {

            document.onkeyup = function (event) {
                var userGuess = event.key;

                var guessChange = function () {
                    userGuesses.push(userGuess);
                    $("#user-guesses").text(userGuesses);
                    guessesRemaining--;
                    $("#user-remaining").text(guessesRemaining);

                };

                var correctGuesses = function () {
                    internalCorrectGuesses.push(userGuess)
                }

                var restartGame = function() {
                    secretWord = wordPool[Math.floor(Math.random() * wordPool.length)];
                    guessesRemaining = 10;
                    userGuesses = [];
                    internalCorrectGuesses = [];
                    $("#user-guesses").text("");
                    $("#user-remaining").text("10");
                    $("#letter1").text("_");
                    $("#letter2").text("_");
                    $("#letter3").text("_");
                    $("#letter4").text("_");
                    $("#letter5").text("_");
                }
                
                if (!/^[a-z]$/.test(userGuess)) {
                    alert("Please Choose A Letter")
                }
                
                else if (guessesRemaining <= 0) {
                    alert("Game over sucker! Press F5 to restart")
                    restartGame();
                } 
                
                // unable to make the game restart on final keystroke. Must hit a key one more time to restart. 
                else if (internalCorrectGuesses.length === secretWord.length) {
                    alert("you won");
                    restartGame();
                    userWins++;
                    $("#user-wins").text(userWins);
                } 
                
                else if (userGuess === secretWord[0]) {

                    $("#letter1").text(secretWord[0]);
                    guessChange();
                    correctGuesses();

                } else if (userGuess === secretWord[1]) {

                    $("#letter2").text(secretWord[1]);
                    guessChange();
                    correctGuesses();

                } else if (userGuess === secretWord[2]) {

                    $("#letter3").text(secretWord[2]);
                    guessChange();
                    correctGuesses();

                } else if (userGuess === secretWord[3]) {

                    $("#letter4").text(secretWord[3]);
                    guessChange();
                    correctGuesses();

                } else if (userGuess === secretWord[4]) {

                    $("#letter5").text(secretWord[4]);
                    guessChange();
                    correctGuesses();

                } else if (userGuess !== secretWord) {
                    guessChange();
                }

                // } //lettercheck ends

            }; //document on key end

        }); // on load end