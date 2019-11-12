// I not writing any f**king comment, because I don't want to read this code in my future. Good Luck to you. 
let yetiPosition = 0;
let score = 0;
let highestScore = 0;
let game;
let imgFileName;
let updateScore;
let scoreMessage;

window.addEventListener("load", () => {
    sessionStorage.setItem("highestScore", highestScore);
    scoreMessage = document.getElementById("scoreMessage");
    document.getElementById("highestScore").innerText = sessionStorage.getItem("highestScore");
    game = document.getElementById("game");
    updateScore = document.getElementById("score");
    playGame();
});

function playGame() {
    let replacedID;
    yetiPosition = parseInt(Math.random() * 14 + 1);
    replacedID = yetiPosition;
    document.getElementById(`penguin${yetiPosition}`).id = "yeti";
    console.log(`yeti position : ${yetiPosition}`);
    for (let x = 1; x < 16; x++) {
        let moundClicked = document.querySelector(`.mound:nth-of-type(${x})`);
        if (x === yetiPosition) {
            moundClicked.addEventListener("click", () => {
                moundClicked.id = "yeti";
                displayImage(moundClicked.id);
                endGame(0, score);
            });
        } else {
            moundClicked.addEventListener("click", () => {
                if (x !== 15) {
                    moundClicked.id = `penguin${x}`;
                } else {
                    moundClicked.id = `penguin${yetiPosition}`;
                }
                displayImage(moundClicked.id);
                if (!moundClicked.classList.contains("clicked")) {
                    score++;
                    updateScore.innerText = score;
                    moundClicked.classList.add("clicked");
                }
                if (score === 14) {
                    endGame(1, score);
                }
            });
        }
    }
}

function displayImage(imgFileName) {
    let imageURL = `url("../images/${imgFileName}.png")`;
    document.querySelector(`#${imgFileName}`).style.backgroundImage = imageURL;
}

function endGame(winORLoss, score) {
    if (sessionStorage.getItem("highestScore") < score) {
        highestScore = score;
        sessionStorage.setItem("highestScore", highestScore);
        document.getElementById("highestScore").innerText = sessionStorage.getItem("highestScore");
    }
    if (winORLoss) {
        scoreMessage.children[0].innerText = `Congratulations !!! You WON !`;
        scoreMessage.children[1].innerText = `Your Score : ${score}`;
        scoreMessage.children[2].innerText = `Highest Score : ${highestScore}`;
    } else {
        scoreMessage.children[0].innerText = `Better LUCK NEXT TIME`;
        scoreMessage.children[1].innerText = `Your Score : ${score}`;
        scoreMessage.children[2].innerText = `Highest Score : ${highestScore}`;
    }
    scoreMessage.style.display = "block";
    scoreMessage.addEventListener("click", resetGame);

}

function resetGame() {
    scoreMessage.style.display = "none";
}