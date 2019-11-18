// I not writing any f**king comment, because I don't want to read this code in my future. Good Luck to you. 
let yetiPosition;
let score;
let highestScore = 0;
let game;
let imgFileName;
let updateScore;
let scoreMessage;
let imageURL;

window.addEventListener("load", () => {
    yetiPosition = 0;
    score = 0;
    if (!localStorage.getItem("highestScore")) {
        localStorage.setItem("highestScore", highestScore);
    }
    updateScore = document.getElementById("score");
    scoreMessage = document.getElementById("scoreMessage");
    document.getElementById("highestScore").innerText = localStorage.getItem("highestScore");
    game = document.getElementById("game");
    
    playGame();
});


function playGame() {
    yetiPosition = parseInt(Math.random() * 14 + 1);
    document.getElementById(`penguin${yetiPosition}`).id = "yeti";
    // console.log(`yeti position : ${yetiPosition}`);
    for (let x = 1; x <= 15; x++) {
        let moundClicked = document.querySelector(`.mound:nth-of-type(${x})`);
        if (x === yetiPosition) {
            moundClicked.addEventListener("click", () => {
                moundClicked.id = "yeti";
                document.getElementById(`yetiAudio`).play();
                displayImage(moundClicked.id);
                 setTimeout(() => {
                     endGame(0, score);
                 }, 500);
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
                    document.getElementById(`${moundClicked.id}Audio`).play();
                    score++;
                    updateScore.innerText = score;
                    moundClicked.classList.add("clicked");
                }
                if (score === 14) {
                    setTimeout(() => {
                        endGame(1, score);
                    }, 500);
                }
            });
        }
    }
}

function displayImage(imgFileName) {
    imageURL = `url("images/${imgFileName}.png")`;
    document.querySelector(`#${imgFileName}`).style.backgroundImage = imageURL;
}

function endGame(winORLoss, score) {
    if (localStorage.getItem("highestScore") < score) {
        highestScore = score;
        console.log("highest score ");
        localStorage.setItem("highestScore", highestScore);
        document.getElementById("highestScore").innerText = localStorage.getItem("highestScore");
    } else {
        highestScore = localStorage.getItem("highestScore");
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
    document.querySelector(".replayIcon").addEventListener("click", () => {
        window.location.reload(true);
    });
}