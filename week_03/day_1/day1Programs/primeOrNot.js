let num =200;
 for(i=1;i<=num;i++){
 let num=i;
 count = 0;
 for(j=1;j<=num;j++){
   if(num%j==0){
     count++
   }
 }
 if(count==2){
   console.log(i,"is a prime")
 }
   else{
     console.log(i,"is not a prime")
   }
  
 }
