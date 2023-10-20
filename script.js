 var numbers = [1, 3, 5, 7, 9, 12];

//  check Array Lenth ......................../
 console.log(numbers.length);

//  Find single Item By Index number ............./
 console.log(numbers[3]);

//  Replace the numbers .........................../
 numbers [3]= 8;
console.log(numbers);

// Find items index numbers.........................../

var num = numbers.indexOf(9);
console.log(num);

// Push , Add some Extra data ........................../

var numbers = [1, 3, 5, 7, 9, 12];
numbers.push(36);
console.log(numbers);

// PoP, Delete an number................................./

numbers.pop();
console.log(numbers);


// Array থেকে ব্রেকেট উঠানুর জন্য ................................./

console.log(numbers.toString());

// Array কে জয়েন করার জন্য Join method use করা হয়......................../

var vegetables = ["Potato", "Pepe","eggplant"];
console.log(vegetables.join("-"));

// একাধিক Array কে একতে যোগ করার জন্য .........................../

var fruits = [["Banana", "Orange"],["jackfruits, Mango"]];

console.log(fruits.flat());

// Array কে যোগ করতে ব্যবহার করা হয়................................./


var vegetables = ["Potato", "Pepe","eggplant"];
var fruits = ["Banana", "Orange"];

var fruits_vehetables = vegetables.concat(fruits);
console.log(fruits_vehetables);

// Array এর প্রথম থেকে Item কে বাদ দিতে হলে ...................../

var vegetables = ["Potato", "Pepe","eggplant"];
vegetables.shift("Pepe");
console.log(vegetables);


var vegetables = ["Potato", "Pepe","eggplant"];
vegetables.unshift("Lemon");
console.log(vegetables);

// Array তে কোথা থেকে Data যোগ বিয়োগ করা হবে তার জন্য...................../

var fruits = ["lemon", " Banana", "Mango", "Apple"];
fruits.splice(1,0,"watermelon");
console.log(fruits);


var fruits = ["lemon", " Banana", "Mango", "Apple"];
fruits.splice(0,1,"watermelon");
console.log(fruits);

// Comparison Operator ...................................................../

x = 15;
y = 20;
z = 10;

var result = (x>y || y>z) && (x>z) || (x>y || z>y);
console.log(result);

// Conditional Operators .................................................../

x = 30;
y = 50;
z = 10;

if (x>y && x>z){
    if(y>z){
        console.log(x + "," + y + "," + z);
    }
    else {
        console.log(x + "," + z + "," + y);
    }
}

else if (y>x && y>z){

    if(x>z){
        console.log(y + "," + x + "," + z);
    }
    else{
        console.log(y + "," + z + "," + x);
    }
}

else if (z>x && z>y){

    if(x>y){
        console.log(z + "," + x + "," + y);
    }
}



