//object
//to create an object we use object literial or object contructor
//indexed array , associative array, multidemissional arrays
let student = {
    name:"ali",
    dob:2004,
    adress:"suuqa xoolaha-",
    introduces:function(){
        return `i'm ${this.name},i was born in ${this.dob}`
        },
        hoppies:["swimming", "reading quran", "football", "dating",],
        "my mother":"gani maxaaad fargeeti",

        iskeybar:function(){
            return this
        }
    }
 console.log(student);

 //how acces properties methods of an object

 console.log(student.name)
 console.log(student.dob)
 console.log(student.introduces())
 console.log(student['introduces']())
 console.log(student["my mother"]);
 
console.log(student.hoppies);
// // array to string join
console.log(student.hoppies.join(" "));
console.log(student.hoppies[1]);

