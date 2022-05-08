// var myName ='payal matale'; //datatypae string
// var myAge =24; //datatypae number
// var iAmThapa =true; //datatype boolean
// var _myAge ="25";
// var 1myAge ="24"; this is not proper (invalid)ie error show
// var _1my_Age ="26";
// var $myAge ="27";
// console.log(iAmThapa)
//type ofoperator
// console.log(typeof(iAmThapa));


//10+"20"
// console.log(10+"20")

// 9-"5"
// console.log(9-"5")//bug
// "Java"+ "Script"
// console.log("Java"+ "Script")
// " "+ " "
// console.log(" "+ " ")
// " "+0
// console.log(" "+0)
// " payal " - "matale"
// console.log(" payal " - "matale")
// true+true
// console.log(true+true)
// true+false
// console.log(true+false)
// false+true
// console.log(false+true)
// false-true
// console.log(false-true)
// true-false
// console.log(true-false)




// 1)interview question
//null vs undefined
// var iAmUseless=null;
// console.log(iAmUseless)
// console.log(typeof(iAmUseless)); //bug because typeof is object

// var iAmStandBy;
// console.log(iAmStandBy)
// console.log(typeof(iAmStandBy));

// 2)interview question
//  what is NaN:- NaN is Property of the global object
// In other words , it is a variable in global scope 
// the initialvalue of NaN is not-A-Number 

// var myPhoneNumber= 6321588961;
// var myName ="payal matale";
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));
// if(isNaN(myName)){
//     console.log("plz enter valid name")
// }



//  Challenge Time
// NaN === NaN ;
// console.log(NaN === NaN );//false

// Number.NaN ===NaN ;
// console.log(Number.NaN ===NaN);//false

// isNaN (NaN );
// console.log(isNaN (NaN ));//true

// isNaN (Number.NaN );
// console.log(isNaN (Number.NaN ));//true

// Number.isNaN (NaN );
// console.log(Number.isNaN (NaN ));//true


// 3)Expressions And Operators
// console.log(5+20)

// Assignment Operator: 
// An assignment operator assigns a value to its left operand
// based on the value of its right operand.
// the simple assignment operator is equal(=) 

// var x=5;
// var y=5;
// console.log("is both the x and y are equal or not "+ x == y);

// i will you when we will  see e56
// console.log(`is both the x and y are equal :${x==y}`);

// Arithmetic operator 
// An arithmetic operator takes numerical values
// (either literals or variables) as their operands and 
// returns a single numerical value


// console.log (3+3);
// console.log (10-5);
// console.log (20/5);
// console.log (5*6);
// console.log ("Remainder operator"+27%4);


// Increment and Decrement operator

// operator:x++ or ++x or x-- or --x
// ifused postfix, with operator after operand (for example, x++ )
// the increment operator increment and returns the value before incrementing.
// var num = 15;
// console.log(num );
// var newNum=num++  +5;
// console.log(newNum);

// if used prefix, with operator before operand (for example,++x )
// the increment operator increment and returns the value  after incrementing.

// var num = 15;
// console.log(num );
// var newNum=++num +5;
// console.log(newNum);

// var num = 15;
// console.log(num );
// var newNum=num-- +5;
// console.log(newNum);

// var num = 15;
// console.log(num );
// var newNum=--num +5;
// console.log(newNum);


// comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether is true

// var a=30;
// var b=10;
// Equal(==)
// console.log(a==b);

// Not equal (=)
// console.log(a!=b);

// Greater than(>)
// console.log(a>b)

// Greater than or equal (>=)
// console.log(a>=b);

// less than(<)
// console.log(a<b);

// less than or equal(<)
// console.log(a<=);



// Logical operator 
// logical operator are typically used with Boolean (logical)  values;
// when they are; they return aboolean value 

// var a=30;
// var b=-20;

// logical AND(&&)
// the logical AND (&&) operators (logical conjunction ) for a set of 
// operands is true if and only if all of its operands are true 

// console.log(a>b && b>0  && b<0);
// console.log(a>b && b>-50  && b<0);



// Logical OR(||)
// the logocal origin(||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true

// console.log((a>b) || (b>0)  || (b<0));
// console.log((a>b) || (b>0)  || (b>0));


