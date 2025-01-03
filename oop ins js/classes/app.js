let s1 = "hello"
console.log(typeof s1);

let s2 = new String("hello");

console.log(typeof s2);

function myFunction(fname,lname){
    console.log(`i am ${fname} ${lname}`);
}

let object = new myFunction("Abdalla","Abshir")

// oops

class book{

    constructor(isbn,title,author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    getAll(){
        return `the isbn is ${this.isbn} the title is ${this.title} the author ${this.author}`
    }
}

let book2 = new book('222','rich dad','william chikspear');

console.log(book2);