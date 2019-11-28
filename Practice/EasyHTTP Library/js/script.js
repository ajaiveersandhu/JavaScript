// document.getElementById("getText").addEventListener("click", getText);
// document.getElementById("getJSON").addEventListener("click", getJSON);
// document.getElementById("getAPI").addEventListener("click", getAPI);

let button = document.querySelectorAll(".container button");
let outputDiv = document.getElementById("output");

button.forEach(btn => {
	btn.addEventListener("click", () => {
		if (btn.id === "getText") getText();
		if (btn.id === "getJSON") getJSON();
		if (btn.id === "getAPI") getAPI();
	});
});


function getText() {
	fetch("sample.txt")
		.then(response => response.text())
		.then(data => outputDiv.innerHTML = data)
		.catch(error => console.log(error));
}

function getJSON() {
	fetch("sample.json")
		.then(response => response.json())
		.then(data => {
			let output = "";
			data.forEach(current => {
				output += `<li>${current.name} : ${current.score} </li>`;
			})
			outputDiv.innerHTML = output;
		})
		.catch(error => console.log(error));
}

function getAPI() {
	fetch("http://api.icndb.com/jokes/random/5")
		.then(response => response.json())
		.then(data => {
			let output = "";
			data.value.forEach(current => {
				output += `<li>${current.joke}</li>`;
			})
			outputDiv.innerHTML = output;
		})
		.catch(error => console.log(error));
}