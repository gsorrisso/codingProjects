// // counts 1-20 and prints odd numbers 
// for (let i=0; i<=20; i++){
//     if (i % 2 != 0){
//         console.log(i)
//     }
// }
// // same function as above but a different way
// for (let i=1; i<20; i+=2){
// console.log(i);
// }


// // decreasing multiples of 3 from 100 
// for(i=100; i>=0; i--){
//     if(i % 3 == 0){
//         console.log(i);
//     }
// }

// // Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
// for(i=4; i>-4; i-=1.5){
// console.log(i)
// }

// Write code that will add all of the values from 1-100 
// onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100.
// We should get back 5050 at the end.

// first attempt way off 
// for(i=100; i>=0; i--){
//     let sum = i+1
//     console.log(i + "+" + sum)

// }

// // right way *****
// var sum = 0;
// for(i=1; i<=100; i++){
//     sum += i;
// }
// console.log(sum);

// // Write code that will multiply all of the values from 1-12 onto some variable product 
// // and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. 
// // We should get back 479001600 at the end.

// product = 1;
// for(i=1; i<=12; i++){
//     product *= i;
// }
// console.log(product);


for (i=1; i<=20; i++){
    if(i % 2 != 0){
    console.log(i);
    }
}