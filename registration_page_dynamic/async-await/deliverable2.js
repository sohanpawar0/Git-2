console.log('person:1 has ticket');
console.log('person:2 has ticket');

// using promises


// const PromisewifeBringingTickets = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('ticket');
//         }, 2000);
// })

// const getPopcorn = PromisewifeBringingTickets.then((values)=>{
//     console.log('Wife: I have tics!');
//     console.log(`Husband: Let's go in!`);
//     console.log(`Wife: I'm hungry!`);
//     console.log(`Husband: Wait! `);

//     return new Promise((resolve,reject)=> resolve(`Popcorn Delivered! ${values}`));
// })

// const getButter = getPopcorn.then((values)=>{
//     console.log(`Wife: I got the popcorn. Thanks!`);
//     console.log(`Husband: Let's go in!`);
//     console.log(`Wife: But I need some butter on popcord!`);
//     console.log(`Husband: Wait! `);

//     return new Promise((resolve,reject)=> resolve(`Butter Delivered! ${values}`));
// })

// const getColdDrinks = getButter.then((values) =>{
//     console.log(`Wife: Just one last thing!`);
//     console.log('Husband: What?')
//     console.log('Wife: One coldrinks!')

//     return new Promise((resolve,reject)=> resolve(`got cold drinks!!! ${values}`));
// })

// getColdDrinks
// .then((values)=>{
//     console.log('Husband: Take it! Anything else?');
//     console.log(`Wife: No! Let's go!`);

//     console.log(values);
// })



// using async await

const preMovie = async ()=>{

    const wifeBriningTickets = new Promise((resolve,reject)=> resolve('ticket'));
    const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
    const getButter = new Promise((resolve,reject)=> resolve('butter'));
    const getColdDrinks = new Promise((resolve,reject)=> resolve('Cold-drinks'));

    const ticket = await wifeBriningTickets;

    console.log(`Wife: I have ${ticket}!`);
    console.log(`Husband: Let's go in!`);
    console.log(`Wife: I'm hungry!`);
    console.log(`Husband: Wait!`);

    const popcorn = await getPopcorn;

    console.log(`Wife: I got the ${popcorn}. Thanks!`);
    console.log(`Husband: Let's go in!`);
    console.log(`Wife: But I need some butter on popcord!`);
    console.log(`Husband: Wait! `);

    const butter = await getButter;

    console.log(`Wife: Just one last thing!`);
    console.log('Husband: What?')
    console.log('Wife: One coldrinks!')

    const coldDrinks = await getColdDrinks;

    console.log('Husband: Take it! Anything else?');
    console.log(`Wife: No! Let's go!`);

    return ticket;
}

preMovie().then((ticket)=>console.log(`person 3: has a ${ticket}!`));

console.log('person:4 has ticket');
console.log('person:5 has ticket');