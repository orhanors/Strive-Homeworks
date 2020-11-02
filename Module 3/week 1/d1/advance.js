/*

1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const maxChar = function(string){
    
    let matchMap = {}
    let letter;
    let size = 0;
    
    
    for(let char of string){
        if(matchMap[char]){
            matchMap[char] += 1;
        }else{
            matchMap[char] = 1;
        }
    }

    

    for(let property in matchMap){
        if(matchMap[property] > size){
            letter = property
            size = matchMap[property]
        }
    }

    return letter;
}
/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const anagrams = function(string1,string2){
    //Remove non-alphabetic chars and sort
    string1 = sort(string1.replace(/[^\w]/g, '')).toLowerCase()
    string2 = sort(string2.replace(/[^\w]/g, '')).toLowerCase()

    return string1 === string2;
}

const sort = function(str){
    return str.split("").sort().join()
}

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a 
    list containing "inlets".
*/

const anagram2 = function(word,array){
    let matches = []
    for(let i=0;i<array.length;i++){
        
        if(anagrams(word,array[i])){
            matches.push(array[i])
        }
    }
}



/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */


const palindrome = function(word){

    for(let i=0; i<word.length;i++){
        if( word[0] == word[word.length-1]){
            word = word.slice(1,word.length-1)
        }  
    }

    if(word.length == 0 || word.length == 1){
        return true;
    }else{
        return false
    }
}

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = function(number){
    let newNumber = String(number);

    let reversed = newNumber.split("").reverse().join("") // reversed: -500 --> 005- 

    if(reversed[reversed.length-1] == "-"){
        reversed = "-" +reversed.slice(0,reversed.length-1) 
    }
    return Number(reversed)
}

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */


const drawSteps = function(n){

    for(let i=0; i<n;i++){
        console.log("#".repeat(i+1) + " ".repeat(n-1) +"\n")
    }
}

/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

const reverseStr = function(str){
    return str.split("").reverse().join("")
}

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

const chunk = function(array,chunkSize){

    //TODO undefined problem
    let modula = array.length % chunkSize

    let newArray = []

    if(chunkSize > array.length){
        newArray = array
    }else{
        while(array.length !== 0){
            let subArr = []
    
            for(let j=0;j<chunkSize;j++){
               
                subArr.push(array[0])
                array.shift()
            }
            
            newArray.push(subArr)
            subArr = []
        }
    }
    
    return newArray
}

/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'    
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  ' 2i+1 
        ' ### '
        '#####'  
        
*/

const pyramid = function(n){
    for(let i = 0; i<n;i++){
        console.log(" ".repeat((n-i)+1) + "#".repeat(2*i+1) + "\n")
    }
}


/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/


const sypralMatrix = function(n){
    const results = [];
  for (let i = 0; i < n; i++) {
      results.push([]);
    }
  let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
      // Top row
      for (let i = startColumn; i <= endColumn; i++) {
        results[startRow][i] = counter;
        counter++;
      }
      startRow++;
  // Right column
      for (let i = startRow; i <= endRow; i++) {
        results[i][endColumn] = counter;
        counter++;
      }
      endColumn--;
  // Bottom row
      for (let i = endColumn; i >= startColumn; i--) {
        results[endRow][i] = counter;
        counter++;
      }
      endRow--;
  // start column
      for (let i = endRow; i >= startRow; i--) {
        results[i][startColumn] = counter;
        counter++;
      }
      startColumn++;
    }
  return results;
  }
