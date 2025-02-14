 //How to write js code :

//Variable => container to store values

///Syntax : [Formulae]
//variable_type variable_name = value
//console.log(variable_name);

//Variable types :

//var

// var a = 10 // var can both redeclare and reassign
// var a = 5
// console.log(a);

// var a = 10  // var can reassign
//     a = 5
// console.log(a);

//let => let can only reassign, it does not support redeclare
// let a = 10
//     a = 5
//const => const does not support both redeclare and reassign
 


// data type:

// primitive data type 
   // string  - "" or ''
   //var str = "happy","1235"

     //number - 12345 or 23.3

     //Boolean - true or false
  
     // 

// non primitive data type 
  // array: []
// var arr = ["hi",3,null,true]
// console.log(arr);


// console.log(arr[2]); // index

// length starts with - 1
//index starts with - 0

 
//object: {} - collection of key and value pairs 

//   var id ={
//     name : "hari",
//     age : 20,
//     dep : "Bsc"
//   }

// console.log(id);


//function - block of code 

//function statement or declaration
// sysntax : 
// function var_name(){

//}

//example 
// function box(){

// console.log("b")
// console.log("siva")

// }

// box()
//parameter - it act as a variable_name 
//arguements - is like a value 
 
// function box2(x){ // parameter 

//     console.log(x)

// }
// box2(100) // argument

//return 
// function box3(y){
//     return y
// }

// console.log(box3("sivakumar"))

//task : 
//10[argument] + 10[argument] = 20 


//function expression

// function box4(x,y){

//     console.log(x+y)
// }
//    box4(20,20)

//function expression
   
// var bigbox = function smallbox(){
//     console.log("kumar")
// }
// bigbox()

// var bigbox = function (){ // anonymous function 
//     console.log("kumar")
// }
    //immediate invoke function exppression [IIFE] 

//     (function(x){
//         console.log(x);
//     })(10)

//    var store = (function(x){   // if variable name is given it could be called any where 
//         console.log(x);
//     })(10)

    //arrow function : short hand syntax
    //syntax :
    // ()=>{}

        // var arr = ()=>{console.log("hello barath")}
        // arr()

//operaters :
//arithmetic operater
// + add, - sub,*mul,/ div, %modulus,**exponent [power of value] , increment ++, decrement -- 


//Assignment operater

// var an =10
// an += 5  //15
// console.log(an);

//Logical operater
// && => and 
// || => or 
//  | => not

// var a = 10
// var b = 5
// console.log(a!=b);

//Comparision operater  < lessthan , > greaterthan , <= lessthanoreaquel , >= greaterthanoreaqual
// var num1 = 10
// var num2 = 30

// console.log(num1>num2);

//Equality operater   == double equals 
// var de = 10 
// var de2 = 10
// console.log(de==de2);



//Ternary operater
//syntax:
//(condition) ? "statement_true" : "statement_false"

// var limt = 20

// var limit = (AggregateError>=18 && age<=70) ? "he is eligible to vote" : "he is not eligible to vote"

// console.log(limit)

//LOOP: program will continuously execute untill the condition met.

//types of loop =>  for loop, while loop, do while loop ,
// forloop 
//syntax:  
// for (initalization ; condition ; iteration [increment ++ , decrement --] ){
                  //code
//}

// for(var i = 0 ; i<5 ; i++ ){
// console.log(i);
//}
//steps
//step1 -> i -0 -> 0<5[true] => print : 0 =>0++ => 0+1 = 1
//step2=->i=1-> k5[true] m>print : 1 -> 1++-> 1+1 - 2
//step 3 -> i -2 => 2<5[true] => print : 2 => 24+=> 2+1 " 3
//step 4 => i = 3 => 3<5[true] => print : 3 => 3++ -> 3+1 = 4
//step 5 => i = 4 -> 4<5[true] => print : 4 => 4++ => 4+1=5
//step6 => i = 5 => 5<5[false] // loop will stop


// for(var i = 5 ; i>0 ; i-- ){
//     console.log(i);
//     }

// // string : 
// var str = "happy"
//      for (var i = 0 ; i<str.length ; i++){
//         console.log(str[i]);
     //}


// var str = "sivakumar"
//    for (var i = 0 ; i)


    //  var str = "sivakumar"
    //  var store = " "
    //  for (let i = str .length-1 ; i>=0 ; i--){

    //   store+=str[i]

     //}
//  console.log(store);

// while loop - entry level condiional checking

