// The computer generates a random number between 1 and 100. The user attempts
// to guess the number and the computer returns the answer 'HIGH', 'LOW', or
// 'CORRECT' depending on whether the guess is higher, lower, or equal to the
// generated number. Once the guess is correct, the game ends. Make it possible
// to query the number of steps. Make it possible to reset the game by starting
// a new game.
//
// The code should run in the browser, and the user should interact with it 
// in the console.

function GuessingGame() {
    let _secret = null;
    let _guessCount = 0;
    let _isGameOver = false;

    this.new = () => {
        _secret = Math.floor(Math.random() * 100) + 1;
        _guessCount = 0;
        _isGameOver = false;
    }
    this.new();

    Object.defineProperty(this, 'guessCount', {
        get: function() { 
            return _guessCount;
        }
    });

    this.guess = (num) => {
        if (_isGameOver) {
            return 'GAME OVER';
        }
        _guessCount += 1;
        if (typeof num !== 'number' || !Number.isInteger(num) || 
            num < 1 || num > 100) {
            return 'ERRONEOUS INPUT';
        }
        if (num === _secret) {
            _isGameOver = true;
            return 'CORRECT';
        }
        return num > _secret ? 'HIGH' : 'LOW'; 
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