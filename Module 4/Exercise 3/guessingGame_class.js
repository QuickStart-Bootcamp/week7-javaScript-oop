// The computer generates a random number between 1 and 100. The user attempts
// to guess the number and the computer returns the answer 'HIGH', 'LOW', or
// 'CORRECT' depending on whether the guess is higher, lower, or equal to the
// generated number. Once the guess is correct, the game ends. Make it possible
// to query the number of steps. Make it possible to reset the game by starting
// a new game.
//
// The code should run in the browser, and the user should interact with it 
// in the console.

class GuessingGame {
    #secret;
    #guessCount;
    #isGameOver;

    constructor() {
        this.new();
    }

    new() {
        this.#secret = Math.floor(Math.random() * 100) + 1;
        this.#guessCount = 0;
        this.#isGameOver = false;
    }
    get guessCount() {
        return this.#guessCount;
    }

    guess(num) {
        if (this.#isGameOver) {
            return 'GAME OVER';
        }
        this.#guessCount += 1;
        if (typeof num !== 'number' || !Number.isInteger(num) || 
            num < 1 || num > 100) {
            return 'ERRONEOUS INPUT';
        }
        if (num === this.#secret) {
            this.#isGameOver = true;
            return 'CORRECT';
        }
        return num > this.#secret ? 'HIGH' : 'LOW';         
    }
}

let game = new GuessingGame();

// game.guess(50);
// < 'HIGH'
// game.guess(25);
// < 'LOW'
// game.guessCount
// < 2
// game.guess(37);
// < 'CORRECT'
// game.guess(38);
// < 'GAME OVER'
// game.guessCount
// 3
// game.new();
// game.guessCount();
// < 0