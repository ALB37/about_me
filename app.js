'use strict';

// Global Variables
var totalRight = 0;
var userName = '';
var ans = '';

// Greeting

function user() {
  userName = prompt('Thanks for checking out my "About Me" page. What\'s your name?');
  console.log('User\'s name is ' + userName);
  alert('Hi, ' + userName + ', nice to meet you. See if you can guess some things about me.');
}
user();



// Questions 1-5: The Yes/No Questions

function game1(){
  var qArr = ['Do I have 2 cats?',
    'Do I have a son?',
    'Was I born in Seattle?',
    'Am I interested in analog photography?',
    'Do I have an interest in synthesizers?'];

  var aArr = ['y', 'n', 'n', 'y', 'y'];

  var cRArr = ['That\'s right!',
    'Correct, I do have a daughter though! Her name is Aurora and she is 2.',
    'That\'s right! I was born in New Orleans.',
    'You betcha! I love shooting some film. Also like shooting digital too though! I love all sorts of photography.',
    'Totally! Synthesizers are the coolest. I\'d love to build a modular system someday.'];

  var iRArr = ['Actually, I do!',
    'I don\'t, but I do have a daughter.',
    'Actually, I was born in New Orleans.',
    'Actually, I think film is a really cool medium. The chemistry of photography is fascinating.',
    'But I do!'];

  // Input Validation for Y/N Questions

  var possAns = ['y', 'yes', 'n', 'no'];

  function inputVal(){
    if (possAns.indexOf(ans) === -1){
      alert('Please give me a simple yes or no!');
      ans = prompt(qArr[i]).toLowerCase();
      inputVal(ans);
      // console.log('this is the value of ans for question ' + (i + 1) + ': ' + ans);
    }
  }

  // Loop which runs through questions 1-5

  for (var i = 0; i < qArr.length; i++){
    ans = prompt(qArr[i]).toLowerCase();
    inputVal();
    console.log('user answer number ' + (i + 1) + ' is ' + ans);
    if (ans === 'yes'){
      ans = 'y';
      // console.log('changed a "yes" to a "y"');
    }
    if (ans === 'no'){
      ans = 'n';
    }
    if (ans === aArr[i]) {
      alert(cRArr[i]);
      totalRight++;
      console.log('user answered question ' + (i + 1) + ' correctly.');
    } else {
      alert(iRArr[i]);
      console.log('question ' + (i + 1) + ' triggered an else; i.e. wrong answer');
    }
  }
}

// Question 6

function game2() {
  alert('Let\'s play a number guessing game!');
  var attemptNum = 1;
  while (attemptNum < 6) {
    var answer6 = parseInt(prompt('I\'m going to give you 5 tries to guess how many years I lived in New Orleans before moving to Washington. \nPick a number.'));
    console.log('The user\'s question 6 guess #' + attemptNum + ' is ' + answer6);
    if (answer6.toString() === 'NaN') {
      alert('Come on, gimme a number, not that garbage! I\'m dinging you a guess for that.');
      attemptNum++;
    } else if (answer6 < 13) {
      alert('I lived there longer than that! You have ' + (5 - attemptNum) + ' guess(es) left.');
      attemptNum++;
    } else if (answer6 > 13) {
      alert('No, I didn\'t live there that long. You have ' + (5 - attemptNum) + ' guess(es) left.');
      attemptNum++;
    } else {
      alert('That\'s right! I lived in New Orleans for 13 years. You guessed in only ' + attemptNum + ' attempt(s). Good job!');
      attemptNum += 10;
    }
  }
  if (attemptNum > 10) {
    alert('You Win!');
    console.log('The user guessed question 6 correctly in ' + (attemptNum - 10) + ' attempt(s).' );
    totalRight++;
  } else {
    alert('You Lose. :\'( I lived in New Orleans for 13 years.');
    console.log('The user failed to guess question 6 correctly.');
  }
}
// question6();


// Question 7

