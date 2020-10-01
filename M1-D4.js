/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1, l2) => (l1 + l2) * 2;

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (int1, int2) => int1 === int2 ? (int1 + int2) * 3 : "Values aren't same";


/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = function (number) {
    const absDiff = Math.abs(number - 19);
    const result = (absDiff > 19) ? (absDiff * 3) : absDiff;
    return result;
}


/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = N => (20 <= N <= 200 || N === 400) ? true : false;



/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivift = S => (S.toLowerCase() === "Strive".toLowerCase()) ? S : "Strive" + S


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = N => (N % 3 === 0 || N % 7 === 0) ? true : false;



/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = S => S.split("").reverse().join("");



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = function (S) {
    const splittedString = S.split(" ");

    for (let i = 0; i < splittedString.length; i++) {

        splittedString[i] = splittedString[i].charAt(0).toUpperCase() + splittedString[i].substring(1);
    }
    return splittedString.join(" ")
}

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = S => S.slice(1, S.length - 1)


/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = function (n) {

    n = n > 10 ? 10 : n

    const newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(Math.floor(Math.random() * Math.floor(n)))
    }
    return newArr
}


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/