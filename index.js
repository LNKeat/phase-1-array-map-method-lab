const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//take each title and split into array of words
//run nested arrays through fxn to capitize first letter
const titleCased = () => {
  const nestedTitles = tutorials.map(ele => ele.split(' '));
  return nestedTitles.map(titleArr => capitilizeTitle(titleArr));
}

// const titleCased(tutorials){
//   const nestedTitles = tutorials.map(ele => ele.split(' '));
//   return nestedTitles.map(titleArr => capitilizeTitle(titleArr));
//   }


// fxn to capitlize 1st letter, concat rest of word & join to single title
function capitilizeTitle(titleArr) {
  const newTitle = titleArr.map(ele => ele[0].toUpperCase() + ele.slice(1));
  return newTitle.join(' ');
}
