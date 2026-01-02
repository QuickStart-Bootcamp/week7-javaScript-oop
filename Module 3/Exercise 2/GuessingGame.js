// The computer generates a random number between 1 and 100. The user attempts
// to guess the number and the computer returns the answer 'HIGH', 'LOW', or
// 'CORRECT' depending on whether the guess is higher, lower, or equal to the
// generated number. Once the guess is correct, the game ends. Make it possible
// to query the number of steps. Make it possible to reset the game by starting
// a new game.
//
// The code should run in the browser, and the user should interact with it 
// in the console.
// 
// Use prototype extensions instead of defining functions inside the constructor.

function GuessingGame() {
    this.new();
}
GuessingGame.prototype.new = function() {
    this.secret = Math.floor(Math.random() * 100) + 1;
    this.guessCount = 0;
    this.isGameOver = false;    
}
GuessingGame.prototype.guess = function(num) {
    if (this.isGameOver) {
        return 'GAME OVER';
    }
    this.guessCount += 1;
    if (typeof num !== 'number' || !Number.isInteger(num) || 
        num < 1 || num > 100) {
        return 'ERRONEOUS INPUT';
    }
    if (num === this.secret) {
        this.isGameOver = true;
        return 'CORRECT';
    }
    return num > this.secret ? 'HIGH' : 'LOW'; 
}
GuessingGame.prototype.getGuessCount = function() {
    return this.guessCount;
};

let game = new GuessingGame();

// game.guess(50);
// < 'HIGH'
// game.guess(25);
// < 'LOW'
// game.getGuessCount()
// < 2
// game.guess(37);
// < 'CORRECT'
// game.guess(38);
// < 'GAME OVER'
// game.guessCount
// 3
// game.new();
// game.getGuessCount();
// < 0