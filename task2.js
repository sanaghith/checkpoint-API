const awaitcall=async()=>{
try{
    const x =await fetch('https://catfact.ninja/fact');
   const y =await x.json();
    console.log(y);   
}
catch (error){console.log(error);}
}
awaitcall()

