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

// alert(calculateAdultYears(age));

// age = 45;
// alert(calculateAdultYears(age));

const courseName = '100 days';
const coursePrice = 20;
const courseGoals = ['Master HTML', 'Master CSS', 'Master JavaScript'];

// alert(courseName);
// alert('$' + coursePrice);
// alert(courseGoals);

const course = {
  courseName: '100 days',
  coursePrice: 20,
  courseGoals: ['Master HTML', 'Master CSS', 'Master JavaScript'],
};

// alert(course.courseGoals[1]);
// alert(courseGoals[1]);

function displayAGoal(indexOfGoal) {
  return courseGoals[indexOfGoal];
}

function getListItem(array, arrayIndex) {
  return array[arrayIndex];
}

// alert(displayAGoal(2));
// alert(getListItem(course.courseGoals, 1));

const person = {
  name: 'Doug',
  greet() {
    alert('Hello ' + person.name);
  }
}

person.greet();