// let count = 0 // initalization
// while(count<5){
//   console.log(count); // printing statement
//   count++ ///iteration
// }


// do while loop - 

// let docount = 0
// do{
//   console.log(docount);
//   docount++
// }while(docount<5)

//task :

// ---do-while loop --->>> mundhiri kottai



// let docount = 0
// do{
//   console.log(docount);
//   docount++
//   } while (docount<5)


//task 


// while & dowhile descending order


// if - else

// var age = 2
// if (age >= 18)
// {console.log("he is eligible to vote");
// }
// else{console.log("he is ineligible to vote");
// }

//else - if

// var mark = 35
// if (mark >=90 && mark<=100){
//   console.log("Grade O");
//   } 
// else if (mark>=80){console.log("Grade A");
// }
// else if (mark>=70){console.log("Grade B");
// }
// else if (mark>=60){console.log("Grade C");
// }
// else if (mark>=50){console.log("Grade D");
// }
// else if (mark>=40){console.log("Grade E");
// }
// else {console.log("FAIL");
// }



//array methods

//push --->>> it will add the desired value at the end of the array

// var bc = ["A","B","C"]
// bc.push ("D","E")
// console.log(bc);

//pop --->>> it will remove the last value in an array


// var bc = ["A","B","C"]
// bc.pop()
// console.log(bc);




//unshift --->>> it adds a value at the start of an array

// var bc = ["A","B","C"]
// bc.unshift("D")
// console.log(bc);


//shift --->>> it removes the value at the start of an array

// var bc = ["A","B","C"]
// bc.shift()
// console.log(bc);



//concat

// var A = ["1","2","3"]
// var B = ["4","5","6"]
// var C = A.concat(B)
// console.log(C);



//sort

// var num = [4,7,5,8,6,2,9,1,10,3]
// num.sort((a,b)=>a-b)   //--->>>ascending
// console.log(num);


// var num = [4,7,5,8,6,2,9,1,10,3]
// num.sort((a,b)=>b-a)   //--->descending
// console.log(num);


//ascii
// var char = ["b","D","e","F","A","c"] //ascii
// char.sort()
// console.log(char);

// slice
// var birds = ["eagle","peacock","vulture","pigeon"]
// const slice = birds.slice(2)
// console.log(slice);

// var birds = ["eagle","peacock","vulture","pigeon"]
// const slice = birds.slice(1,-2)
// console.log(slice);

//splice
//syntax --->>> var_name.splice(index,counter[0,1],actualvalue)
//counter--->>> 0=> push & update, 1=> override the value


// const weeks = ["sun","mon","tue","thur","sat"]
// weeks.splice(3,0,"wed")
// weeks.splice(5,0,"fri")
// console.log(weeks);


// const weeks = ["sun","mon","tue","thur","sat"]
// weeks.splice(3,1,"wed")
// weeks.splice(4,1,"fri")
// console.log(weeks);


//string methods

//split

// var greet = "hello world"
// var spl = greet.split(" ")
// console.log(spl);

// //join
//  var j = spl.join(" ")
//  console.log(j);
 
// reverse

// var st = "javascript"
// var rev = st.split("").reverse().join("")
// console.log(rev);

//touppercase
// var up = "chennai"
// console.log(up.toUpperCase());

//tolowercase
// var lo = "CHENNAI"
// console.log(lo.toLowerCase());

//includes

// var inc = "vivek"
// var inc2 = inc.includes("e")
// console.log(inc2);

//chatAt
// var char = "happy"
// console.log(char.charAt(1));

//substring

// var sub = "goodmorning"
// console.log(sub.substring(4));

//repeat
// var greet2 = "hi"
// console.log(greet2.repeat(3));

//indexof 

// var idx = "javascript"
// console.log(idx.indexOf("a"));

//lastindexof 

// var idx2 = "javascript"
// console.log(idx2.lastIndexOf("a"));


//object:
// collection of key and value pairs:
 
// const obj = {
//    name : "kali",
//    age : 12
// }
// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);

// obj.name = "rajesh"

// console.log(obj);
console.log(tftdc);
 

//Nested Array and object 

// const stdobj = [

//   { 
//     name : "jagan",
//     age  : 23
//   },

//   { 
//     name : "gopal",
//     age  : 25
//   },

//   { 
//     name : "Aravindh",
//     age  : 28
//   }

// ]
// console.log(stdobj);
// console.log(stdobj[1]);



// object destructuring : 

