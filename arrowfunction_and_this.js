//this keyword in javascript----it shows the current context
//output 
const user={
    name:"Anurag",
    surname:"tripathi",
    Welcome:function(){
        console.log(this);

    }
}
user.Welcome()
user.name='anuj'
user.Welcome()
//{ name: 'Anurag', surname: 'tripathi', Welcome: [Function: Welcome] }
//-----------------------------------------------------------------------------------------------------
//arrow function in javascript

const addtwo=(number)=>{
return number+2
}
console.log(addtwo(87));
//implicit function of the same above addtwo function // no need of return in impilcit functions
const addthree=(number) =>  number+3
console.log(addthree(90));