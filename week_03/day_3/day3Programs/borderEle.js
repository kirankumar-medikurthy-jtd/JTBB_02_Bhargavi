let arr= [[1, 3,  4],
          [6 ,3 ,2],
          [9, 2 ,10]] ;
                                                  

    let bag ="";
for(let i=0;i<arr.length;i++)
{
	bag+=arr[i][0]+" ";
}
console.log(bag);
for(let j=1;j<arr.length;j++)
{
	bag+=arr[2][j]+" ";
}
console.log(bag);
for(let i=arr.length-2;i>=0;i--)
{
	bag+=arr[i][2]+" ";
}
for(let j=1;j<arr.length-1;j++)
{
	bag+=arr[0][j]+" ";
}
console.log(bag);
