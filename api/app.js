let posts = [
    { title: 'post one', body: "the description of post one" },
    { title: 'post two', body: "the description of post two" },
    { title: 'post three', body: "the description of post three" },
    { title: 'post four', body: "the description of post four" }
];



// Sychronous 

// function addpost(obj) {
//     setTimeout(() => {
//         posts.push(obj)
//     }, 2000)
// }

// function readPost() {
//     setTimeout(() => {
//         posts.forEach((post) => {
//             document.body.innerHTML += `<li>Title: ${post.title}, body: ${post.body} </li>`
//         })
//     }, 1000)
// }

// addpost({ title: 'post five', body: "the description of post five" })
// readPost()


// A Sychronous 


// using callback function

// function addpost(obj, callback) {
//     setTimeout(() => {
//         posts.push(obj)
//         callback()
//     }, 2000)
// }

// function readPost() {
//     setTimeout(() => {
//         posts.forEach((post) => {
//             document.body.innerHTML += `<li>Title: ${post.title}, body: ${post.body} </li>`
//         })
//     }, 1000)
// }

// addpost({ title: 'post five', body: "the description of post five" },readPost)

// using promise function 

function addpost(obj) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            try{
                posts.push(obj)
                resolve()
            }
            catch(error){
                reject("ther's an error "+error)
            }
        })
    })

}

function readPost() {
    setTimeout(() => {
        posts.forEach((post) => {
            document.body.innerHTML += `<li>Title: ${post.title}, body: ${post.body} </li>`
        })
    }, 1000)
}

addpost({ title: 'post five', body: "the description of post five" }).then(readPost).catch((error)=>{
    alert(error)
})