import{useEffect,useState}from"react";
export const Counter=()=>{
    
   const [min,setMIn]=useState(1);
   const [sec,setSec]=useState(1);
   useEffect(()=>{
       let myint=setInterval(()=>{
           if(sec>0){
               if(sec<=59){
               setSec(sec+1);
               }
               else{
                   setMIn(min+1);
                   
                   setSec(sec*0)

               }
           }
           if(sec===0){
               if(min===0){
                   clearInterval(myint)
               }
               else{
                   setMIn(min+1);
                   setSec(sec+1);
               }
           }
       },500)
       return()=>{
           clearInterval(myint);
       }
   })
    return(
        <div>
            <h1>Timer</h1>
            <h1>{min}:{sec}</h1>
        </div>
    )
}