function game3() {
  var ansArr = ['holland', 'the netherlands', 'netherlands', 'belgium', 'france'];
  var guessNum = 1;
  var solved = false;
  alert('Let\'s play another game. I\'m going to give you 6 chances to guess the following question:');
  while (guessNum < 7) {
    var answer7 = prompt('Can you guess a country I have visited outside of North America?').toLowerCase();
    console.log('The user\'s question 7 guess #' + guessNum + ' is ' + answer7);
    for (var i = 0; i < ansArr.length; i++) {
      var q = ansArr[i];
      if (q === answer7) {
        alert('You guessed correctly! And you did it in only ' + guessNum + ' guess(es)!');
        guessNum += 10;
        solved = true;
      }
    }
    if (solved === false) {
      alert('Nice try, but I\'ve never been there before. You have ' + (6 - guessNum) + ' guess(es) left.');
      guessNum++;
    }
  }
  if (guessNum > 10) {
    alert('You win! I\'ve visited The Netherlands, Belgium and France.');
    console.log('User guessed question 7 correctly in ' + (guessNum - 10) + ' guess(es).');
    totalRight++;
  } else {
    alert('Bummer, you lost. I\'ve been to The Netherlands, Belgium and France.');
    console.log('The user failed to guess question 7 correctly.');
  }
}
// question7();



// Call each of the game functions with one for loop:

for (var qNum = 1; qNum < 4; qNum++) {
  eval('game' + qNum + '()');
}


// Declaration of total right answers

function declaration(){
  alert('Of all 7 questions I asked, you got ' + totalRight + ' questions correct.');
  if (totalRight === 7) {
    alert('Wow, you got all the answers correct! Hmm, ' + userName + '... do I know you?');
  }
}
declaration();


//OLD CODE


// question 1
// function question1() {
//   var answer1 = prompt('Do I have 2 cats?').toLowerCase();
//   console.log('The user\'s first answer is ' + answer1 + '. The correct answer is yes.');
//   if ((answer1 === 'y') || (answer1 === 'yes')) {
//     // Tell the user they got the correct answer
//     alert('That\'s right!');
//     totalRight++;
//   } else {
//     // Tell the user they got the wrong answer
//     alert('Actually, I do!');
//   }
// }
// //question1();
//
//
// // question 2
// function question2() {
//   var answer2 = prompt('Do I have a son?').toLowerCase();
//   console.log('The user\'s second answer is ' + answer2 + '. The correct answer is no.');
//   if ((answer2 === 'n') || (answer2 === 'no')) {
//     alert('Correct, I do have a daughter though! Her name is Aurora and she is 2.');
//     totalRight++;
//   } else {
//     alert('Nope, but I do have a daughter.');
//   }
// }
// //question2();
//
//
// // question 3
// function question3() {
//   var answer3 = prompt('Was I born in Seattle?').toLowerCase();
//   console.log('The user\'s third answer is ' + answer3 + '. The correct answer is no.');
//   if ((answer3 === 'n') || (answer3 === 'no')) {
//     alert('That\'s right! I was born in New Orleans.');
//     totalRight++;
//   } else {
//     alert('Actually, I was born in New Orleans.');
//   }
// }
// //question3();
//
//
// // question 4
// function question4() {
//   var answer4 = prompt('Am I interested in analog photography?').toLowerCase();
//   console.log('The user\'s fourth answer is ' + answer4 + '. The correct answer is yes.');
//   if ((answer4 === 'y') || (answer4 === 'yes')) {
//     alert('You betcha! I love shooting some film. Also like shooting digital too though! I love all sorts of photography.');
//     totalRight++;
//   } else {
//     alert('Actually, I think film is a really cool medium. The chemistry of photography is fascinating.');
//   }
// }
// //question4();
//
//
// // question 5
// function question5() {
//   var answer5 = prompt('Do I have an interest in synthesizers?').toLowerCase();
//   console.log('The user\'s fifth answer is ' + answer5 + '. The correct answer is yes.');
//   if ((answer5 === 'y') || (answer5 === 'yes')) {
//     alert('Totally! Synthesizers are the coolest. I\'d love to build a modular system someday.');
//     totalRight++;
//   } else {
//     alert('But I do!');
//   }
// }
// //question5();
