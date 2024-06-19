//--forEach loop does not return any value
//so we use filter function
let mynums=[12,3,4,2,54]
let mynewnums=mynums.filter((item)=>item>4)
console.log(mynewnums);

console.log("-------------------------------------");
const ew=mynums.map( (num) => num +10)
console.log(ew); //output -[ 22, 13, 14, 12, 64 ]

//chaining-using 2,3 methods at once-- i can use filter methods too in this array 
const nwr=mynums.map((item) => item *10).map((item)=>item+1)
console.log(nwr); 
//----------reduce
const oi=mynums.reduce(function(acc,currval){
    return acc + currval
},0)
console.log(oi); 