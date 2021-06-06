// Book Class
class Book {
	constructor(bookTitle, bookAuthor, bookISBN) {
		this.bookTitle = bookTitle;
		this.bookAuthor = bookAuthor;
		this.bookISBN = bookISBN;
	}
}

class UI {
	addBookToList(book) {
		// Display table and hr
		document.querySelector("hr").style.display = "block";
		document.querySelector("#bookTable").style.display = "block";

		const bookEntry = document.getElementById("bookEntry");
		const tableRow = document.createElement("tr");
		tableRow.innerHTML = `
			<td>${book.bookTitle}</td>
			<td>${book.bookAuthor}</td>
			<td>${book.bookISBN}</td>
			<td><a href="#" class="delete">X</a></td>
		`;
		document.querySelector("tbody").append(tableRow);

		// display success Message
		UI.displayMessage("Book has been succesfully added.", "teal");
	}

	clearFields() {
		document.getElementById("bookTitle").value = "";
		document.getElementById("bookAuthor").value = "";
		document.getElementById("bookISBN").value = "";
	}

	static displayMessage(msg, color) {
		// Creating element.
		const message = document.createElement("div");
		// Adding ClassName
		message.className = "message";
		message.classList.add("ten");
		message.classList.add("columns");
		message.classList.add("u-pull-right");
		message.appendChild(document.createTextNode(msg));
		message.style.backgroundColor = color;
		// Inserting message before form
		document.querySelector("#bookForm").appendChild(message);

		setTimeout(() => {
			document.querySelector(".message").remove();
		}, 2000);
	}

	static deleteBookEntry(target) {
		if (target.className === "delete") {
			target.parentElement.parentElement.remove();
			UI.displayMessage("Book entry has been removed!", "blue");
		}
	}
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#bookTitle").focus();
});
document.getElementById("bookForm").addEventListener("submit", event => {

	// fetching all the form values
	const bookTitle = document.querySelector("#bookTitle"),
		bookAuthor = document.querySelector("#bookAuthor"),
		bookISBN = document.querySelector("#bookISBN");

	if (bookTitle.value === "" || bookAuthor.value === "" || bookISBN.value === "") {
		// display Error Message
		UI.displayMessage("Please enter complete book details", "tomato");

	} else {
		// Instantiating Book object
		const book = new Book(bookTitle.value, bookAuthor.value, bookISBN.value);

		// Instantiate UI object : to add book to table
		const ui = new UI();
		ui.addBookToList(book);
		// UI clear fields
		ui.clearFields();
		bookTitle.focus();
	}

	event.preventDefault();
});

document.getElementById("bookEntry").addEventListener("click", event => {
	UI.deleteBookEntry(event.target);
});