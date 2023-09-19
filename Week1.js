// Input from the user and tell if it is odd or even.
// let a = prompt("enter a number")
// if(a%2 === 0){
// console.log("is is even")
// }
// else{
//     console.log("is is odd")
// }

// write a program to take full name, adress from the user and console.log it in the format firstname = firstname, lastname= lastname
 var details= prompt("what are your details?");
 const FullDetails = details.split(" ");
 var adress = prompt("enter your adress")
 var Firstname = FullDetails[0];
 var lastname = FullDetails[1];
 var Adress = FullDetails[2];
 console.log("firstname: " + Firstname + "lastname: " + lastname + "Adress: " + Adress);

 let a ="1234"
 let b =parseInt(a)
 let c =parseFloat(a)
 console.log(typeof a)
 console.log(typeof b)

 let d = 12345
 let e = d.toString()
 console.log(typeof e)

 