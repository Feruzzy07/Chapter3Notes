// //Question 1
// function firstElement(array){
//     console.log(array[0]);
// }
// firstElement([1,2,3,4,5]);

//Question 2
// function firstElement(array){
//     console.log(array[4]);
// }
// firstElement([1,2,3,4,5]);

//Question 3
// function firstElement(array){
//     if(array.length == 0){
//         console.log("empty array");
//     }
//     else{
//         console.log(array[0]);
//     }
//  }
//  firstElement([]);

//Question 4
// function element(array){
//     for(let i = array.length - 1; i >= 0; i--){
//         console.log(array[i]);
//     }
// }
// element([5,4,3,2,1]);

//Question 5
function element(array){
for(let i = 2; i < array.length; i=i+3){
    console.log(array[i])
}
}
element([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]);

//Question 6
function everySecond(arr){
    for (let i = 2; i<arr.length; i=i+2){
        console.log(arr[i])
    }
}
everySecond([5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//Question 7
function biggerThanFour(arr){
    for (let i =0; i<arr.length; i++) {
        let item = arr[i]; if (item > 4){
        console.log(item); }
    }
}
biggerThanFour([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);

//Question 8
function biggerThanNum(arr, num){
    for (let i =0; i<arr.length; i++){
        let item = arr[i]; if (item > num){
            console.log(item);
        }
    }
}
biggerThanNum([-10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60], 20);

