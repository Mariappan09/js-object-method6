using reduce-6
	const numbers=[1,2,3,4,5];
    a=numbers.reduce(function(keys,val,index){
		return keys+val+index*2.5
	});
	console.log(a);
	