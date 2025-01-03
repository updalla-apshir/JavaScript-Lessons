//objects
let adress={
    city:"mogadishu",
    country:"somalia",
    zip:252
}
let adress2={
    city:"jowhar",
    xafad:"taleex",
    degmo:"hodan",
    laan:"barwaaqo"
}
let result= Object.assign(adress,adress2)
// console.log(result)


//array:lis or collection of elements whith same data type 
//to create an array we use array literals or array constructors


let marks=[38,40,46,38,39,50,33,83,27,100,150]

// let students= new Array("ali","mohamed","abdullahi","abdi","cabdiraxman","cabdirisaaq","faarax","xalimo","xaawo","maxmud","maxamed","cabdifitaax")

//arrary whith mixed data type
let stuent=["ali",20,true]

//to acces or get element of ann array. use index number starting whith zero

// console.log(marks[7]);

// //lenght

// console.log(marks.length)
// console.log(marks[marks.length -1]);

//mutational methods (push, pop, shift, unshift, splice, slice)

//to add element at the end. we use push

// marks.push(44,45)
// console.log(marks);

// //to add an element at the front : unshift

// marks.unshift(70,80)
// console.log(marks);

// //to remove and element at the end: pop
// let deleted = marks.pop()
// console.log(marks,deleted);

// //to remove an element At the start:shift
// let f_delete = marks.shift()
// console.log(marks, f_delete);

// to remove or modify and element whithe specific position: splice

// marks.splice(3,3)
// console.log(marks);
// marks.splice(3,3,49,49,49)
// console.log(marks);

// to copy part of your array : we use slice

// let copy=marks.slice(0,8)
// console.log(copy);
// console.log(marks);


//computational methods(min,max)

//to pass an array arguments for methemetical methods we use rest parement(...)

// console.log(Math.min(...marks));
// console.log(Math.max(...marks));

///iterative methods(foreach, map, filter, find, reduce, search, some, Every)

// // foreach
// marks.forEach(function(element, index, array){

// })

// marks.forEach(function(marks,index){
//     console.log(`subject ${++index}=${marks}`);
// })

// marks.forEach(function(marks,p){
//     console.log(`marks ${++p}=${marks}`);
// })





let students= new Array("ali","mohamed","abdullahi","abdi","cabdiraxman","cabdirisaaq","faarax","xalimo","xaawo","maxmud","maxamed","cabdifitaax")




// students.forEach(function(mark,plus){
//     console.log(` ${++plus}. student = ${mark}`);
// })

// marks.forEach(function (mark,plus){
//     console.log(`ID  ${++plus}= ${mark}`)
// })

students.forEach(function(marl,plus){
    console.log(`marks ${++plus} = ${marl}`);
})

//map



// let newMark= marks.map(function(mark){
//     return mark - 5
// })
// console.log(marks);
// console.log(newMark);


// let nmark= marks.map(function(mark){
//     return mark > 55
// })
// console.log(marks);
// console.log(nmark);

// //filter: returns array of an elements which meet the condition or empty array
 
// let resul=marks.filter(function(mark){
//     return mark>60
// })
// console.log(resul);

// let returnednames = students.filter(function(student){
//   return student.endsWith('n')
// })
// console.log(returnednames);


let markfilter = students.filter(function(mark){
    return mark.endsWith('i')
})
console.log(markfilter);