//functions
//Example -1 
// function getAge(birthYear){
//   const currYear = new Date().getFullYear();
//   return currYear - birthYear;
// }
// console.log(getAge(1991));

//Arrow functions
// const sum = (a,b)=> a+b;
// console.log(sum(1,3));


// Q Two players are playing a shooting game.
// Each player shoots 4 times, and then the average of the 4 scores is calculated.
// A player ONLY wins if it has at least DOUBLE the average score of the other player. Otherwise, no player wins!

// Create an arrow function to calculate the average of 4 scores for both players.
// Create a function checkWinner that takes the average score of each player  and then displays the winner, together with the victory points, in given format "Player1 win (18 vs. 6)".
// Do not Ignore draws. 

// SOLU :
// const average = (scores)=>{
//   let totscore = scores.reduce((totalScore , currScore)=>{
//     return totalScore+currScore;
//   })
//   return totscore /4;
// }
// function checkWinner(avg1 ,avg2){

//     if(avg1>=avg2*2)
//     console.log("Player1 wins",avg1*4,"vs",avg2*4);
//     else if(avg2>=avg1*2)
//     console.log("Player2 wins",avg2*4,"vs",avg1*4);
//     else
//     console.log("Game is Draw");
// }
// const toNumArray = (score)=> +score;
// const Player1Scores = prompt('Enter the scores of Player1  : ').split(' ').map(toNumArray);
// const Player2Scores = prompt('Enter the scores of Player2  : ').split(' ').map(toNumArray)
// checkWinner(average(Player1Scores),average(Player2Scores));


//Arrays
//1.Array creation
// let friends = ["ram" ,"mohan","radhe"];
// console.log(friends[3]);

//array of size 5
// let friends = new Array(5); 
// console.log(friends);

//arrays creation method with 1,2,3,4,5
// let friends1 = new Array(1,2,3,4,5);
// console.log(friends1);
// console.log(friends1.length);

//Array methods
//method function  innside object
// years=[];

// years.push(1991);
// years.push(1992);

// years.unshift(1970);
// console.log(years);

// let removedYear = years.pop();

// let removedYearFromFront = years.shift();
// console.log(years,removedYearFromFront);

// years.push(1);
// years.push(2);
// years.push(3);

// console.log(years.at(1),years.at(-1))

// years = years.concat([1,2,3,4]);
// console.log(years);

// ################### array practice #########################################

// const friendsList = ["ram","sita","krishna"];

// let person = prompt("Enter your name : ");
// if(friendsList.includes(person)){
//   console.log("welcome");
// }
// else{
//   console.log("bhag");
// }
// ######## delete #################################

// const friendsList = ["ram","sita","krishna"];
// delete friendsList[1];
// console.log(friendsList);

// ############################# SPLICE METHOD ########################


// const friendsList = ["ram","sita","krishna"];
// const deleted =friendsList.splice(1,2,"inserted");
// console.log(friendsList,deleted);

// #################### FOR EACH ############################################
//for each does not return anything

// const friendsList = ["ram","sita","krishna"];

// friendsList.forEach(friend => console.log(friend));
// friendsList.forEach(function(friend ,index,friendsList){
//   console.log(friend,index,friendsList);
// });

// const values = [1,2,3,4,5];
// let sum =0;
// values.forEach((e)=>{
//   sum+=e;
// });
// console.log(sum);

// let sumAgain = values.reduce((sum,currVal)=> sum+=currVal,0);
// console.log(sumAgain)

// ##################### map method #############################
// map method return array
// const values = [1,2,3,4,5];
// const mulBy2 = (e)=> e*2;
// const values1 = values.map(mulBy2);
// console.log(values1);


// ############################## reduce ##############################
// const values = [1,2,3,4,5];
// let sum = values.reduce((sum,currVal)=>sum=sum+currVal);
// console.log(sum/values.length);

// create an array eith three prices 125 647 39 create a function that calculates
// 20% tax if the value is less than 200 and 15% if value is more . 


// const prices = [125,647,39]
// const total = prices.map((e)=>{
//   if(e<200)
//   return e+ 0.2*e;
//    else
//    return e+ 0.15*e;
// });
// console.log(total);


// ################################## objects ###########################
// const person = {"key1" :"value1" ,"key2" : "value2"};
// console.log(obj1);
// console.log(obj1.key1);
//comsole.log(obj1["key1"]);
// obj1.key3 = "value3";

// const person ={
//   firstName : "Ravi",
//   lastName  : "Singh",
//   age: 18,
//   friendslist : ["ram","shyam","omkar"]
// }
// let info = prompt("Enter the information you want  : ");
// if(person.hasOwnProperty(info))
// console.log(person[info]); 
// else
// console.log("info not present");

// ########################### this keyword #################################

// const person1  ={
//   firstName  : "Ravi",
//   lastName : "Singh",
//   age : 12,
//   birthyear :  1992,
//   calcAge : function () {
//     let obj = new Date();
//     let currYear = obj.getFullYear();
//     return currYear - this.birthyear;
//   } 
// }
// console.log(person1.calcAge());

//Arrow function does not have this value so should not be used as   a method of an object literal

// ####################### object task ######################
// Q Create two person objects containing full name and birth year and create
// a function inside person objects calculating ages of each person.
// Use age property to print which person is older.

// const person1 ={
//   fullName : "Ravi Singh",
//   birthYear : 2003,
//   calcAge (){
//     return new Date().getFullYear() - this.birthYear;
    
//   }
// }
// const person2 ={
//   fullName : "Rahul Singh",
//   birthYear : 2002,
//   calcAge (){
//     return new Date().getFullYear() - this.birthYear;
//   }
// }
// let person1Age = person1.calcAge(),person2Age = person2.calcAge();
// if(person1Age > person2Age)
// console.log("Person1 is older");
// else if(person2Age > person1Age)
// console.log("Person2 is older");
// else
// console.log("Person1 age is equal to Person2 age");

// ################# Date : 19/8/22 ###################






