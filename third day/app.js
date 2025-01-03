// 4. logical operators


let result;
result = 4<5 && 3==="3"
result = !5
result =!0


//priciple of thruthly and falsy: every value is true unless its not empty value (0,"" , [], false, undefined, null)

console.log(result);

// 5. condetional operators (teny operators[? :], noncoalescing or nullish operators[??])

let mark=80
// console.log(mark >=60 ?"passed" : "failed");

// if (mark >= 60)
// console.log("passed")
// else{
//     console.log("failed")
// }

console.log(mark>=90 ?"grade A": mark>=80 ?"grade B": mark>=70 ? "grade C" : mark>=60 ? "grade D": "failed");

//nulish operators (??)

let messege
messege = "sinsalaamay"
console.log(messege ?? "hey guys");

console.log(messege ? messege : "waarkaan");


//6.concatinational/string operators (+,)

console.log("Abdiraxmaan "+ "maxamed "+ "cabdi ")
console.log("Abdiraxmaan","maxamed","cabdi")

//7. object operator(.,[])

//console

let student={name:"ali",age:29,phone:73332}
console.log(student.name);
console.log(student['name']);

//strings

//to create a string (literals , string constructor)

let text = "SOMTAC waa xarunt tiknooloji, waa lagu diyaariyo jiilka beri."

let qoraal= new String("waxaan qadaneynaa javascript")


console.log(typeof text, typeof qoraal);

console.log(text);
console.log(qoraal);

// string properties and methods

// length : returns number of characters in your string.

console.log(text.length);

//to copy or slice the part of string: (slice,substring,substr) methods
//getting index value
console.log(text[text.length -1]) 

//slice

console.log(text.slice(6,34));
console.log(text.slice(18,18));

//substring
console.log(text.substring(0,10));
console.log(text.slice(undefined, 6));


console.log(text.substr(8,11));
console.log(text.substr(10));

// to change the case(toUpperCase,toLowerCase) methods
// console.log(text.toUpperCase());

// to concat (concat)

let fname ="Salad" , lname ="Ali"

console.log(fname.concat(" ",lname, " waa arday fiican"));

// chartAt, chartCodeAt, indexOf, lastIndexOf

console.log(text.charAt(100));//return character at given position.

console.log(text.charCodeAt(0));


//indexOF

console.log(text.indexOf('C'));
console.log(text.lastIndexOf('c'));


//to convert string into array : split

let words = text.split(" ")
console.log(words);

console.log(text.split(" ").length + " words");