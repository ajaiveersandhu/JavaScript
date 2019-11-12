// I not writing any f**king comment, because I don't want to read this code in my future. Good Luck to you. 
let yetiPosition = 0;
let score = 0;
let highestScore = 0;
let game;
let imgFileName;

window.addEventListener("load", () => {
    sessionStorage.setItem("highestScore", highestScore);
    game = document.getElementById("game");
    playGame();
});

function playGame() {
    let replacedID;
    yetiPosition = parseInt(Math.random() * 15 + 1);
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
                console.log(`in else : ${moundClicked.id}`);
                displayImage(moundClicked.id);
                score++;
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
    let scoreMessage = document.getElementById("scoreMessage");
    if (winORLoss) {
        scoreMessage.children[0].innerText = `Congratulations !!! You WON !`;
        scoreMessage.children[1].innerText = `Score : ${score}`;
    } else {
        scoreMessage.children[0].innerText = `Better LUCK NEXT TIME`;
        scoreMessage.children[1].innerText = `Score : ${score}`;
    }
    scoreMessage.style.display = "block";
    scoreMessage.addEventListener("click", resetGame);

}

function resetGame() {
    
}