/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/
const movies = [{
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/
const test = "This is a String";
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

const sum = function () {
  let total = 0;
  for (let i = 10; i <= 20; i++) {
    total += i;
  }
  return ("Sum of the numbers [10,20]: " + total);
}


/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

const random = Math.floor(Math.random() * 20);


/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

const Me = {
  name: "Orhan",
  surname: "Örs",
  age: 24,
};

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.age;


/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me["skills"] = ["Java", "Python", "SQL"];



/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

Me.skills = Me.skills.slice(0, Me.skills.length - 1);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

const Dice = function () {
  return Math.floor(Math.random() * (6 - 1) + 1);
}
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

const WhoIsBıgger = (n1, n2) => (n1 >= n2) ? n1 : n2;

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const SplitMe = S => S.split(" ");


/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

const DeleteOne = (S, bool) => (bool === true) ? S.slice(1) : S.slice(0, S.length - 1);



/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const OnlyLetters = function (string) {
  let newString = "";
  for (let el of string) {
    if (isNaN(Number(el)) || Number(el) === 0) {
      newString += el
    }
  }
  return newString;
}



/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const IsThisAnEmail = function (string) {
  const isMail = (string.includes("@") && string.includes(".com") && string.indexOf("@") < string.indexOf(".com")) ? true : false
  return isMail;
}

/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

const WhatDayIsIt = function () {
  let date = new Date();
  var day = date.getDay();
  return (day + "th day of week");
}


/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const RollTheDices = function (size) {
  let i = 0;
  let total = 0;
  let arr = [];
  let obj = {};
  while (i < size) {
    arr.push(Dice());
    i++;
  }
  for (let k = 0; k < arr.length; k++) {
    total += arr[k];
  }
  obj.sum = total;
  obj.values = arr;
  return obj;
}
/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

const HowManyDays = function (date) { // Please try with (DD.MM.YYYY)
  let day = Number(date.slice(0, 2));
  let month = Number(date.slice(3, 5));
  let year = Number(date.slice(6));

  const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let totalDays = 0;
  for (let i = 0; i < month; i++) {
    totalDays += daysOfMonths[i];
  }
  totalDays += day;
  return totalDays;

}

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

const IsTodayMyDay = function () {
  const myDay = 11;
  const myMonth = 6;

  const date = new Date();
  let currentDay = date.getDate()
  let currentMonth = date.getMonth() + 1;

  return (myDay == currentDay && myMonth == currentMonth) ? true : false

}

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

const DeleteProp = function (obj, str) {

  delete obj[str];
  return obj;
}

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

const OlderMovie = function () {

  let older = {};
  for (let el of movies) {
    if (el.Year <= 2005) {
      older.push(el);
    }
  }
  return older;
}

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

const CountMovies = function () {
  return movies.length;
}

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

const OnlyTitles = function () {
  let movieTitles = [];
  for (let el of movies) {
    movieTitles.push(el.Title);
  }
  return movieTitles;
}
/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

const OnlyThisMillennium = function () {
  let millenniumMovies = [];
  for (let el of movies) {
    if (el.Year >= 2000) {
      millenniumMovies.push(el);
    }
  }
  return millenniumMovies;
}

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

const GetMovieById = function (id) {

  let result;
  for (let el of movies) {
    result = (el.imdbID == id) ? el : "Invalid ID";
    if (result == el) {
      break;
    }

  }
  return result;
}


/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

const SumYears = function () {
  let total = 0;
  for (let el of movies) {
    total += Number(el.Year);
  }
  return ("Sum of the years the movie has been produced is --> " + total)
}


/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

const SearchMovie = function (S) {
  let movieSearh = [];
  for (let el of movies) {
    if (el["Title"].search(S) !== -1) { // string.search returns -1 if no match
      movieSearh.push(el.Title);
    }
  }
  return movieSearh;
}

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

const SearchAndDivide = function (S) {
  let matched = SearchMovie(S);
  let non_match = [];
  for (let el of movies) {
    if (!(matched.includes(el.Title))) {
      non_match.push(el.Title);
    }
  }
  return ["----Matched----", ...matched, "----Non-matced----", ...non_match]
}



/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

const DeleteX = function (index) {
  return movies.slice(0, index).concat(movies.slice(index + 1))
}



// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

const halfTree = function (n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *   
   *** 
  *****
*/
//SOLUTION
/*
n=4
     *   --> 0, 3space 1star
    ***  --> 1, 2space 3star
   ***** --> 2, 1space 5star
  ******* -> 3, 0space 7star

  space = (n-index-1)
  star = (2*index+1)

*/

const tree = function (n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
}

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

const isItPrime = function (number) {

  let result;

  if (number <= 1) {
    result = "'Zero' or 'negative numbers' or 'one' can't be prime";
  } else if (number === 2) {
    result = true;
  } else {
    for (let i = 2; i < number; i++) {
      result = (number % i === 0) ? false : true
      if (!result) {
        break;
      }
    }
  }
  return result;
}