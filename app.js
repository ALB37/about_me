'use strict';

var userName = prompt('Thanks for checking out my "About Me" page. What\'s your name?');
console.log('User\'s name is ' + userName);

alert('Hi, ' + userName + ', nice to meet you. See if you can guess some things about me.');


// question 1
var answer1 = prompt('Do I have 2 cats?').toLowerCase();
console.log('The user\'s first answer is ' + answer1 + '. The correct answer is yes.');
if ((answer1 === 'y') || (answer1 === 'yes')) {
  // Tell the user they got the correct answer
  alert('That\'s right!');
} else {
  // Tell the user they got the wrong answer
  alert('Actually, I do!');
}


// question 2
var answer2 = prompt('Do I have a son?').toLowerCase();
console.log('The user\'s second answer is ' + answer2 + '. The correct answer is no.');
if ((answer2 === 'n') || (answer2 === 'no')) {
  alert('Correct, I do have a daughter though! Her name is Aurora and she is 2.');
} else {
  alert('Nope, but I do have a daughter.');
}


// question 3
var answer3 = prompt('Was I born in Seattle?').toLowerCase();
console.log('The user\'s third answer is ' + answer3 + '. The correct answer is no.');
if ((answer3 === 'n') || (answer3 === 'no')) {
  alert('That\'s right! I was born in New Orleans.');
} else {
  alert('Actually, I was born in New Orleans.');
}


// question 4
var answer4 = prompt('Am I interested in analog photography?').toLowerCase();
console.log('The user\'s fourth answer is ' + answer4 + '. The correct answer is yes.');
if ((answer4 === 'y') || (answer4 === 'yes')) {
  alert('You betcha! I love shooting some film. Also like shooting digital too though! I love all sorts of photography.');
} else {
  alert('Actually, I think film is a really cool medium. The chemistry of photography is fascinating.');
}


// question 5
var answer5 = prompt('Do I have an interest in synthesizers?').toLowerCase();
console.log('The user\'s fifth answer is ' + answer5 + '. The correct answer is yes.');
if ((answer5 === 'y') || (answer5 === 'yes')) {
  alert('Totally! Synthesizers are the coolest. I\'d love to build a modular system someday.');
} else {
  alert('But I do!');
}
