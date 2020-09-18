const firstArg = process.argv[2].toLowerCase();
const secondArg = process.argv[3].toLowerCase();

const argArray = [process.argv[2].toLowerCase(), process.argv[3].toLowerCase()];

if(firstArg === secondArg){
	console.log('0');
} else if(firstArg === argArray.sort()[0]){
	console.log('-1');
} else {
	console.log('1');
}
