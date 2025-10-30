function stringChop(str, size) {
  // your code here
	let result=[];
	for(let i=0;i<str.length;i+=size){
		let chunk =str.slice(i,i+size);
		result.push(chunk );
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
