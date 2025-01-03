// ui elements

const isbn = document.querySelector('#isbn'),
      title = document.querySelector('#title'),
      author = document.querySelector('#author'),
      publishedDate = document.querySelector('#publishedDate'),
      image = document.querySelector('#image'),
      btn = document.querySelector('.btn'),
      container = document.querySelector('.container'),
      form = document.querySelector('.book-form'),
      tbody = document.querySelector('.books');

let books = JSON.parse(localStorage.getItem('books') || "[]")


class book{
    addBook(){

    }
    updateBook(index){

    }
    removeBook(index){

    }
    display(data){
     let output ='';
     if(data.length){
        data.forEach((book, index)=>{
            output+= `<tr> 
                        <td> ${book.isbn} </td>
                        <td> ${book.title} </td>
                        <td> ${book.author} </td>
                        <td> ${book.publishedDate} </td>
                        <td> <img src="${book.image}" width='60px' height='60px'>  </td>
                        <td>
                           <i class="fa fa-edit" onclick="${this.updateBook(index)}"> </i>
                           <i class="fa fa-trash" onclick="${this.removeBook(index)}"> </i>
                         </td>
                      </tr>`
        })
     }else{
        output= `<tr><td colspan='6'> No Data found </td> </tr>`
     }
     tbody.innerHTML= output
    }
    message(ms, color){

    }
}


let bookObj = new book;

bookObj.display(books)

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    // if(isbn.value && title.value && author.value ){
    //  if(btn.innerHTML.toLowerCase == 'save'){
    //    bookObj.addBook({isbn:isbn.value, title : title.value, author: author.value, publishedDate: publishedDate.value, image: image.value})
    //  }else if(btn.innerHTML.toLowerCase == 'update'){

    //  }
    // }else{

    // }

    console.log(image);
})