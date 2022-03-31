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

const titleCased = () => {
  //Return new array from tutorials
  return tutorials.map(title => {
    //For each of the title, we create another array of words
    const words = title.split(' ');
    //Return new array from words array where beginning of words are uppercase
    const capitalizedWords =
      words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    //Combine capitalizedWords array as one string
    const newTitle = capitalizedWords.join(' ');
    //return the title
    return newTitle;
  });
}