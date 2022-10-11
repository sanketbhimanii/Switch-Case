HEAD
// 1.ways to print in JavaScript

console.log("hello word");
alert("me")
document.write("this is document write");

// 2.JavaScript console API

console.log("Hello word",6+4,"another log");
console.warn("this is warning");
console.error("this is an error");

// 3.JavaScript Variables

var number1 = 20;
var number2 = 30;
console.log(number1 + number2);

// 4. data types in JavaScript
// numbers
var num1 = 455;
var num2 = 451;

// string
var str1 = "This is String";
var str2 = "this is also string";

// object
var marks={
    sanket:52,
    prit:45,
    utsav:25
}
console.log(marks);

// Boolians
var a = true;
var b = false;
console.log(a,b)

// var und=undefined;
var und;
console.log(und);

var n = null;
console.log(n)

// arrey
var arr=[1,2,3,4,5,6,7,8,9,0]
var arr=[20,10]

// 5.operators

// erithmetic operator
var a=100;
var b=10;
console.log("the value of a+b is",a+b);
console.log("the value of a-b is",a-b);
console.log("the value of a*b is",a*b);
console.log("the value of a/b is",a/b);

//Assignment Operator
var c=b;
c/=2;
console.log(c)

//Comparison Operators
var x = 34;
var y = 50;
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x<y);

// logical operators

// logical and

console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)

// logical or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// logical not
console.log(!false);
console.log(!true);

// 6.functions in js
function avg(a, b) {
  c = (a + b) / 2;
  return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// // if-else statment
var age = 10;
if (age > 18) {
  console.log("you can drive");
}
// else{
//     console.log('you can not drive')
// }

// if-else ladder
var age = 20;

if (age > 18) {
  console.log("your focus on carriar");
}
if (age > 25) {
  console.log("your focus on resposibility");
}
console.log("End of ladder");

const s = "this can not be changed" ;
      // s = "i want to change this.This can not be change";
      console.log (s);

      let workhour=8 ;
      if (workhour>8){
        console.log("you can leave");

      }
      else{
        console.log("You can not leave");
      }

0



      


 // 1.ways to print in java
        // console.log("hello word");
        // alert("me")
        // document.write("this is document write");

        // 2.javaScript console API
        // console.log("Hello word",6+4,"another log");
        // console.warn("this is warning");
        // console.error("this is an error");         

        // 3.JavaScript Variables 
        // var number1 = 20;
        // var number2 = 30;
        // console.log(number1 + number2);

        // // 4. data types in JavaScript  
        // // numbers
        // var num1 = 455; 
        // var num2 = 451;


        // // string
        // var str1 = "This is String";
        // var str2 = "this is also string";
        
        // // object
        // var marks={
        //     sanket:52,
        //     prit:45,
        //     utsav:25
        // }
        // console.log(marks);
        
        // // Boolians
        // var a = true;
        // var b = false;
        // console.log(a,b)

        // // var und=undefined;
        // var und; 
        // console.log(und);

        // var n = null;
        // console.log(n)

        // // arrey
        // var arr=[1,2,3,4,5,6,7,8,9,0] 
        // var arr=[20,10]
        
        // // 5.operators
       
        // // erithmetic operator
        // var a=100;
        // var b=10;
        // console.log("the value of a+b is",a+b);
        // console.log("the value of a-b is",a-b);
        // console.log("the value of a*b is",a*b);
        // console.log("the value of a/b is",a/b);

        // //Assignment Operator
        // var c=b;
        // c/=2;
        // console.log(c)
        
        // //Comparison Operators
        // var x = 34;
        // var y = 50;
        // console.log(x==y);
        // console.log(x>=y);
        // console.log(x<=y);
        // console.log(x<y);
        
        

        // // logical operators 
        
        // logical and 
        // console.log(true&&true)
        // console.log(true&&false)
        // console.log(false&&true)
        // console.log(false&&false)
        
        // logical or
        console.log(true||true)
        console.log(true||false)
        console.log(false||true)
        console.log(false||false)

        // logical not
        console.log(!false)
        console.log(!true)

        // 6.functions in js
        function avg(a,b){
            c=(a+b)/2
            return c
        }
        c1 = avg(4,6);
        c2 = avg(14,16);
        console.log(c1,c2)

        // // if-else statment
        var age = 10
        if(age>18){
            console.log('you can drive');
        }
        // else{
        //     console.log('you can not drive')
        // }

    // if-else ladder
    var age=20 ;
   
    if (age>18) {
        console.log('your focus on carriar');
    }
    if (age>25) {
        console.log('
        your focus on resposibility');
    }
    console.log("End of ladder");

