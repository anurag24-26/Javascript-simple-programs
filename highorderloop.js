
//----------------------HIgh ORder LOOPS----------------
//forof loop
let string=''
let arr=[1,2,3,4,5]
for (const num of string||arr) {
    console.log(num)
}

//----------Maps==Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
/*Methods and properties are:

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
*/
const map= new Map()  //<<<<syntax
map.set('+91','India')
map.set('+92','idk')
// console.log(map);
//------loop on map
for (const [key,value] of map) {
    console.log(key,'>');
    
}

//----loop on object
let myobject={
    oo:"87",
    io:"popo"
}
//--------------forin loop
for (const key in myobject) {
   console.log(key);
}

//----------------foreach loop----it uses call back function
let codeing=["js","python","java"]

codeing.forEach( function(item){
    console.log(item,"hello")
} )

codeing.forEach( (it)=>{
    console.log("me")
})

//craetunng functtion and calling
function printme(item){
    console.log(item);
}

codeing.forEach(printme)