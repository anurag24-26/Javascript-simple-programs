
//normal checking
// console.log(2=='2')
// //strict checking
// console.log(2!='2')
//output true false

//< > == === <= >= != !==
/* Diffrence between != and !==
!=)
!==)
*/

//------------------------------------implicit scope---------------------------
const balance=8
// if(balance>30) console.log(`your balance is ${balance}`); //output- your balance is 32
//-------------------------------------------------------------------------------
if(balance>30){
    console.log(`your balance is ${balance}`)
}else if(balance<65){
    console.log(`your balance is ${balance} second one is executed`)
}


//Nullish cOALESCING OPERATORS (??)
let VALUE=32 ?? null
console.log(VALUE);

VALUE=undefined ?? 15
console.log(VALUE);



//Terniary OPeratore
// let price =09;
// price<=32 ?console.log("less"):console.log("more")



//for loop
// for(let i=0;i<=9;i++){
//     console.log(i);
// }
