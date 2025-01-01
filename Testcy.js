// // let m = prompt("Hey whats you age?");
// // m = Number.parseInt(m);
// // if (m<0){
// //     alert("This is invalid age");
// // }
// // else if (m<9){
// //    alert("you are a kid and cannot even think of driving");
// // }
// // else if (m<18 && m>=9){
// //    alert("you are a kid and you can think drive after 18");
// // }
// // else{
// //     alert("you can now drive as you are above 18");
// // }
// // console.log("done")

// // // js ternary operator
// // console.log("you can",  m<18? "not drive" :"drive")

const a = 'Apples';
switch (a) {
  case 'Bananas':
    console.log("Bananas are $0.59 a pound.");
    break;
    case 'Mangoes':
        case 'Apples':
          console.log('Mangoes and Apples are $2.79 a pound.');
          // Expected output: "Mangoes and papayas are $2.79 a pound."
          break;
        default:
          console.log('Sorry, we are out of ${a}.');
}

// // chapter 2 ps
// // problem no 1

// let age = prompt("what is your age")
// if(age>10 && age<20){
//    console.log("your age lies between 10 and 20")
// }
// else{
//     console.log("your age doesn't lies between 10 and 20")
// }

// // problen no 2

// let age = prompt("what is your age")
// switch (age) {
//   case '12':
//     console.log("your age is 12")
//     break
//   case '13':
//     console.log("your age is 13")
//     break
//     console.log("your age is 14")
//     break
//   case '15':
//     console.log("your age is 15")
//     break
//   default:
//     console.log("your age is not special")
// }
// problem 3
/*
let num = prompt("what is your age")
num = number.parselnt(age)
if (num % 2== 0 && num % 3 == 0 ){
    console.log("your number is not divisible by 2 and 3")
}
else{
    console.log("your number is not divisible by 2 and 3")
}
*/
// problem 5
let age = 16
let B = age > 18 ? "you can drive" : "you cannot drive"
console.log(B)

let r = "ram"
let t = 67
let y = 89

console.log (r, t, y)