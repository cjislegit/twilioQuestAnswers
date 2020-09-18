const argument = process.argv[2];

const numArgument = Number(argument);

if(numArgument === 0){
	console.log('alive');
} else {
	console.log('other');
}
