  function createPost(){
    return new Promise(() => {
        // update lastactivitytime
    })
  }
  function seensomeMessage(){
    return new Promise(() => {
        // update lastactivitytime
    })
  }
  function updateprofilephoto(){
     return new Promise(() => {
        // update lastactivitytime
    })
  }

  const user ={
    username:'ravindra',
    lastactivitytime:'18th of aug'
  }

  updatelastactivitytime ={
    return New Promise(resolve,reject) ={
        setTimeout(() => {
            user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000);
    }
  }
 function userupdatespost(){
    Promise.all([createPost,updatelastactivitytime]).then(([createpostresolves,updatelastactivitytimeresolves]) =>{
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err => console.log(err))
  }