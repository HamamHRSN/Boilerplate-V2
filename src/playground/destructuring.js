// console.log('destructuring');



//
// Object Destructuring
//

// const person = {
//     name: 'Hamam',
//     age: 34,
//     work: 'webdeveloper',
//     location:{
//         city: 'Märsta',
//         temp: 80
//     }
// }


// // console.log(`${person.name} is ${person.age}.`);

// // if (person.location.city && person.location.temp){
// // console.log(`
// // ${person.name} is ${person.age} live in ${person.location.city} and temperature is there ${person.location.temp}
// // `);
// // }

// // const name = person.name;
// // const age = person.age;
// // const { name, age, location} = person;
// // console.log(`${name} is ${age} and i live in ${location.city}.`);

// const { name = 'Anonymous', age} = person;   // default for name if not exist
// console.log(`${name} is ${age}.`);

// // const { city, temp } = person.location;
// // if (city && temp){
// //     console.log(`It is ${temp}-F' in ${city}.`);
// //     }

// const { city, temp: temperature } = person.location;   
// // changing the temp name using other name like short cut and never will eccept the old name efter that  
// if (city && temperature){
//     console.log(`It is ${temperature}-F' in ${city}.`);
//     }


// // we can use both of default and changing rename in same time      
// const { work: job = 'Programmer'} = person;   
// console.log(`Doing: ${job}.`);


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'penguin'
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


//
// Arrays Destructuring
//

// const address = ['Södergatan 47B', '19547 Märsta', 'Stockholm', 'Sweden'];

// console.log(`You are in ${address[1]} ${address[3]}.`);



// const [street, city, state, contry] = address;

// const [, city, state] = address;      // scap the first item if i don't need to manchin it

// console.log(`You are in ${city} ${contry}.`);

// const [, , state] = address;
// console.log(`You are in ${state}.`);


// const address = ['Södergatan 47B', '19547 Märsta', 'Stockholm'];
// const [, , , contry = 'Sverige'] = address;    // rename is not exist in arrays but default yes
// console.log(`You are in ${contry}.`);


// const address = ['Södergatan 47B', '19547 Märsta', 'Stockholm', 'Sweden'];
// const [, , state = 'Sverige', contry] = address;    // rename is not exist in arrays but default yes
// console.log(`You are in ${state}.`);


const item = ['Coffee (hot)', 'kr2.00', 'kr2.50', 'kr2.75'];

const [itemName = 'Drink', , mediumPrice, ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);










