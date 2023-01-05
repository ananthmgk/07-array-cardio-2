const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older? returns a boolean.
// Array.prototype.every() // is everyone 19 or older? returns a boolean.

// Array.prototype.find()
// Find is like filter, but instead returns just the one, which it finds the first element.
// find the comment with the ID of 823423

// Array.prototype.findIndex(), it retruns the only one index of which it finds the first element.
// Find the comment with this ID
// delete the comment with the ID of 823423

const date = new Date();
const currentYear = date.getFullYear();
const age = people.some((person) => {
  const age1 = currentYear - person.year;
  if (age1 >= 19) {
    return true;
  }
}); // => true

const anyOneAdult = people.some((person) => currentYear - person.year >= 19); // => true

const allIsAdults = people.every((person) => currentYear - person.year >= 19); // => false

const findComments = comments.find((comnt) => comnt.id === 823423); // => { text: 'Super good', id: 823423 }

const findIndex = comments.findIndex((comnt) => comnt.id === 823423); // => 1;

const commentsCopy = comments.slice(0);

const deleteComments = commentsCopy.splice(findIndex, 1);

console.log(commentsCopy);
