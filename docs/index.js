 //This is my first Javascript code!
 console.log('Hello World');
 let name = 'Adarsh';
 console.log(name);

 //cannot be a reserved keyword
 //should be meaningful
 //cannot start with a number
 //cannot contain a space or a hyphen
 //Are case-sensitive

// constant is if you dont want to change value, and let is if you do

 let name = 'Adarsh again'; //string literal
 let age = 30; // number literal
 let isApproved = false; // boolean literal
 let firstname; = undefined;
 let selectedColor; = null;

 let person = {
    name: 'Adarsh a second time',
    age: 12
 }
 console.log(person)
 //bracket notation
 //person['name']

 //dot notation
 //person.name 

 let selectedColors = ['red', 'blue'];
 selectedColors[2] = 'green'
 console.log(selectedColors.length);

 // performing a task
 function greet(name) {
    console.log('Hello ' + name + ' ' + lastName);
 }
 greet('Adarsh');

 // calculating a value
 function square(number) {
    return number * number;
 }

 let number = square(2);
 console.log(number)
 // a function is a set of statements that either carries
 // out a task or calculates and returns a value