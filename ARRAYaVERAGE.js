let sum=0
let averagesume=0
function averagevalue(arr){
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i]
        }
        if(sum>0){
            averagesume=sum%arr.length
            
        }
}
averagevalue(arr)
console.log(averagesume)
