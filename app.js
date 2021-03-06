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

UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();
    }
}

UI.prototype.clearFields=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

UI.prototype.showAlert=function(msg,className){
    const div=document.createElement('div');
    div.className=`alert ${className}`;
    div.appendChild(document.createTextNode(msg));
    const form=document.querySelector('#book-form');
    document.querySelector('.container').insertBefore(div,form);
    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}


document.getElementById('book-form').addEventListener('submit',function(e){
        // Get form values
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value
      
        // Instantiate book
        const book = new Book(title, author, isbn);
      
        // Instantiate UI
        const ui = new UI();
        if (title===''|| author==='' || isbn ===''){
            ui.showAlert('Please enter the Book details','error');

        }else{
            ui.showAlert('Book Added!','success');
        ui.addBookToList(book);
        ui.clearFields();}
    e.preventDefault();
});


document.getElementById('book-list').addEventListener('click',function(e){
    const ui = new UI();
    
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed','success');
    e.preventDefault();
})