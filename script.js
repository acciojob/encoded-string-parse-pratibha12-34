const parseCode = (str) => {
	// let sep_r=str.split('0')
	let arr=[];
	let obj={firstname:"",lastname:"",id:''};
	arr.push(str.split('0'))
	let l=arr.length;
	for (i of arr){
		console.log(i)
		for(j of arr){
			if('0' in j){
				console.log("terminated")
				break
			}
			else{
				if(arr.indexOf(j)==0 ){
					obj["firstname"]=j;
					//console.log(obj);
					//obj[firstname]=j;
				}
				else if(arr.indexOf(j)==(arr.length-1)){
					obj["id"]=j;
					//console.log(obj);
				}
				else{
					obj["lastname"]=j;
					//console.log(obj);
				}
			}
			
		}
		// if(arr[])
	}
	return obj
	// return {} 
};
parseCode("Samiksha0000Doe0000123")

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));













