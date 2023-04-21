let number=153;
 let cube =number+"";
 let count=0;
 for(let i=0;i<cube.length;i++){
     let sum=cube[i];
     count+=Math.pow(sum,cube.length);
 }
 if(count==number)
 {
     console.log("Armstrong")
 }
 else
 {
     console.log("Not Armstrong")
 }
