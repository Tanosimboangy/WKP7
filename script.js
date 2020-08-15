// Create an array of object to work out 
const books = [
	{
		title: 'Mortality for beatiful girls',
		pages: 300,
		author: 'Alexander Smith',
    genre: 'fantasy',
    read: false,
    id: 278762763,
	},
	{
		title: 'American Blood',
		pages: 378,
		author: 'Ben Sanders',
    genre: 'real',
    read: true,
    id: 374857397,
	},
	{
		title: 'Is there meaning in life',
		pages: 289,
		author: 'Jacquit',
    genre: 'fiction',
    read: true,
    id: 39475836,
	},
	{
		title: 'I will go with you',
		pages: 403,
		author: 'J L B Matekoni',
    genre: 'fabulous',
    read: false,
    id: 397273487,
	},
	{
		title: 'Never give up',
		pages: 628,
		author: 'Golden Smith',
    genre: 'fantastic',
    read: true,
    id: 238734787,
	},
	
];

// Grab the showlist contaniner to push the html
const showList = document.querySelector(".showList_container");

// Mapping through the books array to get each element
// Put those elements in the an html 
function showBookList() {
    // Spreading the books array to keep the original unchanged and get a new one to use
		let filterBooks = [...books];
		// Creating a new html to store all the value from the object
    const html = filterBooks.map(book => {
        return `
        <tr class="book_detail id="${book.id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" id="read" name="read"></td>
            <td><img class="delete_button" src="./img/Vector.png" id="${book.id}" alt=""></td>
        </tr>
        `;
    }).join(' ');
    // Appending the html into the mama html
    showList.insertAdjacentHTML('beforeend', html);
};
// Return the function
showBookList();

// Grab all those elements in order to get the values from them
const bookTitle = document.getElementsByClassName(".title");
const bookAuthor = document.getElementsByClassName(".author");
const bookGenre = document.getElementsByClassName(".genre");
const bookPages = document.getElementsByClassName(".pages");
const bookStatus = document.getElementsByClassName(".status");

// Grab the form so that we can listen to it
const form = document.querySelector("form");

// Create a  new variable for the new object
let newObj = [];
// Create the function for the eventListener from the add button
const handleClickButton = (event) => {
	event.preventDefault();
	const newForm = event.currentTarget;
	const title = newForm.title.value;
	const author = newForm.author.value;
	const genre = newForm.genre.value;
	const pages = newForm.pages.value;
	const status = newForm.status.value;
	// Create a new object
	const	newObject = {
		title: title,
		author: author,
		genre: genre, 
		pages: pages, 
		status: status,
	};
	// Push this object
	newObj.push(newObject);
	// Call this function
	newFunction();
}

// Create a new function for the new html
function newFunction() {
	// Map through the new array of object
	const mapBooks =	newObj.map(book => 
		 			`	<tr class="book_detail">
							<td>${book.title}</td>
							<td>${book.author}</td>
							<td>${book.genre}</td>
							<td>${book.status}</td>
							<td><input type="checkbox" id="read" name="read"></td>
							<td><img class="delete_button" src="./img/Vector.png" id="${book.id}" alt=""></td>
						</tr>`).join("");
	// Insert the new html into the big one
	showList.insertAdjacentHTML('beforeend', mapBooks);
};
// Listen the form event 
form.addEventListener('submit', handleClickButton);


// const handleDeleteButton = e => {
// 	if (e.target.matches('.delete_button')) {
// 		const deleteNewList = event.target.closest('.delete_button');

// 	}
// };

// const deleteOrder = (deleteList) => {
// 	orderDelete.parentElement.remove();
// }

// DeleteList.addEventListener('click', );

