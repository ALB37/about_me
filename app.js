'use strict';
// Your JS file contains a 'use strict' declaration at the top. Always.
// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
// Use CSS to style your page as you see fit, to the level of abilities in CSS that you currently have
// Add, Commit, Push process is being followed; it is evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

var userName = prompt('Thanks for checking out my "About Me" page. What\'s your name?');
console.log('User\'s name is ' + userName);

alert('Hi, ' + userName + ', nice to meet you. See if you can guess some things about me.');



//question 1
var answer1 = prompt('Do I have 2 cats?').toLowerCase();
console.log('Answer 1 is ' + answer1);
if ((answer1 !== 'y') || (answer1 !== 'yes') || (answer1 !== 'n') || (answer1 !== 'no')) {
  // Ask the user to provide a yes or no answer
  alert('Come on, a simple yes or no will suffice!');
  answer1 = prompt('Do I have 2 cats?').toLowerCase();
  console.log('User changed answer 1 to ' + answer1);
}
if ((answer1 === 'y') || (answer1 === 'yes')) {
  // Tell the user they got the correct answer
  alert('That\'s right!');
} else {
  // Tell the user they got the wrong answer
  alert('Actually, I do!');
}



var answer2 = prompt('Do I have a son?').toLowerCase();
console.log('Answer 2 is ' + answer2);
if ((answer2 !== 'y') || (answer2 !== 'yes') || (answer2 !== 'n') || (answer2 !== 'no')) {
  alert('Come on, a simple yes or no will suffice!');
  answer2 = prompt('Do I have a son?').toLowerCase();
  console.log('User changed answer 2 to ' + answer2);
}
if ((answer2 === 'n') || (answer2 === 'no')) {
  alert('Correct, I do have a daughter though! Her name is Aurora and she is 2.');
} else {
  alert('Nope, but I do have a daughter.');
}



var answer3 = prompt('Was I born in Seattle?').toLowerCase();
console.log('Answer 3 is ' + answer3);
if ((answer3 !== 'y') || (answer3 !== 'yes') || (answer3 !== 'n') || (answer3 !== 'no')) {
  alert('Come on, a simple yes or no will suffice!');
  answer3 = prompt('Was I born in Seattle?').toLowerCase();
  console.log('User changed answer 1 to ' + answer3);
}
if ((answer3 === 'n') || (answer3 === 'no')) {
  alert('That\'s right! I was born in New Orleans.');
} else {
  alert('Actually, I was born in New Orleans.');
}
