let age = 32;
let userName = 'Jeff';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = {
  title: 'Developer',
  place: 'New York',
  salary: 120000,
};

function adultYears(age) {
  return age - 18;
}

alert(adultYears(age));

age = 45;
alert(adultYears(age));
