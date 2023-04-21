let arr=[1,3,4,2,4,2,1,3,5];
let result=[];
for(let i=0; i<=10;i++)
{
 	result[i]=0;
}
for(let i=0; i<arr.length;i++)
{
	result[arr[i]] +=1;
	
}
for(let i=0; i<result.length;i++)
{
	if(result[i]>1)
	{
		console.log(i);
	}
}
