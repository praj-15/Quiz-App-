const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

let highScores = [];
try {
    const storedHighScores = localStorage.getItem("highScores");
    highScores = storedHighScores ? JSON.parse(storedHighScores) : [];
} catch (error) {
    console.error("Error parsing high scores from localStorage:", error);
    highScores = [];
}

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !username.value;
});

const saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100), // Ensuring the score is a number
        name: username.value
    };

    highScores.push(score);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem("highScores", JSON.stringify(highScores)); // Fixed the typo 'highScorw'
    window.location.assign("/");
};

saveScoreBtn.addEventListener("click", saveHighScore);
