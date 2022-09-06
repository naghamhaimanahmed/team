// program to generate fibonacci series up to a certain number
// take input from the user

// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
//     alert(nextTerm)
// }





var bank=0;
var bank2=0;
var money=0;
var fayda=0; 
function Bank(){
do{
     var save=parseInt(prompt("please enter your money" ));
         bank= bank+save;
         console.log(bank);
 }while(save>0){
 return bank;

}}
x=Bank();

function invest(x,d,f){
for( var i=1;i<=z;i++){
    x=x+(x*w/100)
}
return x;
}
var w=parseInt(prompt("please enter the percentge"));
let d=w;
var z=parseInt(prompt("please enter the years"));
let f=z;
neww=invest(x,d,f)
console.log(neww)
