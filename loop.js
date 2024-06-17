
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