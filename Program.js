// Description:
//      Write a method that takes in an Object,
//      an action as a String, "edit" or "delete",
//          a property,
//          a newValue.
// The Task is to perform the action.
// If the action is "edit":
    // update the property value in the obj to the newValue.
// If the action is "delete":
    // remove the property from the obj and return the object.
function performAction(obj, action, property, newValue)
{
    if (!obj)
    {
        return obj;
    }

    if (action === "delete")
    {
        delete obj[property];
    }
    else if (action === "edit" && obj[property])
    {
        obj[property] = newValue;
    }
    return obj;
}


// Description:
//      Write a method that takes in a string value called str
//          and reverses the string.      
function reverseString(str)
{
    return str.split('').reverse().join('');
}

// Description:
//      Write a method that takes in a string value called str
//          and checks to see if the argument is
//          a palindrome.
// **** Palindrome: a word that is spelled the same backwards and forwards
// Examples: racecar, madam, level, noon, civic, radar, kayak
function isPalindrome(str)
{
    return str === reverseString(str);
}

// Description:
//      Given an arr of ints,
//          find the max value
function maxValue(myInts)
{
    return Math.max(...myInts);
}

let myObj = {
    name: "Brandon",
    job: "Developer",
    age: 18
};

let testReverseString = "Brandon";
let testReverseString2 = "Brandon is a Developer";

let isPalindromeTest1 = "racecar";
let isPalindromeTest2 = "noon";
let isPalindromeTest3 = "none";

let myIntsForMaxValue = [1,2,3,4,5,10000];
// **********************************
//  Tests for performAction
// **********************************
console.log(performAction(myObj, "edit", "age", 19));
console.log(performAction(myObj, "delete", "age", 19));

// **********************************
//  Tests for reverseString
// **********************************
console.log(reverseString(testReverseString));
console.log(reverseString(testReverseString2));

// **********************************
//  Tests for isPalindrome
// **********************************
console.log(isPalindrome(isPalindromeTest1));
console.log(isPalindrome(isPalindromeTest2));
console.log(isPalindrome(isPalindromeTest3));

// **********************************
//  Tests for maxValue
// **********************************
console.log(maxValue(myIntsForMaxValue));
