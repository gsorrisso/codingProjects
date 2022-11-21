// for(i=1; i<=100; i++){
//     var fizzBuzz = i;
//     console.log(fizzBuzz)
//         if(fizzBuzz % 3){
//         console.log("Fizz");
//     }   
//             else if(fizzBuzz % 5){
//             console.log("Buzz");
//     } 
//                 else if(fizzBuzz % 3 && fizzBuzz % 5){
//                 console.log("FizzBuzz");
//     }               else {console.log(fizzBuzz)}
// }

// var i = 1;
// while(i<=100){
//     console.log(i);
//     i++

// }

for (i=1; i<=100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}