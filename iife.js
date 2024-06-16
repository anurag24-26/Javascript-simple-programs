//Immediately Invoked Function Expressions
//Syntax
//Named IIFE
(function addone(number){
    console.log(1+number)
})(87);
/*the first bracket ()=>(function addone(){
    console.log(1+2)
}) is for the parenthesis
 and the last () is for the call of the function*/

 //UNNAMED IIFE => FOR WRITING NEXT IIFE FUNCTION WE NEED TO END THE FIRST USING SEMICOLON 
 ( (number)=>{
    console.log(1+number)
})(87)

