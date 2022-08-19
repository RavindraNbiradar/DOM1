const posts=[
    { title: 'Post One', body:'This is post one',createdAt:new Date() },
    { title: 'Post Two', body:'This is post two',createdAt:new Date() }
];

function getPost(){
     setTimeout(()=>{
        let output='';
        posts.forEach( (post) =>{
            output +=`<li>${post.title} </li>`

        });
        document.body.innerHTML=output;

    },1000)
}

  function createPost(post){
     return new Promise((resolve,reject) =>{
        setTimeout(() => {
            posts.push(post);
            resolve()

        }, 2000);
     });

}


 function deletePost(){
    return new Promise((resolve,reject)=>{
        if(posts.length>0){
            setTimeout(()=>{
                resolve()
            },4000)
        }else{
            reject('Array is empty now')
        }

    });
}

async function printpost(){
    await getPost();
    await createPost( { title: 'Post Three', body:'This is post three'});
    await getPost();
    await createPost( { title: 'Post four', body:'This is post four'});
    await getPost();
    await createPost( { title: 'Post five', body:'This is post five'});

}
printpost();

async function deletepost(){

    await setInterval(()=>{
         posts.pop();
         lastPost=document.querySelector('body').lastChild;
         lastPost.parentNode.removeChild(lastPost)

    },6000)
}
deletepost()