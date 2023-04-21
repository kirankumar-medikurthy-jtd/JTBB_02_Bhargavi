let str="jtbfoundation";
             
let consonant=0;
let vowel=0;
for(let i=0;i<str.length;i++)
{
	let c=str[i];
	 if(c=='a' || c=='e' || c=='i' || c=='o' || c=='u')
	 {
	 	vowel++;
	 }
	 else
	 {
	 	consonant++;
	 }
}
console.log(vowel);
console.log(consonant);
