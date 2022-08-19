console.log('person1:shows ticket');
console.log('person2:shows ticket');

const preMovie = async ()=>{
    const promisetickets = new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket'),3000)
    });

    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'))
    const addButter = new Promise((resolve,reject)=> resolve('butter'));
    const getcoldDrinks = new Promise((resolve,reject)=> resolve('coldDrink'))

    let ticket = await promisetickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn =await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: no i need butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got a ${butter}`);
    console.log('husband: any things else darling?');
    console.log('wife: buy me a cold Drinks')

    let colddrinks = await getcoldDrinks;

    console.log(`husband: i got some ${colddrinks}`);
    console.log('wife: lets go we are late');
    console.log('husband: thanks to reminder lets go');

    return ticket;
     // //// promise.all() method ///////
    // let [popcorn,butter,coke]= await Promise.all([getPopcorn,addButter,getcoldDrink])

    // console.log(`${popcorn} ${candy} ${coke}`);
}
preMovie().then((m)=>console.log(`person3:show ${m}`));
 console.log('person4: shows ticket');
 console.log('person5: shows ticket');