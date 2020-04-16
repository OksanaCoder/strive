/* EXERCISE 1
Create and array with the first 5 positive numbers
*/
let arr = [1, 23, 16, 20, 3445]
​
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
​
let obj = {
    name: 'Oksana',
    surname: 'Shukh',
    email: 'oksanashukh@gmail.com',
    age: 22
};
​
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
​
obj.licence = true;

​
/* EXERCISE 4
Remove from the previously created object the age
*/
​
delete obj.age;
​
/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/
​
let obj_2 = {
    name: 'Alex',
    surname: 'Jason',
    email: 'alexa@yahoo.com',
    age: 24
};
if (obj.email === obj_2.email) {
  console.log('Email is the same');
} else {
    console.log('Emails are different');
}
/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
​
let totalShoppingCart = 245;
if (totalShoppingCart > 50) {
    console.log('You have a free shipping!');
}​ else {
    let sum = totalShoppingCart + 50;
    console.log('The total cost including shipping: ' + '$' + sum);
}
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/
​
let totalShoppingCart = 245;
let discountCost = totalShoppingCart - (totalShoppingCart * 0.2);
if (totalShoppingCart > 50) {
    console.log('You have a free shipping plus 20% discount!\n So the total cost of your purchase: ' + '$' + discountCost);
}​ else {
    let sum = discountCost + 50;
    console.log('The total cost including shipping and discount: ' + '$' + sum);
}
​
/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
​
let car_1 = {
    brand: 'BMW',
    model: 'BMW i8',
    licensePlate: 'E2467'
};
let car_2 = Object.assign({}, car_1);
car_2.licensePlate = 'E3356';
let car_3 = Object.assign({}, car_1);
car_3.licensePlate = 'R3356';
let car_4 = Object.assign({}, car_1);
car_4.licensePlate = 'S3356';
let car_5 = Object.assign({}, car_1);
car_5.licensePlate = 'N3356';
let car_6 = Object.assign({}, car_1);
car_6.licensePlate = 'U3356';

​
/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/
let carsForRent = [car_1, car_2, car_3, car_4, car_5];
​
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
​carsForRent.shift(); //removes the first item
carsForRent.pop(); //removes the last item
//or
carsForRent.splice(0);
carsForRent.splice(-1);

​
/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
for(i = 0; i < carsForRent.length; carsForRent++) {
    for (let key in carsForRent[i]) {
        console.log(key + ':' + carsForRent[i][key]);
    }
}


​
/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/
​
let carsForSale = [car_1, car_2, car_3];
let totalCars = carsForSale.concat(carsForRent);
​
/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/
​carsForSale.forEach(function(item) {
    for(let key in item){
    console.log(item[key]);
 }})

