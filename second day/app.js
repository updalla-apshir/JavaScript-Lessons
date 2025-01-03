// //data types

// //simple/perimetive data type (string, number , boolean, undefined, null)

// let myvar
// myvar = 3
// myvar = "mohamed"
// myvar = false
// myvar = 5<6
// myvar = 4>6
// myvar = null //bug

// // complete / refrenced datatype (object,array,function)
// myvar = {name:"abdullah", age: 21, isnew : true,luxury:"yes"}
// /// array
// myvar = [{name:"caasi",color:"silver"},{name:"bmw",color:"white"},{name:"ferrari",color:"blackS"}]

// //function
// myvar=function(){
//     return ('waa idin salamay saxibayal')
// }
// console.log(typeof myvar);
// console.log(myvar());
// console.log(myvar.name);

// const pi=3.14
// 1. arithmetic operators (+,-,*,/,% modulus,** exponential,++ increment,-- decrement)
"strict mode"
let n1 =5, n2=6;
let result;

result = n1 + n2;
result = n2 - n1
result = 10%5
result = n2 % 2
result = 5**3  //5*5*5

console.log(n1++); //post increment
console.log(++n1); //pre-increment
console.log(n1);
console.log(result);

// 2. assigment operators(= , += , -=, *=, /= , %=)

let num =5
//  num+=6  // num = num + 6

num%=2
console.log(num);

// 3. comprisonal / rational operators (>,<,>=,<=,==,=== , !=, !==)
// boolean expression : true or false

let rational ;
rational = 4==5
rational = 4<5
rational = 5 == "5" // == check value only.

rational = 5 ==="5"  // identically equal check value and type.

rational = 4!=6
rational = 5 != "5"
rational = 5 !== "5"
console.log(rational);