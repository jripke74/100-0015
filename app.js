let age = 32;
let userName = 'Jeff';
let hobbies2 = ['Sports', 'Cooking', 'Reading'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 120000,
};

function calculateAdultYears(userAge) {
  return age - 18;
}

console.log(calculateAdultYears(age));

age = 45;
console.log(calculateAdultYears(age));

const courseName = '100 days';
const coursePrice = 20;
const courseGoals = ['Master HTML', 'Master CSS', 'Master JavaScript'];

console.log(courseName);
console.log('$' + coursePrice);
console.log(courseGoals);

const course = {
  courseName: '100 days',
  coursePrice: 20,
  courseGoals: ['Master HTML', 'Master CSS', 'Master JavaScript'],
};

console.log(course.courseGoals[1]);
console.log(courseGoals[1]);

function displayAGoal(indexOfGoal) {
  return courseGoals[indexOfGoal];
}

function getListItem(array, arrayIndex) {
  return array[arrayIndex];
}

console.log(displayAGoal(2));
console.log(getListItem(course.courseGoals, 1));

const person = {
  name: 'Doug',
  greet() {
    console.log('Hello ' + person.name);
  }
}

person.greet();

console.log('Add: 10 + 4 = ' + (10 + 4));
console.log('Minus: 10 - 4 = ' + (10 - 4));
console.log('Multiply: 10 * 4 = ' + (10 * 4));
console.log('Divide: 10 / 4 = ' + (10 / 4));
console.log('Modolus(remainder): 10 % 4 = ' + (10 % 4));

console.log('10 + 3 - 5 * 10 = ' + (10 + 3 - 5 * 10));

let result = 10 + 3 - 5 * 10;
result++;
result += 5;
result--;
console.log(result);

console.log('Jeff' + ' ' + 'Ripke');

let userName2 = 'Douglas';
console.log(userName2.length);
console.log(userName2.toUpperCase());

const hobbies = ['Sports', 'Photography'];
console.log(hobbies.length);
