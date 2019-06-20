class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');
        row.innerHTML =
            `<td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ="#" class="delete">X</a></td>`;
        list.appendChild(row);
    }

    deleteBookFromList(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        title.value = '';
        author.value = '';
        isbn.value = '';
    }

    showAlert(msg, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

class Store {
    static getBooks() {
        let bookList = JSON.parse(localStorage.getItem('books'));
        if (bookList === null) {
            bookList = [];
        }
        return bookList;
    }

    static displayBooks(ui) {
        this.getBooks().forEach(book => {
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const bookList = this.getBooks();
        bookList.push(book);
        localStorage.setItem('books', JSON.stringify(bookList));
    }

    static deleteBook(isbn) {
        console.log(isbn);
        const bookList = this.getBooks();
        bookList.forEach((book, index) => {
            if (book.isbn === isbn) {
                bookList.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(bookList));
    }
}

const ui = new UI();
const
    title = document.getElementById('title'),
    author = document.getElementById('author'),
    isbn = document.getElementById('isbn');

document.addEventListener('DOMContentLoaded', function (e) {
    Store.displayBooks(ui);
})

document.getElementById('book-form').addEventListener('submit', function (e) {
    const book = new Book(title.value, author.value, isbn.value);
    if (title.value, author.value, isbn.value === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        Store.addBook(book);
        ui.showAlert('Book added to the list', 'success');
        ui.clearFields();
    }
    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
    Store.deleteBook(e.target.parentElement.previousElementSibling.textContent);
    ui.deleteBookFromList(e.target);
    ui.showAlert('Book removed from the list', 'success');
    e.preventDefault();
});