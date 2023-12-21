// // Array-1

// // function getLevel2(n) {
// //   const result = [];
// //   for (let i = 1; i <= n; i++) {
// //     result.push(2 ** i);
// //   }
// //   return result;
// // }

// // console.log(getLevel2(5));


// // Array-2

// let n = 5, A = 2, B = 3;
// let result = [A, B];

// for (let i = 2; i < n; i++) {
//   result.push(result[i - 1] + result[i - 2]);
// }

// console.log(result); // Output: [2, 3, 5, 10, 20]
 


// // Array-3

// let arr = [1, 2, 3, 4, 5];
// let reversedArr = arr.slice().reverse();
// console.log(reversedArr); // Output: [5, 4, 3, 2, 1]



// // Array-4

// let arr = [4, 5, 7, 8, 6, 9];
// let oddNumbers = arr.filter((_, index) => index % 2 !== 0);
// console.log(oddNumbers, 'toqlar soni =', oddNumbers.length);



// // Array-5

// let arr = [4, 5, 7, 8, 6, 9];
// let evenNumbers = arr.filter((_, index) => index % 2 === 0);
// let oddNumbers = arr.filter((_, index) => index % 2 !== 0);
// console.log([...evenNumbers, ...oddNumbers]);



// // Array-6

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
 


// // Array-7

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = arr.length - 1; i >= 1; i -= 2) {
//   console.log(arr[i]);
// }





// // Array-8

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }



// // Array-9

// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 1; i < arr.length; i += 2) {
//   console.log(arr[i]);
// }
// for (let i = arr.length - 2; i >= 0; i -= 2) {
//   console.log(arr[i]);
// }



// // Array-10

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;
// for (let i = 0; i < n / 2; i++) {
//   console.log(arr[i], arr[i + 1], arr[n - i - 1], arr[n - i - 2]);
// }


// // Array-11

// function rangeOutSum(arr, K, L) {
//   const subArray = arr.slice(K, L + 1);
//   return arr.reduce((sum, num) => sum + num) - subArray.reduce((sum, num) => sum + num);
// }

// console.log(rangeOutSum([1, 2, 3, 4, 5], 1, 3)); 


// // Array-12

// let inputArray = [10, false, "", "Bekzod", null];
// let truthyArray = [];
// let falsyArray = [];

// for (let i = 0; i < inputArray.length; i++) {
//   if (inputArray[i]) {
//     truthyArray.push(inputArray[i]);
//   } else {
//     falsyArray.push(inputArray[i]);
//   }
// }

// console.log("Truthy:", truthyArray);
// console.log("Falsy:", falsyArray);



// // Array-13

// function getOddMin(arr) {
//   const oddIndices = arr.filter((_, index) => index % 2 !== 0);
//   const min = Math.min(...oddIndices);
//   return min;
// }

// console.log(getOddMin([4, 8, 2, 7, 5]));

// // Array-14

// function getEvenMax(arr) {
//   const evenIndices = arr.filter((_, index) => index % 2 === 0);
//   const max = Math.max(...evenIndices);
//   return max;
// }

// console.log(getEvenMax([3, 9, 5, 12, 8])); 


// // Array-15

// function findLocalMax(arr) {
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(findLocalMax([3, 7, 1, 9, 4]));


// // Array-16

// function findClosestToR(arr, R) {
//   let closest = arr[0];
//   arr.forEach(element => {
//     if (Math.abs(element - R) < Math.abs(closest - R)) {
//       closest = element;
//     }
//   });
//   return closest;
// }

// console.log(findClosestToR([1, 5, 8, 12, 6], 7));


// // Array-17



// // Array-18

// let n = 6; 
// let array = [1, 2, 3, 4, 5, 3];

// for (let i = 0; i < n - 1; i++) {
//   for (let j = i + 1; j < n; j++) {
//   if (array[i] === array[j]) {
//   console.log(`Bir xil qiymatli elementlar indekslari: ${i} va ${j}`);
//   break;
//   }
//     }
// }


// // Array-19




// // Array-20


// let n = 6;
// let a = [1, 2, 3, 4, 5, 6];
// let b = a.filter(element => element % 2 === 0);

// console.log(`b massivining elementlarining soni: ${b.length}`);
// console.log(`b massivining elementlari: ${b}`);



// // Array-21

// let n = 6;  
// let a = [1, 2, 3, 4, 5, 6]; 
// let k = 10;

// for (let i = 0; i < n; i++) {
//     a[i] += k;
// }

// console.log(`Yangilangan massiv: ${a}`);



// // Array-22

// let n = 6;
// let a = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < n / 2; i++) {
//     let temp = a[i];
//     a[i] = a[i + n / 2];
//     a[i + n / 2] = temp;
// }

// console.log(`Almashtirilgan massiv: ${a}`);


// // Array-23

// function shiftArray(arr, k) {
//   const shiftedArr = [...arr.slice(-k), ...arr.slice(0, arr.length - k)];
//   console.log(shiftedArr);
// }

// const a = [1, 2, 3, 4, 5];
// shiftArray(a, 2);


// // Array-24

// function deleteElementWithIndex(arr, k) {
//   const newArr = arr.slice();
//   newArr.splice(k, 1);
//   return newArr;
// }

// console.log(deleteElementWithIndex([1, 2, 3, 4, 5], 2)); 


// // Array-25

// function deleteElementsInRange(arr, k, m) {
//   const newArr = arr.slice(0, k).concat(arr.slice(m + 1));
//   console.log(newArr);
// }

// const a = [1, 2, 3, 4, 5];
// deleteElementsInRange(a, 1, 3); 


// // Array-26



// // Array-27



// // Array-28



// // Array-29



// // Array-30



