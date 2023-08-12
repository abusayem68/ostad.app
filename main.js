// Task-1:
const printObjectProperties = (obj) => {
  if (Object.keys(obj).length > 0) {
    for (const property in obj) {
      console.log(property + ':' + ' ' + obj[property]);
    }
  } else {
    console.log('Object is empty');
  }
};

// Examples:
// printObjectProperties({});

// Task-2:
const findMaxNumber = (numbersArray) => {
  if (numbersArray.length > 0) {
    return Math.max(...numbersArray);
  } else {
    return null;
  }
};

// Examples:
/*
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); 

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); 
*/

// Task-3:
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

// Examples:
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2));
*/

// Task-4:
const calculateSquare = (num) => {
  return Math.pow(num, 2);
};

// Examples:
/*
console.log(calculateSquare(5));
console.log(calculateSquare(8));
*/

// Task-5:
const doubleNumbers = (numbersArray) => {
  return numbersArray.map((num) => num * 2);
};

// Examples:
/*
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); 
*/

// Task-6:
class MathUtility {
  static multiply(a, b) {
    return a * b;
  }
}

// Examples:
/*
console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16
*/

// Task-7:
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  fetch() {
    console.log('Fetching the ball!');
  }
}

// Examples:
/*
const animal = new Animal('Lion', 'Roar');
animal.makeSound(); // Output: "Roar"

const dog = new Dog('Buddy', 'Woof');
dog.makeSound(); // Output: "Woof"
dog.fetch(); // Output: "Fetching the ball!"
*/

// Task-8:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`
    );
  }
}

// Example:
/*
const person1 = new Person('John', 30);
person1.introduce();

const student1 = new Student('Alice', 20, 'Computer Science');
student1.introduce();
*/
