
function receivesAFunction(cb) {
    console.log(cb());
}
main(function () {return "After I get this stuff done I'm going to bed"});


function returnsANamedFunction() {
    return function pizza() {
}}

function returnsAnAnonymousFunction() {
    return function() {
}}


//  ? ? ? ? ? what ? ? ? ? ? //
// function returnsANamedFunction(exercise) {
//     let food;

//     if (exercise === wallBalls) {
//         food = "smoothie";
//     } else if (exercise === deadLifts) {
//         food = "eggs and bacon";
//     } else {
//         food = "pancakes";
//     }

//     howIEatAllDay(exercise);

//     return function () {
//         console.log(`I love eating this ${food} tastes great!`);
//     };

// }

// const afterWorkOut = returnsANamedFunction(wallBalls);

// afterWorkOut();




// // function Monday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }

// // function Tuesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Swim 40 laps");
// // }

// // function Wednesday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Go for a five-mile run");
// // }

// // function Thursday() {
// //     console.log("Go for a five-mile run");
// //     console.log("Pump iron");
// // }

// function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
// }

// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function swimFortyLaps() {
//     console.log("Swim 40 laps");
// }

// function Monday() {
//     runFiveMiles();
//     liftWeights();
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }

//   function Monday() {
//     exerciseRoutine(liftWeights);
//   }
  
//   function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }
