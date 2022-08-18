const posts=[
    {title:'Post one',body:'This is post one'},
    {title: ' Post two',body:'This is post two'}
]

function getPost(){
    setTimeout(() =>{
        let output = '';
        for(let i=0; i<posts.length; i++){
            output += `<li> ${posts[i].title}</li>`
        }
        document.body.innerHTML=output;
    },1000)
}
function createPost(post){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else {
                reject('Error: Something went wrong')
            }
        },2000)
    });
}

///deleting the post
function deletepost(){
    return new Promise((resolve,reject) => {
        if(posts.length>0){
            setTimeout(() =>{
                resolve();
            },2000)
        }else{
            reject('Array is Empty')
        }

    });
}

setInterval(() =>{
    deletepost().then(() =>{
        posts.pop();
        lastpost=document.querySelector('body').lastChild;
        lastpost.parentNode.removeChild(lastpost)
    })
    .catch((err) =>{
        console.log(err)

    })
},2000)

createPost({title:'Post three',body:'This is post three'})
.then(() =>{
    getPost().then(() =>{
        deletepost();
    })
})
.catch(err => console.log(err)) 

// const Promise1 = Promise.resolve('hello world');
// const Promise2 = 10;
// const Promise3 = new Promise((resolve,reject) => setTimeout(resolve,2000,'good bye'));

// Promise.all([Promise1,Promise2,Promise3]).then(values => console.log(values));