// Logical NOT(!)
// the logical not (!) operands (logical , compliments, nega)....
// takes truth to falsity and vice versa

// console.log(!((a>0)||(b<0)) )
// console.log(!false);
// console.log(!true);

// string concatenation (operator)
// the concatenation operator (+) concatenates two string values together ,
// returning another string that is the union of the two operand strings


// console.log("Hello World");
// console.log("Hello "  +  "World");

// var myName ="payal"
// console.log(myName +" maroti");
// console.log(myName +" Maroti" +" Matale")


// 4)challenge time
// 1. what will be the output of 3**3
// console.log(9**2);//9*9
// console.log(10** -1); -1


// 2.what will be the output , when we add a Number and a string


// console.log(5 +"payal")
// console.log(5 -"payal")

// 3.write a program to swap two numbers
var a = 5;
var b = 10;

// b=5; a=10

// var c=b;//c=10
// b=a;//b=5;

// console.log("the value of a is " +a);
// console.log("the value of b is "+b)

// 4. write a program to swap two numbers without using third variable

// a=a+b;  //a=15
// b=a-b;  //b=5
// a=a-b;// a=10

// console.log("the value of a is " +a);
// console.log("the value of b is "+b)



// 4.interview question
// what is difference between == vs ===?

// var num1=5;
// var num2='5';
// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1==num2);
// console.log(num1===num2);



// control Statements & Loops
// if...else
//  the if statements executes a statements if a specified condition is truthy.
//  if the condition is falsy , another statements can be executed

// if raining=  raincoat
// else no raincoat

var tomr = "rain";
if (tomr == "rain") {
    console.log('take a raincoat');
} else {
    console.log('No need to take raincoat');
}


// que)Write a program that works out whether if a year is a leap year or not?
// A normal year has 365 DynamicsCompressorNode, leap years have 366, with an extra day in February.


var year = 2020;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log("the year " + year + " is  a leap");
        }
        else {
            console.log("the year " + year + " is not a leap");
        }
    }
    else {
        console.log("the year " + year + " is  a leap");
    }
}
else {
    console.log("the year " + year + " is not a leap");
}


// que) What is truthy and falsy values in javascript?
// We have tatal 5 falsy values in javascript
// 0,"", undefined ,null,NaN ,false** is false anyway

if (score = 5) {
    console.log("OMG, we loss the game")
} else {
    console.log("Yay, We won the game")

}



//* Switch Statements
// Evaluates an expression , matching the expressions value to a
// case clause, and executes statements associated with that case.

// 1st without break statements
// Find the Area of circle , triangle and rectangle

// var area = "rectangle";// circle,triangle also check
// var PI = 3.142, l = 5, b = 4; r = 3;
// if (area == "circle") {
//     console.log("the area of the circle is :" + PI * r ** 2);
// }
// else if (area == "triangle") {
//     console.log("the area of the triangle is :" + (l * b) / 2);

// }
// else if (area == "rectangle") {
//     console.log("the area of the rectangle is :" + (l * b));
// }
// else {
//     console.log("please enter valid data")
// }



// var area = "circle";
// var PI = 3.142, l = 5, b = 4; r = 3;

// switch (area) {
//     case 'circle':
//         console.log("the area of the circle is :" + PI * r ** 2);
//         break;
//     case 'triangle':
//         console.log("the area of the triangle is :" + (l * b) / 2);
//         break;
//     case 'rectangle':
//         console.log("the area of the rectangle is :" + (l * b));
//         break;

//     default:
//         console.log("please enter valid data");

// }













// While Loop
// the while statement creates a loop that executes a specified statements
// as long as the test condition evaluates to true .valueOf


// var num = 0;

// while (num<=10) {
//     console.log(num);
//     num++;
// }



// Do-While Loop
var num =20;
do{
    console.log(num);
    num++;
}while (num<=10);

// For Loop
// For in Loop
// For of Loop


// Conditional (ternery ) operator
// the conditional (ternery) operator is the only javascript operator
// that takes three operands
// var age =17;
// if(age>!18){
//     console.log("you are eligible to vote");

// }else{
//     console.log("you are not eligible to vote");
// }

// var age=17;
// console.log((age>!18)? "you can vote": "you cant vote");




