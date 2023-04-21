let arr=[[1, 3 , 4],
	 [6 ,3 ,2],
	 [9 ,2 ,10]] ;                        
	  
  let bag="";


for(let j=0;j<arr.length;j++)
{

	bag+=arr[0][j]+" ";

}
 

for(let j=1;j<arr.length-1;j++)
{
	bag+=arr[1][1]+" ";
  
}
 
for(let j=0;j<arr.length;j++)
{
	bag+=arr[2][j]+" ";
} 
console.log(bag);
