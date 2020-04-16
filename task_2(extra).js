/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/
let arr = [ 1 , 3, 5];
arr.reverse();
//or
let arr = [ 1 , 3, 5];
let newArr = [];
for (let i = arr.length -1; i > 0; i ++) {
    newArr.push(arr[i]);
}
/* EXERCISE 2
Create a code to get the maximum from an array
*/
let arr = [ 1 , 3, 5];
arr.max();
/* EXERCISE 3
Create a code to get the minimum from an array
*/
let arr = [ 1 , 3, 5];
arr.min();
/* EXERCISE 4
Create a code to get only even numerical value from an array
*/
let arr = [ 2, 10, 35, 4, 6, 3];
let newArr = [];
for(let i = 0; i < arr.length; i++) {
   if (i % 2 == 0) {
       newArr.push(arr[i]);
   }
}
console.log(newArr);
/* EXERCISE 5
Write the code to delete the even entries from an array
*/
let arr = [ 2, 10, 35, 4, 6, 3];
for(let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 == 0) {
       arr.splice(i, 1);
       i = i - 1;
   }
}
console.log(arr);
/* EXERCISE 6
Write the code to remove all the vocal from a string
*/
let arr = ['k', 'a', 'e', 'r'];
for (i = 0; i < arr.length; i++) {
    if(/[aeiouy]/.test(arr[i])) {
        arr.splice(i, 1);
       i = i - 1;
    }
}
console.log(arr);
/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1
*/
let arr = [1, 2, 5, 6, 12];
let newArr = [];
for(i = 0; i < arr.length; i++) {
    newArr.push(arr[i]++);
}
console.log(arr);
/* EXERCISE 8 
Replace all the strings into an array by their lenght
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/
let arr = [ "strive", "is", "good"];
let newArr = [];
for(i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
}
console.log(newArr);