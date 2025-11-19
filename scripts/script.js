const myLibrary = [];
const btnAddBook = document.getElementById("btn-add-book");


function Book(title, author, pages, isRead) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages=100, isRead=false) {
  myLibrary.push(new Book(title, author, pages, isRead));
}

addBookToLibrary("test", "test", 302, true)
addBookToLibrary("test2", "test2", 400, false);

console.log(myLibrary)

function handleAddBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  
  addBookToLibrary(title, author, pages, isRead);
  displayBooks();
}

function removeBook(id) {
  const bookIndex = myLibrary.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
  }
}

function displayBooks() {
  const shelf = document.getElementById("shelf");
  shelf.innerHTML = ""; // Clear existing books

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${book.isRead ? "Read" : "Not Read"}</p>
      <button onclick="removeBook('${book.id}')">Remove</button>
    `;
    shelf.appendChild(  bookDiv);
  });
}

btnAddBook.addEventListener("click", handleAddBook);
displayBooks();
