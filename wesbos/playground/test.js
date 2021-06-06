// Make a div
const myDiv = document.createElement("div");

// add a class of wrapper to it

myDiv.classList = "wrapper";

// put it into the body

document.body.append(myDiv);

// make an unordered list

const unOrderedList = `
<ul>
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ul>
`

// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

myDiv.innerHTML = unOrderedList;

// create an image

const myImg = document.createElement("img");

// set the source to an image
myImg.src = "https://picsum.photos/500";
// set the width to 250
myImg.width = 250;
myImg.height = 250;
// add a class of cute
myImg.classList = "cute";
// add an alt of Cute Puppy
myImg.alt = "cute puppy";
// Append that image to the wrapper
myDiv.append(myImg);

// with HTML string, make a div, with two paragraphs inside of it
const htmlDiv = `
<div class="htmlDiv">
	<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, magni.</p>
	<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores inventore consequuntur eaque et pariatur dignissimos tenetur deleniti assumenda culpa perspiciatis?</p>
</div>`;
// put this div before the unordered list from above
const ulElement = myDiv.querySelector("ul");
// ulElement.insertAdjacentElement('afterbegin', htmlDiv);
ulElement.insertAdjacentHTML("afterbegin", htmlDiv);
// add a class to the second paragraph called warning
const div = myDiv.querySelector(".htmlDiv");
div.children[1].classList = "warning";
// const secondP = div.lastElementChild;
// secondP.classList = "warning";
// remove the first paragraph
div.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
	return `
	<div class="playerCard">
		<h2>${name} — ${age}</h2>
		<p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
		<button class="deleteButton">Delete</button>
	</div>
	`;
}
// make a new div with a class of cards

const cardsDiv = document.createElement("div");
cardsDiv.classList = "cards";

// make 4 player cards using generatePlayerCard
let cardDiv = document.createElement("div");
cardDiv = generatePlayerCard("test1", 14, 120);
cardDiv += generatePlayerCard("test2", 14, 120);
cardDiv += generatePlayerCard("test3", 14, 120);
cardDiv += generatePlayerCard("test4", 14, 120);


// append those cards to the div
cardsDiv.innerHTML = cardDiv;
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement("beforebegin", cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const deleteButton = cardsDiv.querySelectorAll(".deleteButton");
// make out delete function
function deleteButtonHandler(event) {
	// event.target.parentElement.remove();
	event.currentTarget.closest('.playerCard').remove();
}
// loop over them and attach a listener
deleteButton.forEach(button => button.addEventListener("click", deleteButtonHandler))