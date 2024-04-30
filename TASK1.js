 const delay=(ms)=>{
    return new Promise(resolve=>setTimeout(resolve,ms))
 }
 const iterate=async(arr)=>{
for(let i=0;i<arr.length;i++){
await delay(1000)
console.log(arr[i])
}
}
iterate(["sana","ikbel","sedki"])