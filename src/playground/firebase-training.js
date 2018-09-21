import * as firebase from 'firebase';
// import firebase from 'firebase';
// import firebase from 'firebase/app';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDsuuUu6Za1kmgqn1mLsz_7uACCw8SOewk",
    authDomain: "expensify-351db.firebaseapp.com",
    databaseURL: "https://expensify-351db.firebaseio.com",
    projectId: "expensify-351db",
    storageBucket: "expensify-351db.appspot.com",
    messagingSenderId: "317676226389"
  };
  firebase.initializeApp(config);

  const database = firebase.database();




//   database.ref().set({
//       name: 'Hamam Hamou',
//       age: 34,
//       stressLevel: 6,
//       job: {
//           title: 'Software Development',
//           company: 'Google'
//       },
//       isSingle: false,
//       location: {
//           city: 'Märsta',
//           country: 'Sverige'
//       }
//   }).then(() => {
//      console.log('Data is saved!');
//   }).catch((e) => {
//      console.log('This Failed: ', e);
//   });



//   database.ref().set('this is my data');

// database.ref().set({
//     age: 35
// });


// database.ref('age').set(35);
// database.ref('location/city').set('Stockholm');

// database.ref('attributes').set({
//     heigth: 182,
//     weight: 130
// }).then(() => {
//     console.log('Second set call worked.');
//  }).catch((e) => {
//     console.log('Things didnt work for the second error: ', e);
//  });


// console.log('I made a request to change the data.');

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed.');
// }).catch((e) => {
//     console.log('did not remove data:', e);
// });

// database.ref()
// .remove()
// .then(() => {
//     console.log('Data was removed.');
// }).catch((e) => {
//     console.log('did not remove data:', e);
// });

// Removeing using set
// database.ref().set(null);
// database.ref('isSingle').set(null);

// database.ref().update({
//     name: 'Salma',
//     age: 5,
//     job: 'Software Development',
//     isSingle: null
// });

// database.ref().update({
//     job: 'Manager',
//     location: {
//         city: 'Upplands Visby'   // will change all location and keep just new value city without country
//     }
// });


// here we must keep the object with the key in '' with the concatenation of firebase /
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Upplands Visby'
// });

// database.ref().update({
//         stressLevel: 10,
//         'job/company': 'Amazon',
//         'location/city': 'Malmo'
//     }).then(() => {
//     console.log('Data was updated.');
// }).catch((e) => {
//     console.log('did not update data:', e);
// });

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); 
//     })
//     .catch((e) => {
//         console.log('Error fetching data:', e);
//     });

// database.ref('job')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); 
//     })
//     .catch((e) => {
//         console.log('Error fetching data:', e);
//     });

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val); 
//     })
//     .catch((e) => {
//         console.log('Error fetching data:', e);
//     });

// database.ref().on('value', (snapshot) => {
    // const val = snapshot.val();
    // console.log(val);
// });

// setTimeout(() => {
//      database.ref('age').set(36);
// },3500);

// setTimeout(() => {
//     database.ref('age').set(37);
// },7000);

// setTimeout(() => {
//     database.ref('age').set(38);
// },10500);



// const onValueChange = (snapshot) => {
    // const val = snapshot.val();
    // console.log(val);
// };

// database.ref().on('value', onValueChange);

// setTimeout(() => {
//      database.ref('age').set(36);
// },3500);

// setTimeout(() => {
//     database.ref('age').off('value',onValueChange);
// },7000);

// setTimeout(() => {
//     database.ref('age').set(38);
// },10500);



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//      database.ref('age').set(36);
// },3500);

// setTimeout(() => {
//     database.ref('age').off('value',onValueChange);
// },7000);

// setTimeout(() => {
//     database.ref('age').set(38);
// },10500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }, (e) => {
//     console.log('Error with data fetching', e);
    
// });

// setTimeout(() => {
//      database.ref('age').set(36);
// },3500);

// setTimeout(() => {
//     database.ref('age').off('value',onValueChange);
// },7000);

// setTimeout(() => {
//     database.ref('age').set(38);
// },10500);


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error with data fetching', e);
// });





/*
// just Ex for the way adding arrays to firedatabase 
// // this is the selution in firebase  Ex. just
//   const firebaseNotes = {
//       notes: {
//           abc123: {
//             title: 'First note!',
//             body: 'This is my note'
//           },
//           efg456: {
//             title: 'Another note!',
//             body: 'This is my note'
//           }
//       }
//   };

// // this is not working in firebase as unique id   Ex. Just
//   const notes = [{
//         id: '12',
//         title: 'First note!',
//         body: 'This is my note'
//   }, {
//         id: '761ase',
//         title: 'Another note!',
//         body: 'This is my note'
//   }];

//   database.ref('notes').set(notes);
//   database.ref('notes/12')
*/



// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// });



// database.ref('notes/-LMdPtBtRdLWj9mFhnQF').update({
//     body: 'buy food'
// });

// database.ref('notes/-LMdPtBtRdLWj9mFhnQF').remove();




// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 1000
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 2000
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 3000
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);    
// }).catch((e) => {
//    console.log('Error fetching data: ', e);
// });


// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });   
//     console.log(expenses);
// }).catch((e) => {
//    console.log('Error fetching data: ', e);
// });



// database.ref('expenses')
// .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });  
//     console.log(expenses);
// }, (e) => {
//     console.log('Error fetching data: ', e);
//  });


// // child_removed
// // showing just after we remove any opject from database 
// database.ref('expenses')
// .on('child_removed', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val());
// });


// // child_changed
// // showing just after we update
// database.ref('expenses')
// .on('child_changed', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val());
// });


// // child_added
// //showing just after we adding even what its adding already
// database.ref('expenses')
// .on('child_added', (snapshot) => { 
//     console.log(snapshot.key, snapshot.val());
// });