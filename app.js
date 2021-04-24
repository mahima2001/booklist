function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}


function UI(){
}

UI.prototype.addBookToList=function(book){
    //console.log(book.title);
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
UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';}


document.getElementById('book-form').addEventListener('submit',function(e){
        // Get form values
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value
      
        // Instantiate book
        const book = new Book(title, author, isbn);
      
        // Instantiate UI
        const ui = new UI();
      

    ui.addBookToList(book);
    ui.clearFields();
    e.preventDefault();
});