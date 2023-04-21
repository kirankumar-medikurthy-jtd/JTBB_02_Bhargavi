let arr= [[1, 3,  4],
          [6 ,3 , 2],
          [9, 2 , 10]] ;
                                                  
 
let bag ="";
for(let i=0;i<arr.length;i++)
{
	bag+=arr[i][0]+" ";
}
for(let i=1;i<arr.length-1;i++)
{
	bag+=arr[i][1]+" ";
}
for(let i=arr.length-1;i>=0;i--)
{
	bag+=arr[i][2]+" ";
}
console.log(bag);
