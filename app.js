let age = 32;
let userName = 'Jeff';
let hobbies = ['Sports', 'Cooking', 'Reading'];
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

console.log('10 + 4 = ' + (10 + 4));
console.log('10 - 4 = ' + (10 - 4));
console.log('10 * 4 = ' + (10 * 4));
console.log('10 / 4 = ' + (10 / 4));
