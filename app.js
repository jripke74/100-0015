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

alert(calculateAdultYears(age));

age = 45;
alert(calculateAdultYears(age));
