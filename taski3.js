const awaitcall=async()=>{
    try{

    
        const data=await fetch('https://catfact.ninja/ft')
const res=await data.json()
console.log(res)
}catch(error){
    console.log('something wrong',error)
}}
awaitcall()
const asyncfunc1=async()=>{
    try {
        console.log("first function")
    } catch (error) {
        console.log("something went wrong")
    }
    }
    const asyncfunc2=async()=>{
        try {
            console.log("second function")
        } catch (error) {
            console.log("something went wrong")
        }
        }
        const asyncfunc3=async()=>{
            try {
                console.log("third function")
            } catch (error) {
                console.log("something went wrong")
           }
          
           }
           const delay=(ms)=>{
            return new Promise(resolve=>setTimeout(resolve,ms))
        }
        const chainedAsyncFunctions= async()=>{

        try {
        await delay(1000)
        await asyncfunc1()
        await delay (1000)
        await asyncfunc2()
        await delay(1000)
        await asyncfunc3()
    } catch (error) {
       console.log("somthing went wrong",error) 
    }
}
chainedAsyncFunctions()