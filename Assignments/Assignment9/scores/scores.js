class Student {
    constructor(firstName, lastName, score) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
    }

    static displayAverageScore(averageScore) {
        let avgScore = 0;
        studentArray.forEach(current => {
            avgScore += studentArray[current].score;
        });

        averageScore.value = (avgScore / (studentArray.length)).toFixed(2);
    }

    static clearFields(firstName, lastName, score) {
        firstName.value = "";
        lastName.value = "";
        score.value = "";

        document.getElementById("first_name").focus();
    }

    static clearTxtArea(txtAreaScores) {
        txtAreaScores.value = "";
        studentArray = [];
    }
}

// Global Variable
let studentArray = [];

// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("first_name").focus();
    // UI varibles.
    const firstName = document.getElementById("first_name"),
        lastName = document.getElementById("last_name"),
        score = document.getElementById("score"),
        averageScore = document.getElementById("average_score");
    
    // Disabling Average Score Input
    averageScore.disabled = true;

    document.getElementById("add_button").addEventListener("click", () => {
        if (firstName.value === "" || lastName.value === "" || score.value === "") {
            alert("INVALID ENTRY. \nPlease fill all the entry fields.");
        } else {
            if (isNaN(parseFloat(score.value))) {
                alert("Score entry must be a NUMERIC value.");
            } else {
                pushToArray(firstName.value, lastName.value, parseFloat(score.value));
                Student.displayAverageScore(averageScore);
            }
        }
        Student.clearFields(firstName, lastName, score);
    });
});

document.getElementById("sort_button").addEventListener("click", () => {
    txtAreaScores = document.getElementById("scores");
    sortByLastNameAndDisplay(txtAreaScores);
});

document.getElementById("clear_button").addEventListener("click", () => {
    txtAreaScores = document.getElementById("scores");
    Student.clearTxtArea(txtAreaScores);
});

function pushToArray(firstName, lastName, score) {
    studentArray.push(lastName);
    studentArray[lastName] = new Student(firstName, lastName, score);
}

function sortByLastNameAndDisplay(txtAreaScores) {
    if (studentArray.length === 0) {
        alert("There is nothing to display. Add some entries.");
    } else {
        txtAreaScores.value = "";
        studentArray.sort();

        studentArray.forEach(current => {
            txtAreaScores.value += `${studentArray[current].lastName}, ${studentArray[current].firstName}: ${studentArray[current].score}\n`;
        });
    }
}

