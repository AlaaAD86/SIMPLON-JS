// GENERATOR FUNCTIONS IN ES2016

// function* getNumbers() {
//     yield 42;
//     yield 32;
//     return 19;
// }

// var iterator = getNumbers();
// console.log(iterator.next());
// console.log(iterator.next());;
// console.log(iterator.next());

//---------------------------------------------------------------


// Promises

// SIMPLE CODE ON PROMISES

// let a = new Promise((resolve, reject) =>{
//     let b = 1 + 1
//     if (b == 2){
//         resolve('success');
//     }
//     else {
//         reject('Failed');
//     }
// })

//  a.then((message) => {
//      console.log('C'est dans le THEN  ' + message);
//  }).catch((message) => {
//      console.log(('C'est dans le CCATCH ' + message));

//  });

//---------------------------------------------------------------

// CODE ON CALLBACK
//  const userLeft = false;
//  const userWatchingMemes = false;

//  function watchTutosCallBack(callback, errorCallback){
//      if(userLeft){
//          errorCallback({
//              name: 'Simon left',
//              message: ':('
//          });
//      } else if (userWatchingMemes){
//          errorCallback({
//              name: 'user is watching cats',
//              message: 'cats better than me'
//          });
//      } else {
//          callback('thumps UP!!!');
//      }
//  }

//  watchTutosCallBack((message) => {
//      console.log('succes' + message);
//  }, (err) => {
//      console.log(err.name + ' '+ err.message);

//  });

// SAME CODE BUT USING PROMISES

const userLeft = false;
const userWatchingMemes = true;

function watchTutosPromises() {
  return new Promise((reslove, reject) => {
    if (userLeft) {
      reject({
        name: "Simon left",
        message: ":("
      });
    } else if (userWatchingMemes) {
      reject({
        name: "user is watching cats",
        message: "cats are better than me"
      });
    } else {
      reslove("thumps UP!!!");
    }
  });
}

watchTutosPromises()
  .then(message => {
    console.log("succes" + message);
  })
  .catch(err => {
    console.log(err.name + " " + err.message);
  });
