const argument = process.argv[2];

const numArgument = Number(argument);

if(numArgument === 0){
	console.log('alive');
} else if(numArgument === 1){
	console.log('flowering');
} else if(numArgument === 2){
	console.log('shedding');
} else if(numArgument >= 3){
	console.log('other');
}
