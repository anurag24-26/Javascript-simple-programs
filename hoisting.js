//HOisting in js is something like if i i declare a function in a variable and call the function before the declaration. example is below
addone(8)

function addone(num){
    return num+1
}

addtwo(8)
const addtwo=function(num){
    return num+2
}
/*addtwo(8)
^

ReferenceError: Cannot access 'addtwo' before initialization
<<<<<<< HEAD
    */
=======
    */
>>>>>>> origin/main
