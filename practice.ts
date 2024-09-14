// 1. Write a code to display the multiplication table of a given integer.
let multiply : number = 9;
for(let i = 1; i <= 10; i++){
    console.log(`${multiply} X ${i} = ${multiply*i}`);
}


// 2. Write a code to check whether a string is a palindrome or not.
let str:string ="guy";
let newString = "";
let palindrome;

for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]; //or str.charAt(i)
    console.log(newString);
}
console.log(newString);

if(newString === str){
    palindrome = `Given string is palindrome`;
}else{
    palindrome = `Given string is not palindrome`;
}
console.log(palindrome);


// Another Way
let _string: string = "oko";
console.log(_string.split("").reverse().join(""));
let _reverseString: string = _string.split("").reverse().join("");
console.log(_string === _reverseString ? "palindrome" : "not plaindrome");

// Another Way
let _hasilPalindrome = "Palindrome";
for(let i = 0; i < _string.length / 2; i++){
    console.log(_string[i]);
    console.log(_string[_string.length -1 - i]);
    if(_string[i] !== _string[_string.length -1 -i]){
        _hasilPalindrome = "Bukan Palindrome";
        break;
    }
}

console.log(_hasilPalindrome);



// 3. Write a code to convert centimeter to kilometer.
let cm:number = 100000;
let km = cm / 100000;
console.log(km);


// 4. Write a code to format number as currency

// Add thousands separator
const number:number = 25000000;
const formattedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const back:string = ",00";
const symbol:string = "Rp "; 

// Format the number as a currency string
console.log(`${symbol}${formattedNumber}${back}`);

// Another Way
const harga: number = 1000;
const numberToCurrency = harga.toLocaleString("in-ID",{
    style: "currency",
    currency: "IDR",
});
console.log(numberToCurrency);


// 5. Write a code to remove the first occurrence of a given “search string” from a string
const _strong: string = "Hello World";
const searchStrong: string = "H";

console.log(_strong.replace(searchStrong, ""));

// Another Way

// Define a function called remove_first_occurrence which takes two parameters: str (the main string) and searchstr (the substring to be removed)
function remove_first_occurrence(str:string, searchstr: string) {
    // Find the index of the first occurrence of searchstr within str
    var index = str.indexOf(searchstr);
    // If searchstr is not found in str, return str as it is
    if (index === -1) {
        return str;
    }
    // If searchstr is found in str, return a new string that concatenates the substring before the first occurrence of searchstr with the substring after searchstr
    return str.slice(0, index) + str.slice(index + searchstr.length);
}

// Call the remove_first_occurrence function with a sample input and log the result to the console
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));


// 6. Write a code to capitalize the first letter of each word in a string
let title:string = "hello world"
const splitStr = title.toLowerCase().split(' ');

for (let i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
}

// Directly return the joined string
const reults = splitStr.join(' '); 
console.log(reults);


// 7. Write a code to swap the case of each character from string 
let strings = 'The QuIcK BrOwN FoX';
let splits = strings.split("");
for (let i = 0; i < splits.length; i++) {
    if (splits[i] === splits[i].toUpperCase()) {
        splits[i] = splits[i].toLowerCase();
    } else  {
        splits[i] = splits[i].toUpperCase();
    }
}
strings = splits.join("");
console.log(strings);

// 8. Write a code to find the largest of two given integers
let int1 = 5;
let int2 = 10;

if (int1 == int2) {
    console.log('Numbers are the same')
} else if (int1 >= int2) {
    console.log(`${int1} is larger than ${int2}`)
} else {
    console.log(`${int2} is larger than ${int1}`)
}

// 9. Write a conditional statement to sort three numbers
let num1 = 11;
let num2 = 10;
let num3 = 10;

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log(`${num3}, ${num2}, ${num1}`)
    } else {
        console.log(`${num2}, ${num3}, ${num1}`)
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log(`${num3}, ${num1}, ${num2}`)
    } else {
        console.log(`${num1}, ${num3}, ${num2}`)
    }
} else if (num3 <= num1 && num3 <= num2) {
    if (num1 <= num2) {
        console.log(`${num2}, ${num1}, ${num3}`)
    } else {
        console.log(`${num1}, ${num2}, ${num3}`)   
    }
}

// 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
let input = 0;
if (typeof input == 'string') {
    console.log(1)
} else if (typeof input == 'number') {
    console.log(2)
} else {
    console.log(3)
}


// 11. Write a code to change every letter a into * from a string of input
let sentence = 'An apple a day keeps the doctors away';
let splitSentence = sentence.split("");
for (let i = 0; i < splitSentence.length; i++) {
    if (splitSentence[i].toLowerCase() == 'a') {
        splitSentence[i] = '*'
    }
}
sentence = splitSentence.join("");
console.log(sentence);