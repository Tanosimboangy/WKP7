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

let showlist = [];
const showList = document.querySelector(".showList_container");

// Mapping through the books array to get each element
// Put those elements in the an html 
function showBookList() {
    // Spreading the books array to keep the original unchanged
    let filterBooks = [...books];
    const html = filterBooks.map(book => {
        return `
        <tr class="book_detail id="${book.id}">
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.genre}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" id="read" name="read"></td>
            <td><img class="delete_button" src="./img/Vector.png" alt=""></td>
        </tr>
        `;
    }).join(' ');
    // Appending the html into the mama html
    showList.insertAdjacentHTML('beforeend', html);
    console.log(filterBooks);
};
showBookList();

const addButton = document.querySelector(".add_button");
const bookTitle = document.querySelector(".title").value;
const bookAuthor = document.querySelector(".author").value;
const bookGenre = document.querySelector(".genre").value;
const bookPages = document.querySelector(".pages").value;
const bookStatus = document.querySelector(".status").value;

const handleClickButton = e => {
    let newArray = [title, author, genre, pages, read, id];
    let newObject = {
        title: bookTtile,
        author: bookAuthor,
        genre: bookPages, 
        pages: bookPages, 
        read: bookRead, 
        status: bookStatus,
    }
    newArray.push(newObject);
}


addButton.addEventListener('click', handleClickButton);




    
// return myHTML `
//             <tr class="book_detail id="${book.id}">
//                 <td>${bookTtile.value}</td>
//                 <td>${bookAuthor.value}</td>
//                 <td>${bookGenre.value}</td>
//                 <td>${bookPages.value}</td>
//                 <td>${bookStatus.value}</td>
//                 <td><input type="checkbox" id="read" name="read"></td>
//                 <td><img class="delete_button" src="./img/Vector.png" alt=""></td>
//             </tr>`;