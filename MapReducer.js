//Map

let numbers = [6, 42, 481, 56, 36];

let multipleNumbers = numbers.map((number) => number * 25); //multiply each number by 25
let addedNumbers = numbers.map((number) => number + 3); //add 3 to each value
console.log(addedNumbers);
console.log(multipleNumbers);
console.log(...numbers);

let team = [
{
    name:"Kasun",
    age  :"56"

},
{
    name:"Kasun",
    age  :"67"

},

{
    name:"Kasun",
    age  :"45"

},
{
    name:"Kasun",
    age  :"45"

}
 

];


 let newTeam =  team.map(teamMember => teamMember.age +=10) //Get the each value of age and add 10 to it
 console.log(newTeam); 

 //Reduce

 let values =[6,45,34,67];

 let n =values.reduce((acc,cur) =>acc*cur); //Get the value of  all the  values combined in values array

 console.log(n);

