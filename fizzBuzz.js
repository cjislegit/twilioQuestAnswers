const argument = process.argv[2];
const numArgument = Number(argument);
let answer = '';

if(numArgument % 3 === 0){
	answer = 'Java';
}

if(numArgument % 5 === 0){
	answer = `${answer}Script`
}

if(answer === ''){
	answer = numArgument;
}

console.log(answer);
