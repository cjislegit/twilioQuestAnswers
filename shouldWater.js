const firstArg  = process.argv[2];
const secondArg = process.argv[3];

const lifeStatus = Number(firstArg);
const dryness = Number(secondArg);

if(lifeStatus === 0 && dryness > 10){
	console.log('WATER');
}