// const ofcobj = {
// name : "siva",
// age : 20,
// dep : " IT"

// }
// const {name,age,dep} = ofcobj
// console.log(name,age,dep);


// formethods:
// foreach - arry loop
// var_name.foreach ((value,index,acctualarray)=>)

//   const weeks = ["sunday","monday","tuesday","wednesday","thursday"]
// weeks.forEach((val,idx,accarr)=> console.log(accarr))
// weeks.forEach((val,idx,accarr)=> console.log(val,idx))
// weeks.forEach((val,idx,accarr)=> console.log(val,idx,accarr))


 
// var issmbs =[
//   {  name : "siva",
//      age  : 24,
//      dep  : "IT",
//      idno : 110},

//   { name : "kamalesh",
//      age  : 24,
//      dep  : "cse",
//      idno : 111},

//   { name : "deepak",
//     age  : 24,
//     dep  : "ece",
//     idno : 112},

//  { name : "praveen",
//   age  : 24,
//   dep  : "b tech",
//   idno : 113},

// { name : "antony",
//   age  : 24,
//   dep  : "arts",
//   idno : 114

// }
// ]
// const {name,age,dep,idno} = issmbs[3]
// console.log(name,age,dep,idno);


// for in  - 
// forof

// asyncronization
//syncronization

// time out

// console.log("start");
// setTimeout(()=> {
// console.log("delayed by 2 mins")
// },2000);

// console.log("end");

// callback--> Excute the Function whithin another function 

// function hello(callback){
//   console.log("good afternoon");
//   callback();
// }
//  function hai(){
//   console.log("bye bye")
//  } hello(hai);
 
//  function hello(callback){
//   setTimeout(() => {
//     console.log("delayed by 3min")
//   }, 3000);
//   console.log("good afternoon");
//   callback();
// }
//  function hai(){
//   console.log("bye bye")
//  } hello(hai);

//  function hello(callback){
//   setTimeout(() => {
//     console.log("good eve")
//   }, 3000);
 
//   callback();
// }
//  function hai(){
//   console.log("bye bye")
//  } hello(hai);

// callback hell => multiple 
 
// function hello(callback){
//   console.log("good morning");
//   callback();
// }
// function hai(callback){
//   console.log("bye bye");
//   callback();
// }
// function hh(callback){
//   console.log("good afternoon");
//   callback();
// }
// function gg(){
//   console.log("good eve");
  
// }

// hello(()=>{
//   hai(()=>{
//     hh(()=>{
//       gg()
//     })
//   })
// })

// class ---> it is bluprint that contains methods and objects

//    class jsclass {
//     setName(name){
//       this.name = name;

//     }
//     setAge(age){
//       this.age=age;
//     }
//     printing(){
//       console.log(`my name is ${this.name}
//        my age is ${this.age } `)
//     }
//    }
 
// const per = new jsclass();    
// per.setName("sivakumar");
// per.setAge(24);
// per.printing();


// promise ---> it is an object that handles asynchronous operation in synchronous way

// resolve  .then
// reject    .catch

// let myPro = new romise((resolve,reject)=>{
//        let success = true;
//        if(success){
//         resolve("passed");
//        }
// else{
//   reject("failed");
// }

// })

// myPro
// .then((Value)=>{
//   console.log(Value);
// })
// .catch((error)=>{
//   console.log(error);
// })


// const p1 = Promise.resolve('promise 1')
// const p2 = new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve('promise 2')
//   },2000);
// })

// const p3 = Promise.resolve('promise 3')

// Promise.all([p1,p2,p3])
// .then((value)=>{
//   console.log (value)
// })


class cons{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  person(){
    console.log(`my name is ${this.name}
      my age is ${this.age}`);
  }
}
const cl = new cons("siva",25);
cl.person();


// async function name(params) {
  
// }

// async (params) => {
//   await
// }
 
//------->dupulicate count of your name 
 

const name = 'my name is Siva';

// Convert to lowercase to count case-insensitively
const nameLowerCase = name.toLowerCase();

// Create an object to store letter counts
const letterCounts = {};

// Count the occurrences of each letter
for (const char of nameLowerCase) {
  if (letterCounts[char]) {
    letterCounts[char]++;
  } else {
    letterCounts[char] = 1;
  }
}n 

// Display the duplicate counts
console.log('Duplicate letter counts:');
for (const [letter, count] of Object.entries(letterCounts)) 
  if (count > 1) 
    console.log(`${letter}: ${count}`);