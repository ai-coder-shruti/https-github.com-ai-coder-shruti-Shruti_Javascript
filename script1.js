//Ternary Operator:
//1. Even/Odd check using ternary operator
let num = Number(prompt("Enter a number:"));
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(num + " is " + result);
//2.Check whether a user is eligible to vote or not
let age = Number(prompt("Enter your age:"));
let eligible = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(eligible);
//3.Print greater number
let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));
let greater = (a > b) ? a : b;
console.log("Greater number is: " + greater);
//4.check the number is divisible by 5
let num5 = Number(prompt("Enter a number:"));
let divBy5 = (num5 % 5 === 0) ? "Divisible by 5" : "Not divisible by 5";
console.log(num5 + " is " + divBy5);
//5.Take char input and check whether its vowei or consonant
let ch = prompt("Enter a character:").toLowerCase();
let type = (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") ? "Vowel" : "Consonant";
console.log(ch + " is " + type);

//Nested if else:
//1.Take a number and check if its positive,negative or zero
let numCheck = Number(prompt("Enter a number:"));
if (!isNaN(numCheck)) {
    if (numCheck > 0) {
        console.log(numCheck + " is positive");
    } else {
        if (numCheck < 0) {
            console.log(numCheck + " is negative");
        } else {
            console.log(numCheck + " is zero");
        }
    }
} else {
    console.log("Invalid input");
}
//2.print the largest number
let n1 = Number(prompt("Enter first number:"));
let n2 = Number(prompt("Enter second number:"));
let n3 = Number(prompt("Enter third number:"));
let largest;
if (n1 >= n2) {
    if (n1 >= n3) {
        largest = n1;
    } else {
        largest = n3;
    }
} else {
    if (n2 >= n3) {
        largest = n2;
    } else {
        largest = n3;
    }
}
console.log("Largest number is: " + largest);
//3.Check if it is a letter .if yes,check its divisible by 4
let inputChar = prompt("Enter a character:");
if (inputChar && inputChar.length === 1) {
    let code = inputChar.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        // It's a letter
        if (code % 4 === 0) {
            console.log(inputChar + " is a letter and its char code is divisible by 4");
        } else {
            console.log(inputChar + " is a letter but its char code is not divisible by 4");
        }
    } else {
        console.log(inputChar + " is not a letter");
    }
} else {
    console.log("Invalid input");
}
//4.Check if its even.if yes,check if its divisible by 4
let numEven = Number(prompt("Enter a number:"));
if (!isNaN(numEven)) {
    if (numEven % 2 === 0) {
        if (numEven % 4 === 0) {
            console.log(numEven + " is even and divisible by 4");
        } else {
            console.log(numEven + " is even but not divisible by 4");
        }
    } else {
        console.log(numEven + " is odd");
    }
} else {
    console.log("Invalid input");
}
//5.Take marks of 3 subject and print grade
let mark1 = Number(prompt("Enter marks for subject 1:"));
let mark2 = Number(prompt("Enter marks for subject 2:"));
let mark3 = Number(prompt("Enter marks for subject 3:"));
let avgMark = (mark1 + mark2 + mark3) / 3;
let grade;
if (avgMark >= 90) {
    grade = "A";
} else {
    if (avgMark >= 75) {
        grade = "B";
    } else {
        if (avgMark >= 50) {
            grade = "C";
        } else {
            grade = "Fail";
        }
    }
}
console.log("Average marks: " + avgMark + ", Grade: " + grade);


//else if Ladder
//1.Input the day number (17),print the corresponding day name
let dayNum = Number(prompt("Enter day number (1-7):"));
if (dayNum === 1) {
    console.log("Sunday");
} else if (dayNum === 2) {
    console.log("Monday");
} else if (dayNum === 3) {
    console.log("Tuesday");
} else if (dayNum === 4) {
    console.log("Wednesday");
} else if (dayNum === 5) {
    console.log("Thursday");
} else if (dayNum === 6) {
    console.log("Friday");
} else if (dayNum === 7) {
    console.log("Saturday");
} else {
    console.log("Invalid day number");
}
//2.input marks(0100),assign:A,B,C,D or F 
let marks = Number(prompt("Enter marks (0-100):"));
let grade2;
if (marks >= 90) {
    grade2 = "A";
} else if (marks >= 80) {
    grade2 = "B";
} else if (marks >= 70) {
    grade2 = "C";
} else if (marks >= 60) {
    grade2 = "D";
} else {
    grade2 = "F";
}
console.log("Grade: " + grade2);
//3.input month no (112),print the no of days in that month
let month = Number(prompt("Enter month number (1-12):"));
if (month === 1) {
    console.log("31 days");
} else if (month === 2) {
    console.log("28 or 29 days");
} else if (month === 3) {
    console.log("31 days");
} else if (month === 4) {
    console.log("30 days");
} else if (month === 5) {
    console.log("31 days");
} else if (month === 6) {
    console.log("30 days");
} else if (month === 7) {
    console.log("31 days");
} else if (month === 8) {
    console.log("31 days");
} else if (month === 9) {
    console.log("30 days");
} else if (month === 10) {
    console.log("31 days");
} else if (month === 11) {
    console.log("30 days");
} else if (month === 12) {
    console.log("31 days");
} else {
    console.log("Invalid month number");
}
//4.input temperature and display msg :Very hot(>=40),hot(>=30),warm(>=20),cold(>=10),very cold(<=10)
let temp = Number(prompt("Enter temperature:"));
if (temp >= 40) {
    console.log("Very hot");
} else if (temp >= 30) {
    console.log("Hot");
} else if (temp >= 20) {
    console.log("Warm");
} else if (temp >= 10) {
    console.log("Cold");
} else {
    console.log("Very cold");
}
//5.input a number and check:if divisible by 2 and 3,only 2,only 3,or neither
let numDiv = Number(prompt("Enter a number:"));
if (numDiv % 2 === 0 && numDiv % 3 === 0) {
    console.log("Divisible by both 2 and 3");
} else if (numDiv % 2 === 0) {
    console.log("Divisible by 2 only");
} else if (numDiv % 3 === 0) {
    console.log("Divisible by 3 only");
} else {
    console.log("Not divisible by 2 or 3");
}
