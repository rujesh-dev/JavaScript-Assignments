// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
 let i=0;
function counter(){
    // let count =0;
  
   
     setTimeout(()=>{
       
       console.log(i++);
       counter();
       
      
    },1000);
   
  
}



counter();