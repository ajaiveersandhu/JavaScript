var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

function get_Id(id) {
	return document.getElementById(id);
}

function addScore() {
	let name_input = get_Id("name").value;
	let score_input = parseFloat(get_Id("score").value);
	if (names.includes(name_input)) {
		get_Id("name").insertAdjacentHTML("afterend", `<p style="display: inline; font-size: 0.75rem; margin: 0 1rem; color:blue;"> We already have the entry by same name : ${name_input}</p>`);
	} else {
		names.push(name_input);
		scores.push(score_input);
	}

	displayResults();
	displayScores();
}

function displayResults() {
	let average = 0;
	for (let x = 0; x < scores.length; x++) {
		average += scores[x];
	}
	let name_of_student = names[scores.indexOf((Math.max(...scores)))];

	let display_String = "<h2>Results</h2>";
	display_String += `<p>Average Score = ${average/scores.length} </p>`;
	display_String += `<p> High score = ${name_of_student} with a score of ${(Math.max(...scores))}</p>`;

	get_Id("results").innerHTML = display_String;
}

function displayScores() {
	let id_check = get_Id("score_heading");

	if (id_check == null) {
		let score_h2 = document.createElement("h2");
		score_h2.id = "score_heading";
		score_h2.innerHTML = `<h2>Scores</h2>`;
		get_Id("scores_table").before(score_h2);
	}

	let display_String = `<thead>
								<tr style="text-align : left;">
								<th>Name</th>
								<th>Score</th>
								</tr>
						  </thead>
						  <tbody>`;

	for (let x = 0; x < names.length; x++) {
		display_String += `<tr>
							<td>${names[x]}</td>
							<td>${scores[x]}</td>
						   </tr>`;
	}
	display_String += "</tbody>";
	get_Id("scores_table").innerHTML = display_String;
}

window.onload = function () {
	get_Id("add").onclick = addScore;
	get_Id("display_results").onclick = displayResults;
	get_Id("display_scores").onclick = displayScores;
};