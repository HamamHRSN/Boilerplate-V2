// // const promise = new Promise((resolve, rejects) => {
// //     setTimeout(() => {
// //         resolve('This is my resolve date.');
// //     }, 1500);
// // });

const promise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve({
            name: 'Hamam',
            age: 34
        });
        // rejects('Something went wrong!');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data); 
    return  new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve('This is my other promise');
        }, 1500);
    });
}).then((str) => {
    console.log('Does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});



// promise.then((data) => {
//     console.log('1', data); 
//     return 'Some data';
// }).then((str) => {
//     console.log('Does this run?', str);
// }).catch((error) => {
//     console.log('error: ', error);
// });

// promise.then((data) => {
//     console.log('1', data); 
// }, (error) => {
//     console.log('error: ', error);
// });

// // promise.then((data) => {
// //     console.log('2', data); 
// // });

console.log('after');
