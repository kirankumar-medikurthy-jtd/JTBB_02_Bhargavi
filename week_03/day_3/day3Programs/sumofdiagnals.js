
let arr=[[1 ,3 ,4],
         [6 ,3 ,2],
         [9 ,2 ,10]];
let sum=0;
for(let i=0;i<arr.length;i++)
{
	sum+=arr[i][i];
 }
for(let j=0; j<arr.length-2;j++)
{
	sum+=arr[2][j];
}
for(let i=0;i<arr.length-2;i++)
{
	sum+=arr[i][2];
}
console.log(sum);
