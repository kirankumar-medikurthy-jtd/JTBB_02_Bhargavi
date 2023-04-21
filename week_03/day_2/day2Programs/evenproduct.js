let arr=[2,4,2,7,1,9];
let product=1;
for(let i=0;i<arr.length;i++)
{
	if(arr[i]%2==0)
	{
		product*=arr[i];

	}

}
console.log(product);
