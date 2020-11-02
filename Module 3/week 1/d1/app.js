/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const sumSpecial = function(int1,int2){
    if(int1 === int2){
        return 3*(int1+int2)
    }else{
        return (int1+int2)
    }
}

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkNums = function(n1,n2){
    if(n1 === 50 || n2 === 50 || (n1+n2) === 50){
        return true
    }else{
        return false
    }
}

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = function(string,index){
    return string.slice(0,index) + string.slice(index+1)
}

/*
4)
 Create a function to find the largest of three given integers.
*/

const largest = function(n1,n2,n3){

    let max = 0;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i] > max){
            max = arguments[i]
        }
    }
    return max;
}

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = function(n1,n2){
    if(40<= n1,n2 <= 60 || 70<= n1,n2 <= 100){
        return true
    }else{
        return false
    }
}

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const newString = function(string,start,end){
    return string.slice(start,end)
}


/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const showCity = function(city){
    if(city.slice(0,3).toLowerCase() === "los".toLowerCase() || city.slice(0,3).toLowerCase() === "new".toLowerCase()){
        return city
    }else{
        return " "
    }
}

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const calcThree = function(array){
    let sum = 0;
    if(array.length ==3){
        for(let i=0;i<array.length;i++){
            sum+=array[i]
        }
        return sum
    }else {
        return "array length must be 3"
    }
   
}

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const contains1or3 = function(array){
    if(array.length == 2 ){
        let contains = false;
        for(let i = 0;i<array.length;i++){
            contains = array[i] == 1 || array[i] == 3 ? true:false
        }
    }else{
        return "array length must be 2"
    }
}

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

const notContains1or3 = function(array){
    if(array.length == 2 ){
        let notContains = false;
        for(let i = 0;i<array.length;i++){
            notContains = array[i] == 1 || array[i] == 3 ? false:true
        }
    }else{
        return "array length must be 2"
    }
}

/*11)
Create a function to find the longest string from a given array of strings.
*/

const longestString = function(array){
    let longest = array[0]

    for(let str of array){
        if(str.length > longest.length){
            longest = str
        }
    }
    return longest;
}

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

*/

const angleType = function(angle){
    let type;
    if(0 < angle && angle < 90){
        type = "Acute angle"
    }else if (angle === 90){
        type = "Right angle"
    }else if( 90 < angle && angle<180){
        type = "Btuse angle"
    }else if(angle === 180){
        type = "Straight"
    }
    return type
}
/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/

const findGreatestIndex = function(array){
    let gratest = 0;
    for(let el of array){
        if(el > gratest){
            gratest = el
        }
    }
    return array.indexOf(gratest)
}

/*
14)
Create a function to get the largest even number from an array of integers.

*/

const largestEvenNumber = function(array){

    let largestEven = 0;

    for(let el of array){
        if(el>largest && el%2==0){
            largestEven = el;
        }
    }
    return largestEven;
}
/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkTwoNum = function(n1,n2){
    let situation = false;
    if((n1 === 50 && n2 !== 50 || n2 === 50 && n1 !== 50) || (n1+n2)=== 50){ 
        situation = true;
    }

    return situation;
}
/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/

const checkPosOrNeg = function(n1,n2){
    if((n1 > 0 && n2 <0) || (n2 > 0 && n1 <0) ){
        return true;
    }

    return false;
}

/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. 
If the string length is less than 3 convert all the characters in upper case. 
*/

const shuffleCaseString = function(string){
    return string.length > 3 ? string.slice(0,3).toLowerCase() + string.slice(3).toUpperCase(): string.toUpperCase()
}
/*
18)
Create a function to calculate the sum of the two given integers, 
If the sum is in the range 50..80 return 65 other wise return 80.
*/

const calcTwoNumFuck = function(n1,n2){

    let sum = n1+n2;

    if( (50<sum && sum <80 )){
        return 65
    }
    return 80
}
/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const generateStringfromFactors = function(number){
    let output = ""
    let otherConditionsFailed = true;
    if(number % 3 == 0){
        output += "Diego"
        otherConditionsFailed = false;
    }if(number % 5 == 0){
        output += "Riccardo"
        otherConditionsFailed = false;
    }if(number % 7 == 0){
        output +="Stefano"
        otherConditionsFailed = false;
    }if(otherConditionsFailed){
        output = String(number)
    }
    return output
}


/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/


const acronym = function(string){
    let acronym = ""
    acronym += string[0].toUpperCase()
    for(let i = 1 ;i<string.length;i++){

        if (string[i] == " "){
            acronym += string[i+1].toUpperCase()
        }
    }
    return acronym
}