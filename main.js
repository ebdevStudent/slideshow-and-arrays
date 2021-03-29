
// keyword length
// keywords are the reserved words of a coding language

var var1 = "Rahul Allala";
var len = var1.length;
console.log (len);
// replace function (para1, para2)
var name_1 = "hello I am Rahul Desgupta";
var replace_1 = name_1.replace ("Desgupta","Allala");
console.log(replace_1);

// toLowerCase() function
var capital_1 = "HELLO";
var answer_1 = capital_1.toLowerCase();
console.log (answer_1);

var lower_1 = "salutations";
var answer_2 = lower_1.toUpperCase();
console.log (answer_2);

// charAt(index number)
// length = 11 (salutations)
var print_u = lower_1.charAt(3);
console.log(print_u);

// print the last letter of a word
var lt_1 = "Geronimo";
var lastlt_1 = lt_1.charAt(7);
console.log (lastlt_1);

var replace_2 = lt_1.replace ("o","_");
var replace_3 = replace_2.replace ("o","_");
console.log (replace_2);
console.log (replace_3);

// Maths functions
// square (4) = 16
// square root (25) = 5
// Math.sqrt(parameter)
// Math is the name of the library. 
// Library is a collection of pre-built functions.

var square_root = Math.sqrt(25);
console.log(square_root);

// Math.max(num1,num2,num3,num4...............)
var maxnum = Math.max(1,3,2,4,5,6,4,6,7);
var minnum = Math.min(32,45,16,74,86,3,6);
console.log("maximum number =",maxnum,"minimum number =",minnum)

// Math.pow(basevalue, power)
// 2 x 2 x 2 x 2 x 2 = 2˜5
// 9˜6

var pwrnum = Math.pow(9,6);
console.log(pwrnum);

//toFixed(integer)

var decnum = 45.1309380958098; 
var decnum2 = decnum.toFixed(3);
console.log(decnum2);

// typeof keyword

var typeof_number = 6;
console.log(typeof typeof_number);

var tpf_num = "Hello";
console.log(typeof tpf_num);


// ARRAYS are special type of variable that holds multiple values

var fruits = ["Apple","orange","pinaaple","bannana"];
console.log(fruits)
// document.getElementById("output").innerHTML = fruits;
var images = ["book1.jpg","avengers.png","treeimage.png","rainbowatom.png"];
var counter = 0;
function nextimg(){
document.getElementById("img1").src = images[counter];
counter= counter + 1;
if (counter > 3){
counter = 0;
}
document.getElementById("audio1").play();
}