function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML =
        `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href ="#" class="delete">X</a></td>`;
    list.appendChild(row);
}

UI.prototype.deleteBookFromList = function (target) {
    if (target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields = function () {
    title.value = '';
    author.value = '';
    isbn.value = '';
}

UI.prototype.showAlert = function (msg, className) {
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

const
    title = document.getElementById('title'),
    author = document.getElementById('author'),
    isbn = document.getElementById('isbn');

document.getElementById('book-form').addEventListener('submit', function (e) {
    const book = new Book(title.value, author.value, isbn.value);
    const ui = new UI();

    if (title.value, author.value, isbn.value === '') {
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        ui.addBookToList(book);
        ui.showAlert('Book added to the list', 'success');
        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteBookFromList(e.target);
    ui.showAlert('Book removed from the list', 'success');
    e.preventDefault();
});