// Declare game variables
let score = 0;
let gameOver = false;

// Create enemy object
let enemy = createEnemy();

// Create bullet object
const bullet = createBullet();

// Restart game function
function restartGame() {
    score = 0;
    gameOver = false;
    enemy = createEnemy();
    bullet.fired = false;
    hideGameOver();
}

// Handle keyboard events
document.addEventListener("keydown", handleKeyDown);

// Create enemy object function
function createEnemy() {
    return {
        x: Math.random() * (canvas.width - 50),
        y: 0,
        width: 50,
        height: 50,
        speed: 5,
    };
}

// Create bullet object function
function createBullet() {
    return {
        x: canvas.width / 2,
        y: canvas.height - 50,
        width: 10,
        height: 20,
        speed: 10,
        fired: false,
    };
}

// Hide game over message function
function hideGameOver() {
    document.getElementById("gameOver").style.display = "none";
}

// Handle key down function
function handleKeyDown(event) {
    if (event.keyCode === 32 && !bullet.fired) {
        bullet.fired = true;
        bullet.x = player.x + player.width / 2 - bullet.width / 2;
        bullet.y = player.y - bullet.height;
    }
    if (event.keyCode === 82 && gameOver) {
        restartGame();
        gameLoop();
    }
}
