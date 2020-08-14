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

const bookTtile = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookGenre = document.querySelector(".genre");
const bookPages = document.querySelector(".pages");
const bookStatus = document.querySelector(".status");
const showList = document.querySelector(".showList_container");


const showBookList = e => {
    let filterBooks = [...books];
    const html = filterBooks.map(book => {
        return `
        <tr class="book_detail">
            <td>${books.title}</td>
            <td>${books.author}</td>
            <td>${books.genre}</td>
            <td>${books.pages}</td>
            <td><input type="checkbox" id="read" name="read"></td>
            <td><img class="delete_button" src="./img/Vector.png" alt=""></td>
        </tr>
        `;
    }).join(' ');
    showList.innerHTML = html;
};

console.log(books);


    
