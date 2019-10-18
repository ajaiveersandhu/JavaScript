var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

function get_Id(id) {
	return document.getElementById(id);
}

function addScore() {
	let name_input = get_Id("name").value;
	let score_input = parseFloat(get_Id("score").value);
	names.push(name_input);
	scores.push(score_input);
	console.log(names);
	console.log(scores);
}

function displayResults() {
	let value_Holder = 0;
	for (let x = 0; x < scores.length; x++) {
		value_Holder = scores[x];
	}
	let name_of_student = names[scores.indexOf((Math.max(...scores)))];

	let display_String = "<h2>Results</h2>";
	display_String += "<p>Average Score = " + value_Holder + "</p>";
	display_String += "<p>High score = " + name_of_student + " with a score of " + (Math.max(...scores)) + "</p>";

	get_Id("results").innerHTML = display_String;
}

function displayScores() {
	let display_String = "<thead>" +
							"<tr>" +
							"<th>" +
							"Name" +
							"</th>" +
							"<th>" +
							"Score" +
							"</th>" +
							"</tr>" +
							"</thead>" +
							"<tbody>";

	for (let x = 0; x < names.length; x++) {
		display_String += "<tr>" +
							"<td>" +
							names[x] +
							"</td>" +
							"<td>" +
							scores[x] +
							"</td>" +
							"</tr>";
	}

	display_String += "</tbody>";

	get_Id("scores_table").innerHTML = display_String;
}

window.onload = function () {
	get_Id("add").onclick = addScore;
	get_Id("display_results").onclick = displayResults;
	get_Id("display_scores").onclick = displayScores;
};









//check
