function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


function UI(){
}

UI.prototype.addBookToList=function(book){
    const list=document.getElementById('book-list');
    const row=document.createElement('tr');
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a> </td>
    `;
    list.appendChild(row);
}


document.getElementById('book-form').eventListener('submit',function(e){
    const title=getElementById('title').value;
    const author=getElementById('author').value;
    const isbn=getElementById('isbn').value; 
    
const book=new Book(title,author,isbn);

    const ui=new UI();
    ui.addBookToList(book);
    e.preventDefault();
});