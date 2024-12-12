// 1. Exploring JavaScript Objects

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}


Book.prototype.displayInformation = function() {
    console.log(this.title, this.author, this.pages)
};

let book1 = new Book("Lord of the Rings", "Tolkien", "100-102");

console.log(book1['title'], book1.author, book1.pages)

library = []

Book.prototype.addBook = function(book) {
    library.push(book);
}


function findLongBook (book, threshold) {
    longBooks = book.pages.filter(pages => pages >= threshold);
    console.log(longBooks);
}



